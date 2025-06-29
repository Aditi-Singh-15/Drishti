import { db, storage } from "@/lib/firebase"
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
  orderBy,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export interface Achievement {
  id?: string
  title: string
  description: string
  student: string
  image?: string
  userId: string
  userName: string
  status: "pending" | "approved" | "rejected"
  likes: number
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

export const achievementService = {
  // Create a new achievement
  async createAchievement(
    achievement: Omit<Achievement, "id" | "createdAt" | "updatedAt" | "likes" | "status">,
    imageFile?: File,
  ): Promise<string> {
    try {
      let imageUrl = achievement.image || ""

      // Upload image if provided
      if (imageFile) {
        const storageRef = ref(storage, `achievements/${Date.now()}_${imageFile.name}`)
        await uploadBytes(storageRef, imageFile)
        imageUrl = await getDownloadURL(storageRef)
      }

      // Create achievement document
      const achievementData = {
        ...achievement,
        image: imageUrl,
        status: "pending" as const,
        likes: 0,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, "achievements"), achievementData)
      return docRef.id
    } catch (error) {
      console.error("Error creating achievement:", error)
      throw error
    }
  },

  // Get all approved achievements
  async getApprovedAchievements(): Promise<Achievement[]> {
    try {
      // First try with the composite query (requires index)
      try {
        const q = query(collection(db, "achievements"), where("status", "==", "approved"), orderBy("createdAt", "desc"))

        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Achievement,
        )
      } catch (indexError) {
        console.warn("Index error, falling back to simpler query:", indexError)

        // Fallback to a simpler query that doesn't require an index
        // First get all approved achievements
        const q = query(collection(db, "achievements"), where("status", "==", "approved"))

        const querySnapshot = await getDocs(q)

        // Then manually sort them by createdAt
        const achievements = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Achievement,
        )

        // Sort manually (note: this is less efficient for large datasets)
        return achievements.sort((a, b) => {
          const dateA = a.createdAt?.toMillis() || 0
          const dateB = b.createdAt?.toMillis() || 0
          return dateB - dateA // descending order
        })
      }
    } catch (error) {
      console.error("Error getting approved achievements:", error)
      throw new Error(
        `Error getting approved achievements: ${error instanceof Error ? error.message : String(error)}. ` +
          "If this is an index error, please create the required index in the Firebase console.",
      )
    }
  },

  // Get pending achievements
  async getPendingAchievements(): Promise<Achievement[]> {
    try {
      // First try with the composite query (requires index)
      try {
        const q = query(collection(db, "achievements"), where("status", "==", "pending"), orderBy("createdAt", "desc"))

        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Achievement,
        )
      } catch (indexError) {
        console.warn("Index error, falling back to simpler query:", indexError)

        // Fallback to a simpler query that doesn't require an index
        const q = query(collection(db, "achievements"), where("status", "==", "pending"))

        const querySnapshot = await getDocs(q)

        // Then manually sort them by createdAt
        const achievements = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Achievement,
        )

        // Sort manually
        return achievements.sort((a, b) => {
          const dateA = a.createdAt?.toMillis() || 0
          const dateB = b.createdAt?.toMillis() || 0
          return dateB - dateA // descending order
        })
      }
    } catch (error) {
      console.error("Error getting pending achievements:", error)
      throw new Error(
        `Error getting pending achievements: ${error instanceof Error ? error.message : String(error)}. ` +
          "If this is an index error, please create the required index in the Firebase console.",
      )
    }
  },

  // Get user's achievements
  async getUserAchievements(userId: string): Promise<Achievement[]> {
    try {
      // First try with the composite query (requires index)
      try {
        const q = query(collection(db, "achievements"), where("userId", "==", userId), orderBy("createdAt", "desc"))

        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Achievement,
        )
      } catch (indexError) {
        console.warn("Index error, falling back to simpler query:", indexError)

        // Fallback to a simpler query that doesn't require an index
        const q = query(collection(db, "achievements"), where("userId", "==", userId))

        const querySnapshot = await getDocs(q)

        // Then manually sort them by createdAt
        const achievements = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Achievement,
        )

        // Sort manually
        return achievements.sort((a, b) => {
          const dateA = a.createdAt?.toMillis() || 0
          const dateB = b.createdAt?.toMillis() || 0
          return dateB - dateA // descending order
        })
      }
    } catch (error) {
      console.error("Error getting user achievements:", error)
      throw new Error(
        `Error getting user achievements: ${error instanceof Error ? error.message : String(error)}. ` +
          "If this is an index error, please create the required index in the Firebase console.",
      )
    }
  },

  // Get achievement by ID
  async getAchievementById(id: string): Promise<Achievement | null> {
    try {
      const docRef = doc(db, "achievements", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as Achievement
      }

      return null
    } catch (error) {
      console.error("Error getting achievement:", error)
      throw error
    }
  },

  // Update achievement status
  async updateAchievementStatus(id: string, status: "approved" | "rejected"): Promise<void> {
    try {
      const docRef = doc(db, "achievements", id)
      await updateDoc(docRef, {
        status,
        updatedAt: serverTimestamp(),
      })
    } catch (error) {
      console.error("Error updating achievement status:", error)
      throw error
    }
  },

  // Like an achievement
  async likeAchievement(id: string): Promise<void> {
    try {
      const docRef = doc(db, "achievements", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data()
        await updateDoc(docRef, {
          likes: (data.likes || 0) + 1,
          updatedAt: serverTimestamp(),
        })
      }
    } catch (error) {
      console.error("Error liking achievement:", error)
      throw error
    }
  },
}

