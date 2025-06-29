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
  arrayUnion,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export interface Comment {
  id?: string
  author: string
  authorId: string
  content: string
  date: Timestamp
}

export interface Story {
  id?: string
  title: string
  content: string
  image?: string
  author: string
  authorId: string
  authorRole: string
  date?: Timestamp
  likes: number
  comments: Comment[]
}

export const storyService = {
  // Create a new story
  async createStory(story: Omit<Story, "id" | "date" | "likes" | "comments">, imageFile?: File): Promise<string> {
    try {
      let imageUrl = story.image || ""

      // Upload image if provided
      if (imageFile) {
        const storageRef = ref(storage, `stories/${Date.now()}_${imageFile.name}`)
        await uploadBytes(storageRef, imageFile)
        imageUrl = await getDownloadURL(storageRef)
      }

      // Create story document
      const storyData = {
        ...story,
        image: imageUrl,
        likes: 0,
        comments: [],
        date: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, "stories"), storyData)
      return docRef.id
    } catch (error) {
      console.error("Error creating story:", error)
      throw error
    }
  },

  // Get all stories
  async getAllStories(): Promise<Story[]> {
    try {
      // First try with the composite query (requires index)
      try {
        const q = query(collection(db, "stories"), orderBy("date", "desc"))

        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Story,
        )
      } catch (indexError) {
        console.warn("Index error, falling back to simpler query:", indexError)

        // Fallback to a simpler query that doesn't require an index
        const q = query(collection(db, "stories"))

        const querySnapshot = await getDocs(q)

        // Then manually sort them by date
        const stories = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Story,
        )

        // Sort manually
        return stories.sort((a, b) => {
          const dateA = a.date?.toMillis() || 0
          const dateB = b.date?.toMillis() || 0
          return dateB - dateA // descending order
        })
      }
    } catch (error) {
      console.error("Error getting stories:", error)
      throw new Error(
        `Error getting stories: ${error instanceof Error ? error.message : String(error)}. ` +
          "If this is an index error, please create the required index in the Firebase console.",
      )
    }
  },

  // Get popular stories
  async getPopularStories(): Promise<Story[]> {
    try {
      // First try with the composite query (requires index)
      try {
        const q = query(collection(db, "stories"), orderBy("likes", "desc"), orderBy("date", "desc"))

        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Story,
        )
      } catch (indexError) {
        console.warn("Index error, falling back to simpler query:", indexError)

        // Fallback to a simpler query that doesn't require an index
        const q = query(collection(db, "stories"))

        const querySnapshot = await getDocs(q)

        // Then manually sort them by likes and date
        const stories = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Story,
        )

        // Sort manually by likes first, then by date
        return stories.sort((a, b) => {
          if (a.likes !== b.likes) {
            return b.likes - a.likes // descending order by likes
          }
          const dateA = a.date?.toMillis() || 0
          const dateB = b.date?.toMillis() || 0
          return dateB - dateA // descending order by date
        })
      }
    } catch (error) {
      console.error("Error getting popular stories:", error)
      throw new Error(
        `Error getting popular stories: ${error instanceof Error ? error.message : String(error)}. ` +
          "If this is an index error, please create the required index in the Firebase console.",
      )
    }
  },

  // Get user's stories
  async getUserStories(userId: string): Promise<Story[]> {
    try {
      // First try with the composite query (requires index)
      try {
        const q = query(collection(db, "stories"), where("authorId", "==", userId), orderBy("date", "desc"))

        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Story,
        )
      } catch (indexError) {
        console.warn("Index error, falling back to simpler query:", indexError)

        // Fallback to a simpler query that doesn't require an index
        const q = query(collection(db, "stories"), where("authorId", "==", userId))

        const querySnapshot = await getDocs(q)

        // Then manually sort them by date
        const stories = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Story,
        )

        // Sort manually
        return stories.sort((a, b) => {
          const dateA = a.date?.toMillis() || 0
          const dateB = b.date?.toMillis() || 0
          return dateB - dateA // descending order
        })
      }
    } catch (error) {
      console.error("Error getting user stories:", error)
      throw new Error(
        `Error getting user stories: ${error instanceof Error ? error.message : String(error)}. ` +
          "If this is an index error, please create the required index in the Firebase console.",
      )
    }
  },

  // Get story by ID
  async getStoryById(id: string): Promise<Story | null> {
    try {
      const docRef = doc(db, "stories", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as Story
      }

      return null
    } catch (error) {
      console.error("Error getting story:", error)
      throw error
    }
  },

  // Like a story
  async likeStory(id: string): Promise<void> {
    try {
      const docRef = doc(db, "stories", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data()
        await updateDoc(docRef, {
          likes: (data.likes || 0) + 1,
        })
      }
    } catch (error) {
      console.error("Error liking story:", error)
      throw error
    }
  },

  // Add comment to a story
  async addComment(storyId: string, comment: Omit<Comment, "id" | "date">): Promise<void> {
    try {
      const docRef = doc(db, "stories", storyId)

      const newComment = {
        ...comment,
        date: serverTimestamp(),
      }

      await updateDoc(docRef, {
        comments: arrayUnion(newComment),
      })
    } catch (error) {
      console.error("Error adding comment:", error)
      throw error
    }
  },
}

