"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import {
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { auth, db, storage, googleProvider } from "@/lib/firebase"

export interface UserProfile {
  uid: string
  displayName: string | null
  email: string | null
  photoURL: string | null
  gender?: string
  age?: string
  contactNumber?: string
  address?: string
  role?: string
  createdAt?: Date
  updatedAt?: Date
}

interface AuthContextType {
  user: User | null
  userProfile: UserProfile | null
  loading: boolean
  error: string | null
  signUpWithEmail: (email: string, password: string, userData: Partial<UserProfile>) => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  logOut: () => Promise<void>
  updateUserProfile: (data: Partial<UserProfile>, photoFile?: File | null) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)

      if (user) {
        try {
          // Fetch user profile from Firestore
          const userDoc = await getDoc(doc(db, "users", user.uid))

          if (userDoc.exists()) {
            setUserProfile({ uid: user.uid, ...userDoc.data() } as UserProfile)
          } else {
            // If user exists in Auth but not in Firestore, create a basic profile
            const basicProfile: UserProfile = {
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              createdAt: new Date(),
              updatedAt: new Date(),
            }

            await setDoc(doc(db, "users", user.uid), basicProfile)
            setUserProfile(basicProfile)
          }
        } catch (err) {
          console.error("Error fetching user profile:", err)
          setError("Failed to fetch user profile")
        }
      } else {
        setUserProfile(null)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Sign up with email and password
  const signUpWithEmail = async (email: string, password: string, userData: Partial<UserProfile>) => {
    try {
      setLoading(true)
      setError(null)

      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // Update display name in Auth
      if (userData.displayName) {
        await updateProfile(user, {
          displayName: userData.displayName,
        })
      }

      // Create user profile in Firestore
      const userProfile: UserProfile = {
        uid: user.uid,
        displayName: userData.displayName || null,
        email: user.email,
        photoURL: user.photoURL,
        gender: userData.gender,
        age: userData.age,
        contactNumber: userData.contactNumber,
        address: userData.address,
        role: userData.role || "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      await setDoc(doc(db, "users", user.uid), userProfile)
      setUserProfile(userProfile)
    } catch (err: any) {
      console.error("Error signing up:", err)

      // Handle specific error cases
      if (err.code === "auth/email-already-in-use") {
        setError("This email address is already in use. Please sign in instead or use a different email.")
      } else if (err.code === "auth/weak-password") {
        setError("Password is too weak. Please use a stronger password.")
      } else if (err.code === "auth/invalid-email") {
        setError("The email address is not valid.")
      } else {
        setError(err.message || "Failed to sign up")
      }

      throw err
    } finally {
      setLoading(false)
    }
  }

  // Sign in with email and password
  const signInWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)

      // Check if Firebase auth is initialized
      if (!auth) {
        throw new Error("Firebase authentication is not initialized. Check your Firebase configuration.")
      }

      await signInWithEmailAndPassword(auth, email, password)
    } catch (err: any) {
      console.error("Error signing in:", err)

      // Provide more specific error messages
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password. Please try again.")
      } else if (err.code === "auth/user-not-found") {
        setError("No account found with this email. Please sign up first.")
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.")
      } else if (err.code === "auth/api-key-not-valid") {
        setError("Firebase configuration error. Please contact support.")
      } else {
        setError(err.message || "Failed to sign in")
      }

      throw err
    } finally {
      setLoading(false)
    }
  }

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setLoading(true)
      setError(null)

      // Check if Firebase auth and googleProvider are initialized
      if (!auth || !googleProvider) {
        throw new Error("Firebase authentication is not initialized. Check your Firebase configuration.")
      }

      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user

      // Check if user profile exists in Firestore
      if (!db) {
        throw new Error("Firestore is not initialized. Check your Firebase configuration.")
      }

      const userDoc = await getDoc(doc(db, "users", user.uid))

      if (!userDoc.exists()) {
        // Create new user profile if it doesn't exist
        const userProfile: UserProfile = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        }

        await setDoc(doc(db, "users", user.uid), userProfile)
      }
    } catch (err: any) {
      console.error("Error signing in with Google:", err)

      if (err.code === "auth/unauthorized-domain") {
        setError(
          "This domain is not authorized for authentication. Please add this domain to your Firebase Authentication settings in the Firebase console.",
        )
      } else if (err.code === "auth/api-key-not-valid") {
        setError("Firebase configuration error. Please contact support.")
      } else {
        setError(err.message || "Failed to sign in with Google")
      }

      throw err
    } finally {
      setLoading(false)
    }
  }

  // Log out
  const logOut = async () => {
    try {
      setLoading(true)
      setError(null)

      await signOut(auth)
    } catch (err: any) {
      console.error("Error signing out:", err)
      setError(err.message || "Failed to sign out")
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Update user profile
  const updateUserProfile = async (data: Partial<UserProfile>, photoFile?: File | null) => {
    try {
      if (!user) throw new Error("No authenticated user")

      setLoading(true)
      setError(null)

      let photoURL = data.photoURL || userProfile?.photoURL

      // Upload new profile photo if provided
      if (photoFile) {
        const storageRef = ref(storage, `profile-photos/${user.uid}`)
        await uploadBytes(storageRef, photoFile)
        photoURL = await getDownloadURL(storageRef)

        // Update Auth profile
        await updateProfile(user, { photoURL })
      }

      // Update display name in Auth if provided
      if (data.displayName && data.displayName !== user.displayName) {
        await updateProfile(user, { displayName: data.displayName })
      }

      // Update Firestore profile
      const updatedProfile = {
        ...data,
        photoURL,
        updatedAt: new Date(),
      }

      await updateDoc(doc(db, "users", user.uid), updatedProfile)

      // Update local state
      setUserProfile((prev) => (prev ? { ...prev, ...updatedProfile } : null))
    } catch (err: any) {
      console.error("Error updating profile:", err)
      setError(err.message || "Failed to update profile")
      throw err
    } finally {
      setLoading(false)
    }
  }

  const value = {
    user,
    userProfile,
    loading,
    error,
    signUpWithEmail,
    signInWithEmail,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

