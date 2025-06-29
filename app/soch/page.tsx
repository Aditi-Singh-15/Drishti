// // "use client"

// // import type React from "react"

// // import { useState } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Label } from "@/components/ui/label"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import { Textarea } from "@/components/ui/textarea"
// // import { SidebarProvider } from "@/components/ui/sidebar"
// // import { DashboardNav } from "@/components/dashboard-nav"

// // export default function SochPage() {
// //   const [prompt, setPrompt] = useState("")
// //   const [isGenerating, setIsGenerating] = useState(false)
// //   const [generatedImage, setGeneratedImage] = useState<string | null>(null)
// //   const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null)

// //   // Sample generated visions
// //   const savedVisions = [
// //     {
// //       id: "1",
// //       prompt: "If my daughter becomes a doctor in our village",
// //       image: "/placeholder.svg?height=400&width=400",
// //       date: "March 20, 2025",
// //     },
// //     {
// //       id: "2",
// //       prompt: "If my daughter starts her own business",
// //       image: "/placeholder.svg?height=400&width=400",
// //       date: "March 18, 2025",
// //     },
// //     {
// //       id: "3",
// //       prompt: "If girls in our village all complete higher education",
// //       image: "/placeholder.svg?height=400&width=400",
// //       date: "March 15, 2025",
// //     },
// //     {
// //       id: "4",
// //       prompt: "If my daughter becomes a teacher and educates other girls",
// //       image: "/placeholder.svg?height=400&width=400",
// //       date: "March 10, 2025",
// //     },
// //     {
// //       id: "5",
// //       prompt: "If my daughter becomes an engineer and builds infrastructure for our village",
// //       image: "/placeholder.svg?height=400&width=400",
// //       date: "March 5, 2025",
// //     },
// //   ]

// //   const handleGenerateVision = () => {
// //     if (!prompt.trim()) return

// //     setIsGenerating(true)
// //     setGeneratedImage(null)
// //     setGeneratedPrompt(null)

// //     // In a real app, this would call the Google Gemini API
// //     // For now, we'll simulate the API call with a timeout
// //     setTimeout(() => {
// //       setIsGenerating(false)
// //       setGeneratedImage("/placeholder.svg?height=512&width=512")
// //       setGeneratedPrompt(prompt)
// //     }, 3000)
// //   }

// //   const handleSaveVision = () => {
// //     // In a real app, this would save the vision to Firebase
// //     alert("Vision saved successfully!")
// //     setGeneratedImage(null)
// //     setGeneratedPrompt(null)
// //     setPrompt("")
// //   }

// //   const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
// //     setPrompt(e.target.value)
// //   }

// //   const promptSuggestions = [
// //     "If my daughter becomes a scientist...",
// //     "If girls in our village learn coding...",
// //     "If my daughter starts her own business...",
// //     "If all girls in our village complete college education...",
// //     "If my daughter becomes a leader in our community...",
// //   ]

// //   const handleSuggestionClick = (suggestion: string) => {
// //     setPrompt(suggestion)
// //   }

// //   return (
// //     <SidebarProvider>
// //       <div className="flex min-h-screen bg-[#FEF6F0]">
// //         <DashboardNav />

// //         <main className="flex-1 p-6">
// //           <div className="mb-8">
// //             <h1 className="text-3xl font-bold text-[#1D3557]">SOCH – AI-Powered Vision</h1>
// //             <p className="text-[#1D3557]/70">What if? Let's visualize the future!</p>
// //           </div>

// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //             <div>
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="text-[#1D3557]">Generate Your Vision</CardTitle>
// //                   <CardDescription>Enter a prompt to visualize a future scenario using AI</CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="space-y-4">
// //                     <div>
// //                       <Label htmlFor="prompt">Your Prompt</Label>
// //                       <Textarea
// //                         id="prompt"
// //                         placeholder="E.g., If my daughter continues studying..."
// //                         value={prompt}
// //                         onChange={handlePromptChange}
// //                         className="min-h-[120px]"
// //                       />
// //                     </div>

// //                     <div>
// //                       <Label>Prompt Suggestions</Label>
// //                       <div className="flex flex-wrap gap-2 mt-2">
// //                         {promptSuggestions.map((suggestion, index) => (
// //                           <Button
// //                             key={index}
// //                             variant="outline"
// //                             size="sm"
// //                             onClick={() => handleSuggestionClick(suggestion)}
// //                             className="text-[#1D3557] border-[#1D3557]/30 hover:bg-[#C85C7F]/10"
// //                           >
// //                             {suggestion}
// //                           </Button>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //                 <CardFooter>
// //                   <Button
// //                     className="w-full bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
// //                     onClick={handleGenerateVision}
// //                     disabled={isGenerating || !prompt.trim()}
// //                   >
// //                     {isGenerating ? (
// //                       <>
// //                         <svg
// //                           className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           fill="none"
// //                           viewBox="0 0 24 24"
// //                         >
// //                           <circle
// //                             className="opacity-25"
// //                             cx="12"
// //                             cy="12"
// //                             r="10"
// //                             stroke="currentColor"
// //                             strokeWidth="4"
// //                           ></circle>
// //                           <path
// //                             className="opacity-75"
// //                             fill="currentColor"
// //                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                           ></path>
// //                         </svg>
// //                         Generating Vision...
// //                       </>
// //                     ) : (
// //                       <>
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           width="20"
// //                           height="20"
// //                           viewBox="0 0 24 24"
// //                           fill="none"
// //                           stroke="currentColor"
// //                           strokeWidth="2"
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           className="lucide lucide-sparkles mr-2"
// //                         >
// //                           <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
// //                           <path d="M5 3v4" />
// //                           <path d="M19 17v4" />
// //                           <path d="M3 5h4" />
// //                           <path d="M17 19h4" />
// //                         </svg>
// //                         Generate Vision
// //                       </>
// //                     )}
// //                   </Button>
// //                 </CardFooter>
// //               </Card>

// //               {generatedImage && (
// //                 <Card className="mt-6 overflow-hidden">
// //                   <div className="relative">
// //                     <img src={generatedImage || "/placeholder.svg"} alt="Generated Vision" className="w-full h-auto" />
// //                   </div>
// //                   <CardHeader className="pb-2">
// //                     <CardTitle className="text-[#1D3557] text-lg">Your Vision</CardTitle>
// //                     <CardDescription>{generatedPrompt}</CardDescription>
// //                   </CardHeader>
// //                   <CardFooter className="flex justify-between">
// //                     <Button
// //                       variant="outline"
// //                       className="text-[#1D3557]"
// //                       onClick={() => {
// //                         setGeneratedImage(null)
// //                         setGeneratedPrompt(null)
// //                       }}
// //                     >
// //                       Discard
// //                     </Button>
// //                     <Button className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white" onClick={handleSaveVision}>
// //                       <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         width="20"
// //                         height="20"
// //                         viewBox="0 0 24 24"
// //                         fill="none"
// //                         stroke="currentColor"
// //                         strokeWidth="2"
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         className="lucide lucide-save mr-2"
// //                       >
// //                         <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
// //                         <polyline points="17 21 17 13 7 13 7 21" />
// //                         <polyline points="7 3 7 8 15 8" />
// //                       </svg>
// //                       Save Vision
// //                     </Button>
// //                   </CardFooter>
// //                 </Card>
// //               )}
// //             </div>

// //             <div>
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="text-[#1D3557]">Your Saved Visions</CardTitle>
// //                   <CardDescription>Previously generated visions of the future</CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <Tabs defaultValue="grid" className="w-full">
// //                     <TabsList className="mb-4">
// //                       <TabsTrigger value="grid">Grid View</TabsTrigger>
// //                       <TabsTrigger value="list">List View</TabsTrigger>
// //                     </TabsList>

// //                     <TabsContent value="grid">
// //                       <div className="grid grid-cols-2 gap-4">
// //                         {savedVisions.map((vision) => (
// //                           <div
// //                             key={vision.id}
// //                             className="group relative rounded-md overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
// //                           >
// //                             <img
// //                               src={vision.image || "/placeholder.svg"}
// //                               alt={vision.prompt}
// //                               className="w-full h-32 object-cover"
// //                             />
// //                             <div className="p-2">
// //                               <p className="text-xs text-[#1D3557]/70 line-clamp-2">{vision.prompt}</p>
// //                               <p className="text-xs text-[#1D3557]/50 mt-1">{vision.date}</p>
// //                             </div>
// //                             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
// //                               <Button
// //                                 size="sm"
// //                                 variant="outline"
// //                                 className="text-white border-white hover:bg-white/20 hover:text-white"
// //                               >
// //                                 View
// //                               </Button>
// //                               <Button
// //                                 size="sm"
// //                                 variant="outline"
// //                                 className="text-white border-white hover:bg-white/20 hover:text-white"
// //                               >
// //                                 Share
// //                               </Button>
// //                             </div>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </TabsContent>

// //                     <TabsContent value="list">
// //                       <div className="space-y-3">
// //                         {savedVisions.map((vision) => (
// //                           <div
// //                             key={vision.id}
// //                             className="flex items-center gap-3 p-2 rounded-md border border-gray-200 hover:shadow-md transition-shadow"
// //                           >
// //                             <img
// //                               src={vision.image || "/placeholder.svg"}
// //                               alt={vision.prompt}
// //                               className="w-16 h-16 object-cover rounded-md"
// //                             />
// //                             <div className="flex-grow">
// //                               <p className="text-sm text-[#1D3557] line-clamp-2">{vision.prompt}</p>
// //                               <p className="text-xs text-[#1D3557]/50">{vision.date}</p>
// //                             </div>
// //                             <div className="flex gap-2">
// //                               <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
// //                                 <svg
// //                                   xmlns="http://www.w3.org/2000/svg"
// //                                   width="16"
// //                                   height="16"
// //                                   viewBox="0 0 24 24"
// //                                   fill="none"
// //                                   stroke="currentColor"
// //                                   strokeWidth="2"
// //                                   strokeLinecap="round"
// //                                   strokeLinejoin="round"
// //                                   className="lucide lucide-eye"
// //                                 >
// //                                   <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
// //                                   <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
// //                                 </svg>
// //                               </Button>
// //                               <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
// //                                 <svg
// //                                   xmlns="http://www.w3.org/2000/svg"
// //                                   width="16"
// //                                   height="16"
// //                                   viewBox="0 0 24 24"
// //                                   fill="none"
// //                                   stroke="currentColor"
// //                                   strokeWidth="2"
// //                                   strokeLinecap="round"
// //                                   strokeLinejoin="round"
// //                                   className="lucide lucide-share-2"
// //                                 >
// //                                   <circle cx="18" cy="5" r="3" />
// //                                   <circle cx="6" cy="12" r="3" />
// //                                   <circle cx="18" cy="19" r="3" />
// //                                   <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
// //                                   <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
// //                                 </svg>
// //                               </Button>
// //                               <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
// //                                 <svg
// //                                   xmlns="http://www.w3.org/2000/svg"
// //                                   width="16"
// //                                   height="16"
// //                                   viewBox="0 0 24 24"
// //                                   fill="none"
// //                                   stroke="currentColor"
// //                                   strokeWidth="2"
// //                                   strokeLinecap="round"
// //                                   strokeLinejoin="round"
// //                                   className="lucide lucide-trash-2"
// //                                 >
// //                                   <path d="M3 6h18" />
// //                                   <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
// //                                   <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
// //                                   <line x1="10" x2="10" y1="11" y2="17" />
// //                                   <line x1="14" x2="14" y1="11" y2="17" />
// //                                 </svg>
// //                               </Button>
// //                             </div>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </TabsContent>
// //                   </Tabs>
// //                 </CardContent>
// //               </Card>

// //               <Card className="mt-6">
// //                 <CardHeader>
// //                   <CardTitle className="text-[#1D3557]">How SOCH Works</CardTitle>
// //                   <CardDescription>Understanding the AI-powered vision generation</CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="space-y-4">
// //                     <div className="flex items-start gap-3">
// //                       <div className="bg-[#C85C7F]/10 p-2 rounded-full">
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           width="20"
// //                           height="20"
// //                           viewBox="0 0 24 24"
// //                           fill="none"
// //                           stroke="#C85C7F"
// //                           strokeWidth="2"
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           className="lucide lucide-lightbulb"
// //                         >
// //                           <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
// //                           <path d="M9 18h6" />
// //                           <path d="M10 22h4" />
// //                         </svg>
// //                       </div>
// //                       <div>
// //                         <h3 className="font-medium text-[#1D3557]">Prompt-Based Generation</h3>
// //                         <p className="text-sm text-[#1D3557]/70">
// //                           Enter a prompt about a future scenario you want to visualize, and our AI will generate an
// //                           image based on your description.
// //                         </p>
// //                       </div>
// //                     </div>

// //                     <div className="flex items-start gap-3">
// //                       <div className="bg-[#C85C7F]/10 p-2 rounded-full">
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           width="20"
// //                           height="20"
// //                           viewBox="0 0 24 24"
// //                           fill="none"
// //                           stroke="#C85C7F"
// //                           strokeWidth="2"
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           className="lucide lucide-sparkles"
// //                         >
// //                           <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
// //                           <path d="M5 3v4" />
// //                           <path d="M19 17v4" />
// //                           <path d="M3 5h4" />
// //                           <path d="M17 19h4" />
// //                         </svg>
// //                       </div>
// //                       <div>
// //                         <h3 className="font-medium text-[#1D3557]">Powered by Google Gemini</h3>
// //                         <p className="text-sm text-[#1D3557]/70">
// //                           We use Google's advanced Gemini AI to create realistic visualizations of your described
// //                           scenarios.
// //                         </p>
// //                       </div>
// //                     </div>

// //                     <div className="flex items-start gap-3">
// //                       <div className="bg-[#C85C7F]/10 p-2 rounded-full">
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           width="20"
// //                           height="20"
// //                           viewBox="0 0 24 24"
// //                           fill="none"
// //                           stroke="#C85C7F"
// //                           strokeWidth="2"
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           className="lucide lucide-save"
// //                         >
// //                           <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
// //                           <polyline points="17 21 17 13 7 13 7 21" />
// //                           <polyline points="7 3 7 8 15 8" />
// //                         </svg>
// //                       </div>
// //                       <div>
// //                         <h3 className="font-medium text-[#1D3557]">Save & Share</h3>
// //                         <p className="text-sm text-[#1D3557]/70">
// //                           Save your generated visions to revisit later or share them with others to inspire and
// //                           motivate.
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </SidebarProvider>
// //   )
// // }

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardNav } from "@/components/dashboard-nav"
import { useAuth } from "@/contexts/auth-context"
import { sochService, type SochRequest } from "@/lib/services/soch-service"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"
import { Input } from "@/components/ui/input"

export default function SochPage() {
  const { userProfile, loading } = useAuth()
  const router = useRouter()
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [apiKey, setApiKey] = useState("")
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)
  const [savedVisions, setSavedVisions] = useState<SochRequest[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !userProfile) {
      router.push("/login")
    }
  }, [loading, userProfile, router])

  // Fetch saved visions
  useEffect(() => {
    const fetchSavedVisions = async () => {
      if (!userProfile?.uid) return

      setIsLoading(true)
      try {
        const visions = await sochService.getUserSochRequests(userProfile.uid)
        setSavedVisions(visions)
      } catch (err: any) {
        console.error("Error fetching saved visions:", err)
        setError(err.message || "Failed to load saved visions")
      } finally {
        setIsLoading(false)
      }
    }

    if (userProfile?.uid) {
      fetchSavedVisions()
    }
  }, [userProfile])

  // Check for Gemini API key in localStorage
  useEffect(() => {
    const storedApiKey = localStorage.getItem("geminiApiKey")
    if (storedApiKey) {
      setApiKey(storedApiKey)
    } else {
      setShowApiKeyInput(true)
    }
  }, [])

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      setError("Please enter a valid API key")
      return
    }

    localStorage.setItem("geminiApiKey", apiKey)
    setShowApiKeyInput(false)
    setError(null)
  }

  const handleGenerateVision = async () => {
    if (!prompt.trim()) return

    if (!apiKey) {
      setShowApiKeyInput(true)
      setError("Gemini API key is required")
      return
    }

    setIsGenerating(true)
    setGeneratedImage(null)
    setGeneratedPrompt(null)
    setError(null)

    try {
      // Call our API route to generate image
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          apiKey,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate image")
      }

      setGeneratedImage(data.imageUrl)
      setGeneratedPrompt(prompt)

      if (data.message) {
        console.warn(data.message)
      }
    } catch (err: any) {
      console.error("Error generating vision:", err)
      setError(err.message || "Failed to generate vision")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSaveVision = async () => {
    if (!generatedImage || !generatedPrompt || !userProfile) {
      setError("Cannot save vision. Please generate a vision first.")
      return
    }

    try {
      // Save vision to Firebase
      await sochService.createSochRequest({
        prompt: generatedPrompt,
        image: generatedImage,
        userId: userProfile.uid,
        userName: userProfile.displayName || "Anonymous",
      })

      // Refresh saved visions
      const updatedVisions = await sochService.getUserSochRequests(userProfile.uid)
      setSavedVisions(updatedVisions)

      // Reset state
      setGeneratedImage(null)
      setGeneratedPrompt(null)
      setPrompt("")

      // Show success message
      alert("Vision saved successfully!")
    } catch (err: any) {
      console.error("Error saving vision:", err)
      setError(err.message || "Failed to save vision")
    }
  }

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion)
  }

  const promptSuggestions = [
    "If my daughter becomes a scientist...",
    "If girls in our village learn coding...",
    "If my daughter starts her own business...",
    "If all girls in our village complete college education...",
    "If my daughter becomes a leader in our community...",
  ]

  // Show loading state while fetching user data
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FEF6F0] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C85C7F]"></div>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#FEF6F0]">
        <DashboardNav />

        <main className="flex-1 p-6 max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1D3557]">SOCH – AI-Powered Vision</h1>
              <p className="text-[#1D3557]/70">What if? Let's visualize the future!</p>
            </div>

            <div className="hidden md:block">
              <UserProfileDropdown />
            </div>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {showApiKeyInput && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-[#1D3557]">Google Gemini API Key Required</CardTitle>
                <CardDescription>
                  To generate AI visions, please provide your Google Gemini API key. You can get one for free at{" "}
                  <a
                    href="https://ai.google.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C85C7F] underline"
                  >
                    Google AI Studio
                  </a>
                  . We use the Gemini 1.5 Flash model for image generation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    placeholder="Enter your Gemini API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="flex-grow"
                  />
                  <Button className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white" onClick={handleSaveApiKey}>
                    Save Key
                  </Button>
                </div>
                <p className="text-xs text-[#1D3557]/70 mt-2">
                  Your API key will be stored locally in your browser and is not sent to our servers.
                </p>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1D3557]">Generate Your Vision</CardTitle>
                  <CardDescription>Enter a prompt to visualize a future scenario using AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="prompt">Your Prompt</Label>
                      <Textarea
                        id="prompt"
                        placeholder="E.g., If my daughter continues studying..."
                        value={prompt}
                        onChange={handlePromptChange}
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label>Prompt Suggestions</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {promptSuggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="text-[#1D3557] border-[#1D3557]/30 hover:bg-[#C85C7F]/10"
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                    onClick={handleGenerateVision}
                    disabled={isGenerating || !prompt.trim() || showApiKeyInput}
                  >
                    {isGenerating ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Generating Vision...
                      </>
                    ) : (
                      <>
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
                          className="lucide lucide-sparkles mr-2"
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                          <path d="M5 3v4" />
                          <path d="M19 17v4" />
                          <path d="M3 5h4" />
                          <path d="M17 19h4" />
                        </svg>
                        Generate Vision
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>

              {isGenerating && !generatedImage && (
                <Card className="mt-6 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center h-64 bg-gray-100">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C85C7F] mx-auto mb-4"></div>
                        <p className="text-[#1D3557]">Generating your vision...</p>
                        <p className="text-[#1D3557]/70 text-sm">This may take up to a minute</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {generatedImage && (
                <Card className="mt-6 overflow-hidden">
                  <div className="relative">
                    <img src={generatedImage || "/placeholder.svg"} alt="Generated Vision" className="w-full h-auto" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-[#1D3557] text-lg">Your Vision</CardTitle>
                    <CardDescription>{generatedPrompt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      className="text-[#1D3557]"
                      onClick={() => {
                        setGeneratedImage(null)
                        setGeneratedPrompt(null)
                      }}
                    >
                      Discard
                    </Button>
                    <Button className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white" onClick={handleSaveVision}>
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
                        className="lucide lucide-save mr-2"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                        <polyline points="17 21 17 13 7 13 7 21" />
                        <polyline points="7 3 7 8 15 8" />
                      </svg>
                      Save Vision
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1D3557]">Your Saved Visions</CardTitle>
                  <CardDescription>Previously generated visions of the future</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="grid" className="w-full">
                    <TabsList className="mb-4">
                      <TabsTrigger value="grid">Grid View</TabsTrigger>
                      <TabsTrigger value="list">List View</TabsTrigger>
                    </TabsList>

                    <TabsContent value="grid">
                      {isLoading ? (
                        <div className="grid grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} className="h-32 w-full rounded-md" />
                          ))}
                        </div>
                      ) : savedVisions.length > 0 ? (
                        <div className="grid grid-cols-2 gap-4">
                          {savedVisions.map((vision) => (
                            <div
                              key={vision.id}
                              className="group relative rounded-md overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                            >
                              <img
                                src={vision.image || "/placeholder.svg?height=200&width=200"}
                                alt={vision.prompt}
                                className="w-full h-32 object-cover"
                              />
                              <div className="p-2">
                                <p className="text-xs text-[#1D3557]/70 line-clamp-2">{vision.prompt}</p>
                                <p className="text-xs text-[#1D3557]/50 mt-1">
                                  {vision.date?.toDate().toLocaleDateString() || "Recently"}
                                </p>
                              </div>
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-white border-white hover:bg-white/20 hover:text-white"
                                >
                                  View
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-white border-white hover:bg-white/20 hover:text-white"
                                >
                                  Share
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-[#1D3557]/70">
                            No saved visions yet. Generate and save your first vision!
                          </p>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="list">
                      {isLoading ? (
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-3">
                              <Skeleton className="h-16 w-16 rounded-md" />
                              <div className="flex-grow">
                                <Skeleton className="h-4 w-3/4 mb-2" />
                                <Skeleton className="h-3 w-1/2" />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : savedVisions.length > 0 ? (
                        <div className="space-y-3">
                          {savedVisions.map((vision) => (
                            <div
                              key={vision.id}
                              className="flex items-center gap-3 p-2 rounded-md border border-gray-200 hover:shadow-md transition-shadow"
                            >
                              <img
                                src={vision.image || "/placeholder.svg?height=200&width=200"}
                                alt={vision.prompt}
                                className="w-16 h-16 object-cover rounded-md"
                              />
                              <div className="flex-grow">
                                <p className="text-sm text-[#1D3557] line-clamp-2">{vision.prompt}</p>
                                <p className="text-xs text-[#1D3557]/50">
                                  {vision.date?.toDate().toLocaleDateString() || "Recently"}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-eye"
                                  >
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                                  </svg>
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-share-2"
                                  >
                                    <circle cx="18" cy="5" r="3" />
                                    <circle cx="6" cy="12" r="3" />
                                    <circle cx="18" cy="19" r="3" />
                                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-[#1D3557]/70">
                            No saved visions yet. Generate and save your first vision!
                          </p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-[#1D3557]">How SOCH Works</CardTitle>
                  <CardDescription>Understanding the AI-powered vision generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#C85C7F]/10 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C85C7F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-lightbulb"
                        >
                          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                          <path d="M9 18h6" />
                          <path d="M10 22h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1D3557]">Prompt-Based Generation</h3>
                        <p className="text-sm text-[#1D3557]/70">
                          Enter a prompt about a future scenario you want to visualize, and our AI will generate an
                          image based on your description.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#C85C7F]/10 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C85C7F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-sparkles"
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                          <path d="M5 3v4" />
                          <path d="M19 17v4" />
                          <path d="M3 5h4" />
                          <path d="M17 19h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1D3557]">Powered by Google Gemini 1.5</h3>
                        <p className="text-sm text-[#1D3557]/70">
                          We use Google's advanced Gemini 1.5 Flash AI model to create realistic visualizations of your
                          described scenarios.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#C85C7F]/10 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C85C7F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-save"
                        >
                          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                          <polyline points="17 21 17 13 7 13 7 21" />
                          <polyline points="7 3 7 8 15 8" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1D3557]">Save & Share</h3>
                        <p className="text-sm text-[#1D3557]/70">
                          Save your generated visions to revisit later or share them with others to inspire and
                          motivate.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

// "use client";

// import type React from "react";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Textarea } from "@/components/ui/textarea";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import { DashboardNav } from "@/components/dashboard-nav";
// import { useAuth } from "@/contexts/auth-context";
// import { sochService, type SochRequest } from "@/lib/services/soch-service";
// import { UserProfileDropdown } from "@/components/user-profile-dropdown";

// export default function SochPage() {
//   const { userProfile, loading } = useAuth();
//   const router = useRouter();
//   const [prompt, setPrompt] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [generatedImage, setGeneratedImage] = useState<string | null>(null);
//   const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [savedVisions, setSavedVisions] = useState<SochRequest[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!loading && !userProfile) {
//       router.push("/login");
//     }
//   }, [loading, userProfile, router]);

//   useEffect(() => {
//     const fetchSavedVisions = async () => {
//       if (!userProfile?.uid) return;
//       setIsLoading(true);
//       try {
//         const visions = await sochService.getUserSochRequests(userProfile.uid);
//         setSavedVisions(visions);
//       } catch (err: any) {
//         console.error("Error fetching saved visions:", err);
//         setError(err.message || "Failed to load saved visions");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (userProfile?.uid) {
//       fetchSavedVisions();
//     }
//   }, [userProfile]);

//   const handleGenerateVision = async () => {
//     if (!prompt.trim()) return;

//     setIsGenerating(true);
//     setGeneratedImage(null);
//     setGeneratedPrompt(null);
//     setError(null);

//     try {
//       const response = await fetch("/api/generate-image", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ prompt }), // 🔥 Only prompt is sent
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Failed to generate image");
//       }

//       setGeneratedImage(data.imageUrl);
//       setGeneratedPrompt(prompt);
//     } catch (err: any) {
//       console.error("Error generating vision:", err);
//       setError(err.message || "Failed to generate vision");
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setPrompt(e.target.value);
//   };

//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen bg-[#FEF6F0]">
//         <DashboardNav />
//         <main className="flex-1 p-6 max-w-screen-2xl mx-auto">
//           <div className="flex justify-between items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-[#1D3557]">SOCH – AI-Powered Vision</h1>
//               <p className="text-[#1D3557]/70">What if? Let's visualize the future!</p>
//             </div>
//             <div className="hidden md:block">
//               <UserProfileDropdown />
//             </div>
//           </div>

//           {error && (
//             <Alert variant="destructive" className="mb-4">
//               <AlertDescription>{error}</AlertDescription>
//             </Alert>
//           )}

//           <Card className="mb-6">
//             <CardHeader>
//               <CardTitle className="text-[#1D3557]">Enter Your Vision</CardTitle>
//               <CardDescription>Describe a future possibility, and let AI bring it to life.</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Textarea
//                 placeholder="Imagine if..."
//                 value={prompt}
//                 onChange={handlePromptChange}
//                 className="min-h-[120px]"
//               />
//               <Button
//                 className="mt-4 bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
//                 onClick={handleGenerateVision}
//                 disabled={isGenerating}
//               >
//                 {isGenerating ? "Generating..." : "Generate Vision"}
//               </Button>
//             </CardContent>
//           </Card>

//           {generatedImage && (
//             <div className="mt-6 text-center">
//               <h2 className="text-2xl font-bold">Generated Vision</h2>
//               <img src={generatedImage} alt="Generated Vision" className="mx-auto mt-4 rounded-lg shadow-lg" />
//             </div>
//           )}
//         </main>
//       </div>
//     </SidebarProvider>
//   );
// }
