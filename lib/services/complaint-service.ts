import { db } from "@/lib/firebase"
import {
  collection,
  addDoc,
  getDocs,
  doc,
  query,
  where,
  updateDoc,
  orderBy,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore"

export interface Complaint {
  id?: string
  category: string
  subject: string
  description: string
  isEmergency: boolean
  contactNumber: string
  location: string
  userId: string
  userName: string
  status: "pending" | "in-progress" | "resolved" | "rejected"
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

export const complaintService = {
  // Create a new complaint
  async createComplaint(complaint: Omit<Complaint, "id" | "createdAt" | "updatedAt" | "status">): Promise<string> {
    try {
      // Create complaint document
      const complaintData = {
        ...complaint,
        status: "pending" as const,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, "complaints"), complaintData)
      return docRef.id
    } catch (error) {
      console.error("Error creating complaint:", error)
      throw error
    }
  },

  // Get user's complaints
  async getUserComplaints(userId: string): Promise<Complaint[]> {
    try {
      const q = query(collection(db, "complaints"), where("userId", "==", userId), orderBy("createdAt", "desc"))

      const querySnapshot = await getDocs(q)
      return querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          }) as Complaint,
      )
    } catch (error) {
      console.error("Error getting user complaints:", error)
      throw error
    }
  },

  // Get all complaints (for admins)
  async getAllComplaints(): Promise<Complaint[]> {
    try {
      const q = query(collection(db, "complaints"), orderBy("createdAt", "desc"))

      const querySnapshot = await getDocs(q)
      return querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          }) as Complaint,
      )
    } catch (error) {
      console.error("Error getting all complaints:", error)
      throw error
    }
  },

  // Update complaint status
  async updateComplaintStatus(id: string, status: "pending" | "in-progress" | "resolved" | "rejected"): Promise<void> {
    try {
      const docRef = doc(db, "complaints", id)
      await updateDoc(docRef, {
        status,
        updatedAt: serverTimestamp(),
      })
    } catch (error) {
      console.error("Error updating complaint status:", error)
      throw error
    }
  },
}

