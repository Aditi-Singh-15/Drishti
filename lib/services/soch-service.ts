import { db, storage } from "@/lib/firebase"
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export interface SochRequest {
  id?: string
  prompt: string
  image: string
  userId: string
  userName: string
  date?: Timestamp
}

export const sochService = {
  // Create a new SOCH request
  async createSochRequest(sochRequest: Omit<SochRequest, "id" | "date">, imageFile?: File): Promise<string> {
    try {
      let imageUrl = sochRequest.image || ""

      // Upload image if provided
      if (imageFile) {
        const storageRef = ref(storage, `soch_requests/${Date.now()}_${imageFile.name}`)
        await uploadBytes(storageRef, imageFile)
        imageUrl = await getDownloadURL(storageRef)
      }

      // Create SOCH request document
      const sochData = {
        ...sochRequest,
        image: imageUrl,
        date: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, "soch_requests"), sochData)
      return docRef.id
    } catch (error) {
      console.error("Error creating SOCH request:", error)
      throw error
    }
  },

  // Get user's SOCH requests
  async getUserSochRequests(userId: string): Promise<SochRequest[]> {
    try {
      // First try with the composite query (requires index)
      try {
        const q = query(collection(db, "soch_requests"), where("userId", "==", userId), orderBy("date", "desc"))

        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as SochRequest,
        )
      } catch (indexError) {
        console.warn("Index error, falling back to simpler query:", indexError)

        // Fallback to a simpler query that doesn't require an index
        const q = query(collection(db, "soch_requests"), where("userId", "==", userId))

        const querySnapshot = await getDocs(q)

        // Then manually sort them by date
        const requests = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as SochRequest,
        )

        // Sort manually
        return requests.sort((a, b) => {
          const dateA = a.date?.toMillis() || 0
          const dateB = b.date?.toMillis() || 0
          return dateB - dateA // descending order
        })
      }
    } catch (error) {
      console.error("Error getting user SOCH requests:", error)
      throw new Error(
        `Error getting user SOCH requests: ${error instanceof Error ? error.message : String(error)}. ` +
          "If this is an index error, please create the required index in the Firebase console.",
      )
    }
  },

  // Get SOCH request by ID
  async getSochRequestById(id: string): Promise<SochRequest | null> {
    try {
      const docRef = doc(db, "soch_requests", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as SochRequest
      }

      return null
    } catch (error) {
      console.error("Error getting SOCH request:", error)
      throw error
    }
  },
}

