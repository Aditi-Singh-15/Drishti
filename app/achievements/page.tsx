"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardNav } from "@/components/dashboard-nav"
import { useAuth } from "@/contexts/auth-context"
import { achievementService, type Achievement } from "@/lib/services/achievement-service"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FirestoreIndexAlert } from "@/components/firestore-index-alert"
import { Skeleton } from "@/components/ui/skeleton"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"

export default function AchievementsPage() {
  const { userProfile } = useAuth()
  const [isUploading, setIsUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const [title, setTitle] = useState("")
  const [student, setStudent] = useState("")
  const [description, setDescription] = useState("")

  const [approvedAchievements, setApprovedAchievements] = useState<Achievement[]>([])
  const [pendingAchievements, setPendingAchievements] = useState<Achievement[]>([])
  const [userAchievements, setUserAchievements] = useState<Achievement[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Fetch approved achievements
        const approved = await achievementService.getApprovedAchievements()
        setApprovedAchievements(approved)

        // Fetch pending achievements
        const pending = await achievementService.getPendingAchievements()
        setPendingAchievements(pending)

        // Fetch user achievements if user is logged in
        if (userProfile?.uid) {
          const userAchievements = await achievementService.getUserAchievements(userProfile.uid)
          setUserAchievements(userAchievements)
        }
      } catch (err: any) {
        console.error("Error fetching achievements:", err)
        setError(err.message || "Failed to load achievements")
      } finally {
        setIsLoading(false)
      }
    }

    fetchAchievements()
  }, [userProfile])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)

      // Create preview URL
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!userProfile) {
      setError("You must be logged in to submit an achievement")
      return
    }

    setError(null)
    setIsUploading(true)

    try {
      // Create achievement in Firestore
      await achievementService.createAchievement(
        {
          title,
          description,
          student,
          userId: userProfile.uid,
          userName: userProfile.displayName || "Anonymous",
        },
        selectedFile || undefined,
      )

      // Reset form
      setTitle("")
      setStudent("")
      setDescription("")
      setSelectedFile(null)
      setPreviewUrl(null)

      // Refresh user achievements
      const userAchievements = await achievementService.getUserAchievements(userProfile.uid)
      setUserAchievements(userAchievements)

      // Close dialog
      document.getElementById("close-dialog")?.click()
    } catch (err: any) {
      console.error("Error submitting achievement:", err)
      setError(err.message || "Failed to submit achievement")
    } finally {
      setIsUploading(false)
    }
  }

  const handleLike = async (achievementId: string) => {
    try {
      await achievementService.likeAchievement(achievementId)

      // Update approved achievements with new like count
      setApprovedAchievements((prev) =>
        prev.map((achievement) =>
          achievement.id === achievementId ? { ...achievement, likes: achievement.likes + 1 } : achievement,
        ),
      )
    } catch (err: any) {
      console.error("Error liking achievement:", err)
      setError(err.message || "Failed to like achievement")
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#FEF6F0]">
        <DashboardNav />

        <main className="flex-1 p-6 max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1D3557]">Achievements & Recognition</h1>
              <p className="text-[#1D3557]/70">Every achievement deserves recognition!</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <UserProfileDropdown />
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plus mr-2"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    Upload Achievement
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-[#1D3557]">Upload New Achievement</DialogTitle>
                    <DialogDescription>Share a girl's achievement to celebrate and inspire others.</DialogDescription>
                  </DialogHeader>

                  {error && error.includes("submit") && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="title">Achievement Title</Label>
                      <Input
                        id="title"
                        placeholder="E.g., First Prize in Science Fair"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="student">Student Name</Label>
                      <Input
                        id="student"
                        placeholder="Name of the student"
                        value={student}
                        onChange={(e) => setStudent(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the achievement and its significance..."
                        className="min-h-[100px]"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="image">Upload Image</Label>
                      <div className="mt-2 flex flex-col gap-4">
                        <Input id="image" type="file" accept="image/*" onChange={handleFileChange} required />

                        {previewUrl && (
                          <div className="relative w-full h-[200px] rounded-md overflow-hidden border border-gray-200">
                            <img
                              src={previewUrl || "/placeholder.svg"}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <DialogFooter>
                      <Button
                        type="button"
                        variant="outline"
                        id="close-dialog"
                        onClick={() => {
                          setSelectedFile(null)
                          setPreviewUrl(null)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                        disabled={isUploading}
                      >
                        {isUploading ? "Uploading..." : "Submit for Review"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <FirestoreIndexAlert error={error} onDismiss={() => setError(null)} />

          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="gallery">Achievement Gallery</TabsTrigger>
              <TabsTrigger value="pending">Pending Review</TabsTrigger>
              <TabsTrigger value="my">My Submissions</TabsTrigger>
            </TabsList>

            <TabsContent value="gallery">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <Skeleton className="h-48 w-full" />
                      <CardHeader className="pb-2">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4" />
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-4">
                        <Skeleton className="h-10 w-20" />
                        <Skeleton className="h-10 w-20" />
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : approvedAchievements.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {approvedAchievements.map((achievement) => (
                    <Card key={achievement.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48 w-full">
                        <img
                          src={achievement.image || "/placeholder.svg?height=300&width=400"}
                          alt={achievement.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="bg-[#C85C7F] text-white text-xs px-2 py-1 rounded-full">
                            {achievement.status}
                          </span>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-[#1D3557] text-xl">{achievement.title}</CardTitle>
                        <CardDescription>
                          <span className="font-medium">{achievement.student}</span> •{" "}
                          {achievement.createdAt?.toDate().toLocaleDateString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#1D3557]/80 line-clamp-3">{achievement.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-4">
                        <Button
                          variant="ghost"
                          className="text-[#1D3557] gap-1"
                          onClick={() => achievement.id && handleLike(achievement.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-heart text-[#C85C7F]"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          </svg>
                          {achievement.likes}
                        </Button>
                        <Button variant="ghost" className="text-[#1D3557]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-share-2 mr-1"
                          >
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                          </svg>
                          Share
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C85C7F]/10 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C85C7F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trophy"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D3557] mb-2">No Approved Achievements Yet</h3>
                  <p className="text-[#1D3557]/70 max-w-md mx-auto mb-6">
                    Be the first to share an achievement! Upload and inspire others with stories of success.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-plus mr-2"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        Upload First Achievement
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="text-[#1D3557]">Upload New Achievement</DialogTitle>
                        <DialogDescription>Share a girl's achievement to celebrate and inspire others.</DialogDescription>
                      </DialogHeader>

                      {error && error.includes("submit") && (
                        <Alert variant="destructive" className="mb-4">
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div>
                          <Label htmlFor="title">Achievement Title</Label>
                          <Input
                            id="title"
                            placeholder="E.g., First Prize in Science Fair"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="student">Student Name</Label>
                          <Input
                            id="student"
                            placeholder="Name of the student"
                            value={student}
                            onChange={(e) => setStudent(e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            placeholder="Describe the achievement and its significance..."
                            className="min-h-[100px]"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="image">Upload Image</Label>
                          <div className="mt-2 flex flex-col gap-4">
                            <Input id="image" type="file" accept="image/*" onChange={handleFileChange} required />

                            {previewUrl && (
                              <div className="relative w-full h-[200px] rounded-md overflow-hidden border border-gray-200">
                                <img
                                  src={previewUrl || "/placeholder.svg"}
                                  alt="Preview"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <DialogFooter>
                          <Button
                            type="button"
                            variant="outline"
                            id="close-dialog"
                            onClick={() => {
                              setSelectedFile(null)
                              setPreviewUrl(null)
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                            disabled={isUploading}
                          >
                            {isUploading ? "Uploading..." : "Submit for Review"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </TabsContent>

            {/* Other TabsContent sections remain the same */}
          </Tabs>
        </main>
      </div>
    </SidebarProvider>
  )
}

