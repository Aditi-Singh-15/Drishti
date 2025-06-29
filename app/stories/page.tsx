// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Textarea } from "@/components/ui/textarea"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { DashboardNav } from "@/components/dashboard-nav"

// export default function StoriesPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [selectedFile, setSelectedFile] = useState<File | null>(null)
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null)
//   const [commentText, setCommentText] = useState("")
//   const [expandedStory, setExpandedStory] = useState<string | null>(null)

//   // Sample stories data
//   const stories = [
//     {
//       id: "1",
//       title: "How Education Changed My Daughter's Life",
//       content:
//         "When my daughter first expressed her desire to continue her education beyond primary school, we faced significant resistance from our community. In our village, girls traditionally stayed home after completing basic education. However, we stood firm in our decision to support her dreams.\n\nWith the help of a local NGO, she received a scholarship to attend a good secondary school in the nearby town. The transformation was remarkable. Not only did she excel academically, but she also developed confidence and leadership skills that inspired other girls in our village.\n\nToday, she is pursuing a degree in computer science and has become a role model for younger girls. Her journey has changed not just her life but has shifted the mindset of our entire community about girls' education.",
//       image: "/placeholder.svg?height=300&width=400",
//       author: "Sunita Devi",
//       authorRole: "Parent",
//       date: "March 18, 2025",
//       likes: 42,
//       comments: [
//         {
//           id: "c1",
//           author: "Meena",
//           content: "This is so inspiring! My daughter also wants to study computer science.",
//           date: "March 19, 2025",
//         },
//         {
//           id: "c2",
//           author: "Rajesh",
//           content: "Education is truly the key to changing lives. Thank you for sharing this story.",
//           date: "March 20, 2025",
//         },
//       ],
//     },
//     {
//       id: "2",
//       title: "Breaking Barriers in STEM",
//       content:
//         "Growing up in a small village, I never imagined I would one day work with robots and computers. My journey began when a mobile science lab visited our school. I was fascinated by the experiments and the possibilities of technology.\n\nDespite facing skepticism about girls pursuing science, my teachers encouraged me to participate in district-level competitions. With each small success, my confidence grew. The turning point came when I won a national coding competition designed for rural students.\n\nThis opened doors to specialized training programs and eventually a scholarship to study engineering. Today, I'm working on developing technology solutions for rural areas, hoping to inspire more girls from villages like mine to pursue their dreams in STEM fields.",
//       image: "/placeholder.svg?height=300&width=400",
//       author: "Priya Kumari",
//       authorRole: "Student",
//       date: "March 10, 2025",
//       likes: 38,
//       comments: [
//         {
//           id: "c3",
//           author: "Anita",
//           content: "You are an inspiration! We need more role models like you.",
//           date: "March 11, 2025",
//         },
//       ],
//     },
//     {
//       id: "3",
//       title: "From School Dropout to Community Leader",
//       content:
//         "At 14, I was forced to drop out of school when my family faced financial hardship. It seemed my dreams of education were over. For two years, I helped with household work while watching my brothers continue their schooling.\n\nEverything changed when a volunteer from Drishti visited our village. She spoke about the importance of girls' education and the special programs available. With her help, I enrolled in a bridge course that allowed me to catch up on missed education.\n\nNot only did I complete my schooling, but I also became an advocate for girls' education in my community. Today, I lead a women's self-help group and ensure that no girl in our village drops out of school due to financial constraints or societal pressure. Education gave me a voice, and I'm using it to create change.",
//       image: "/placeholder.svg?height=300&width=400",
//       author: "Lakshmi Singh",
//       authorRole: "Community Leader",
//       date: "February 25, 2025",
//       likes: 56,
//       comments: [
//         {
//           id: "c4",
//           author: "Vikram",
//           content: "This story shows how one person can change an entire community. Amazing work!",
//           date: "February 26, 2025",
//         },
//         {
//           id: "c5",
//           author: "Geeta",
//           content: "I'm going through something similar. Your story gives me hope.",
//           date: "February 27, 2025",
//         },
//         {
//           id: "c6",
//           author: "Sanjay",
//           content: "We need more leaders like you in every village.",
//           date: "March 1, 2025",
//         },
//       ],
//     },
//   ]

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0]
//       setSelectedFile(file)

//       // Create preview URL
//       const reader = new FileReader()
//       reader.onload = () => {
//         setPreviewUrl(reader.result as string)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate upload to Firebase
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setSelectedFile(null)
//       setPreviewUrl(null)

//       // Reset form
//       const form = e.target as HTMLFormElement
//       form.reset()

//       // Close dialog
//       document.getElementById("close-dialog")?.click()
//     }, 2000)
//   }

//   const handleLike = (storyId: string) => {
//     // In a real app, this would update the like count in Firebase
//     console.log(`Liked story ${storyId}`)
//   }

//   const handleComment = (storyId: string) => {
//     if (!commentText.trim()) return

//     // In a real app, this would add the comment to Firebase
//     console.log(`Added comment to story ${storyId}: ${commentText}`)
//     setCommentText("")
//   }

//   const toggleExpandStory = (storyId: string) => {
//     if (expandedStory === storyId) {
//       setExpandedStory(null)
//     } else {
//       setExpandedStory(storyId)
//     }
//   }

//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen bg-[#FEF6F0]">
//         <DashboardNav />

//         <main className="flex-1 p-6">
//           <div className="flex justify-between items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-[#1D3557]">Share Your Story</h1>
//               <p className="text-[#1D3557]/70">Inspiring journeys, shared together!</p>
//             </div>

//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-plus mr-2"
//                   >
//                     <path d="M5 12h14" />
//                     <path d="M12 5v14" />
//                   </svg>
//                   Share Your Story
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="sm:max-w-[600px]">
//                 <DialogHeader>
//                   <DialogTitle className="text-[#1D3557]">Share Your Inspiring Story</DialogTitle>
//                   <DialogDescription>
//                     Your journey can inspire and empower other girls in the community.
//                   </DialogDescription>
//                 </DialogHeader>

//                 <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//                   <div>
//                     <Label htmlFor="title">Story Title</Label>
//                     <Input id="title" placeholder="Give your story a meaningful title" required />
//                   </div>

//                   <div>
//                     <Label htmlFor="content">Your Story</Label>
//                     <Textarea
//                       id="content"
//                       placeholder="Share your journey, challenges, and achievements..."
//                       className="min-h-[200px]"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="image">Add an Image (Optional)</Label>
//                     <div className="mt-2 flex flex-col gap-4">
//                       <Input id="image" type="file" accept="image/*" onChange={handleFileChange} />

//                       {previewUrl && (
//                         <div className="relative w-full h-[200px] rounded-md overflow-hidden border border-gray-200">
//                           <img
//                             src={previewUrl || "/placeholder.svg"}
//                             alt="Preview"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <DialogFooter>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       id="close-dialog"
//                       onClick={() => {
//                         setSelectedFile(null)
//                         setPreviewUrl(null)
//                       }}
//                     >
//                       Cancel
//                     </Button>
//                     <Button
//                       type="submit"
//                       className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Submitting..." : "Share Story"}
//                     </Button>
//                   </DialogFooter>
//                 </form>
//               </DialogContent>
//             </Dialog>
//           </div>

//           <Tabs defaultValue="all" className="w-full">
//             <TabsList className="mb-6">
//               <TabsTrigger value="all">All Stories</TabsTrigger>
//               <TabsTrigger value="popular">Most Popular</TabsTrigger>
//               <TabsTrigger value="my">My Stories</TabsTrigger>
//             </TabsList>

//             <TabsContent value="all">
//               <div className="space-y-8">
//                 {stories.map((story) => (
//                   <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//                     <div className="md:flex">
//                       <div className="md:w-1/3 h-48 md:h-auto">
//                         <img
//                           src={story.image || "/placeholder.svg"}
//                           alt={story.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="md:w-2/3 flex flex-col">
//                         <CardHeader className="pb-2">
//                           <div className="flex items-center gap-2 mb-2">
//                             <Avatar className="h-8 w-8">
//                               <AvatarFallback className="bg-[#C85C7F] text-white">
//                                 {story.author.charAt(0)}
//                               </AvatarFallback>
//                             </Avatar>
//                             <div>
//                               <span className="text-sm font-medium text-[#1D3557]">{story.author}</span>
//                               <span className="text-xs text-[#1D3557]/60 ml-2">{story.authorRole}</span>
//                             </div>
//                           </div>
//                           <CardTitle className="text-[#1D3557] text-xl">{story.title}</CardTitle>
//                           <CardDescription>{story.date}</CardDescription>
//                         </CardHeader>
//                         <CardContent className="flex-grow">
//                           <p className={`text-[#1D3557]/80 ${expandedStory === story.id ? "" : "line-clamp-3"}`}>
//                             {story.content}
//                           </p>
//                           {story.content.length > 200 && (
//                             <Button
//                               variant="link"
//                               className="p-0 h-auto text-[#C85C7F] mt-2"
//                               onClick={() => toggleExpandStory(story.id)}
//                             >
//                               {expandedStory === story.id ? "Read less" : "Read more"}
//                             </Button>
//                           )}
//                         </CardContent>
//                         <CardFooter className="flex flex-col border-t pt-4">
//                           <div className="flex justify-between w-full mb-4">
//                             <Button
//                               variant="ghost"
//                               className="text-[#1D3557] gap-1"
//                               onClick={() => handleLike(story.id)}
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="18"
//                                 height="18"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="lucide lucide-heart text-[#C85C7F]"
//                               >
//                                 <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
//                               </svg>
//                               {story.likes}
//                             </Button>
//                             <Button variant="ghost" className="text-[#1D3557]">
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="18"
//                                 height="18"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="lucide lucide-share-2 mr-1"
//                               >
//                                 <circle cx="18" cy="5" r="3" />
//                                 <circle cx="6" cy="12" r="3" />
//                                 <circle cx="18" cy="19" r="3" />
//                                 <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
//                                 <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
//                               </svg>
//                               Share
//                             </Button>
//                           </div>

//                           {story.comments.length > 0 && (
//                             <div className="w-full space-y-3 mb-4">
//                               <h4 className="font-medium text-[#1D3557]">Comments ({story.comments.length})</h4>
//                               {story.comments.map((comment) => (
//                                 <div key={comment.id} className="bg-gray-50 p-3 rounded-md">
//                                   <div className="flex items-center gap-2 mb-1">
//                                     <Avatar className="h-6 w-6">
//                                       <AvatarFallback className="bg-[#1D3557] text-white text-xs">
//                                         {comment.author.charAt(0)}
//                                       </AvatarFallback>
//                                     </Avatar>
//                                     <span className="text-sm font-medium text-[#1D3557]">{comment.author}</span>
//                                     <span className="text-xs text-[#1D3557]/60">{comment.date}</span>
//                                   </div>
//                                   <p className="text-sm text-[#1D3557]/80">{comment.content}</p>
//                                 </div>
//                               ))}
//                             </div>
//                           )}

//                           <div className="flex w-full gap-2">
//                             <Input
//                               placeholder="Add a comment..."
//                               value={commentText}
//                               onChange={(e) => setCommentText(e.target.value)}
//                               className="flex-grow"
//                             />
//                             <Button
//                               className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
//                               onClick={() => handleComment(story.id)}
//                             >
//                               Post
//                             </Button>
//                           </div>
//                         </CardFooter>
//                       </div>
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="popular">
//               <div className="space-y-8">
//                 {stories
//                   .sort((a, b) => b.likes - a.likes)
//                   .map((story) => (
//                     <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//                       <div className="md:flex">
//                         <div className="md:w-1/3 h-48 md:h-auto">
//                           <img
//                             src={story.image || "/placeholder.svg"}
//                             alt={story.title}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="md:w-2/3 flex flex-col">
//                           <CardHeader className="pb-2">
//                             <div className="flex items-center gap-2 mb-2">
//                               <Avatar className="h-8 w-8">
//                                 <AvatarFallback className="bg-[#C85C7F] text-white">
//                                   {story.author.charAt(0)}
//                                 </AvatarFallback>
//                               </Avatar>
//                               <div>
//                                 <span className="text-sm font-medium text-[#1D3557]">{story.author}</span>
//                                 <span className="text-xs text-[#1D3557]/60 ml-2">{story.authorRole}</span>
//                               </div>
//                             </div>
//                             <CardTitle className="text-[#1D3557] text-xl">{story.title}</CardTitle>
//                             <CardDescription>{story.date}</CardDescription>
//                           </CardHeader>
//                           <CardContent className="flex-grow">
//                             <p className={`text-[#1D3557]/80 ${expandedStory === story.id ? "" : "line-clamp-3"}`}>
//                               {story.content}
//                             </p>
//                             {story.content.length > 200 && (
//                               <Button
//                                 variant="link"
//                                 className="p-0 h-auto text-[#C85C7F] mt-2"
//                                 onClick={() => toggleExpandStory(story.id)}
//                               >
//                                 {expandedStory === story.id ? "Read less" : "Read more"}
//                               </Button>
//                             )}
//                           </CardContent>
//                           <CardFooter className="border-t pt-4">
//                             <div className="flex justify-between w-full">
//                               <Button
//                                 variant="ghost"
//                                 className="text-[#1D3557] gap-1"
//                                 onClick={() => handleLike(story.id)}
//                               >
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   width="18"
//                                   height="18"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   strokeWidth="2"
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   className="lucide lucide-heart text-[#C85C7F]"
//                                 >
//                                   <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
//                                 </svg>
//                                 {story.likes}
//                               </Button>
//                               <Button variant="ghost" className="text-[#1D3557]">
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   width="18"
//                                   height="18"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   strokeWidth="2"
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   className="lucide lucide-message-square mr-1"
//                                 >
//                                   <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//                                 </svg>
//                                 {story.comments.length}
//                               </Button>
//                               <Button variant="ghost" className="text-[#1D3557]">
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   width="18"
//                                   height="18"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   strokeWidth="2"
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   className="lucide lucide-share-2 mr-1"
//                                 >
//                                   <circle cx="18" cy="5" r="3" />
//                                   <circle cx="6" cy="12" r="3" />
//                                   <circle cx="18" cy="19" r="3" />
//                                   <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
//                                   <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
//                                 </svg>
//                                 Share
//                               </Button>
//                             </div>
//                           </CardFooter>
//                         </div>
//                       </div>
//                     </Card>
//                   ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="my">
//               <div className="text-center py-12">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C85C7F]/10 mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="32"
//                     height="32"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#C85C7F"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-book-open-text"
//                   >
//                     <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//                     <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//                     <path d="M6 8h2" />
//                     <path d="M6 12h2" />
//                     <path d="M16 8h2" />
//                     <path d="M16 12h2" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#1D3557] mb-2">You Haven't Shared Any Stories Yet</h3>
//                 <p className="text-[#1D3557]/70 max-w-md mx-auto mb-6">
//                   Share your journey and inspire others in the community with your experiences.
//                 </p>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-plus mr-2"
//                       >
//                         <path d="M5 12h14" />
//                         <path d="M12 5v14" />
//                       </svg>
//                       Share Your First Story
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="sm:max-w-[600px]">
//                     <DialogHeader>
//                       <DialogTitle className="text-[#1D3557]">Share Your Inspiring Story</DialogTitle>
//                       <DialogDescription>
//                         Your journey can inspire and empower other girls in the community.
//                       </DialogDescription>
//                     </DialogHeader>

//                     <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//                       <div>
//                         <Label htmlFor="title2">Story Title</Label>
//                         <Input id="title2" placeholder="Give your story a meaningful title" required />
//                       </div>

//                       <div>
//                         <Label htmlFor="content2">Your Story</Label>
//                         <Textarea
//                           id="content2"
//                           placeholder="Share your journey, challenges, and achievements..."
//                           className="min-h-[200px]"
//                           required
//                         />
//                       </div>

//                       <div>
//                         <Label htmlFor="image2">Add an Image (Optional)</Label>
//                         <div className="mt-2 flex flex-col gap-4">
//                           <Input id="image2" type="file" accept="image/*" onChange={handleFileChange} />

//                           {previewUrl && (
//                             <div className="relative w-full h-[200px] rounded-md overflow-hidden border border-gray-200">
//                               <img
//                                 src={previewUrl || "/placeholder.svg"}
//                                 alt="Preview"
//                                 className="w-full h-full object-cover"
//                               />
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       <DialogFooter>
//                         <Button
//                           type="button"
//                           variant="outline"
//                           onClick={() => {
//                             setSelectedFile(null)
//                             setPreviewUrl(null)
//                           }}
//                         >
//                           Cancel
//                         </Button>
//                         <Button
//                           type="submit"
//                           className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
//                           disabled={isSubmitting}
//                         >
//                           {isSubmitting ? "Submitting..." : "Share Story"}
//                         </Button>
//                       </DialogFooter>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </TabsContent>
//           </Tabs>
//         </main>
//       </div>
//     </SidebarProvider>
//   )
// }

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
import { storyService, type Story } from "@/lib/services/story-service"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"
import { useRouter } from "next/navigation"

export default function StoriesPage() {
  const { userProfile, loading } = useAuth()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [commentText, setCommentText] = useState("")
  const [expandedStory, setExpandedStory] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Form state
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  // Stories state
  const [allStories, setAllStories] = useState<Story[]>([])
  const [popularStories, setPopularStories] = useState<Story[]>([])
  const [userStories, setUserStories] = useState<Story[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !userProfile) {
      router.push("/login")
    }
  }, [loading, userProfile, router])

  // Fetch stories
  useEffect(() => {
    const fetchStories = async () => {
      if (!userProfile) return

      setIsLoading(true)
      try {
        // Fetch all stories
        const all = await storyService.getAllStories()
        setAllStories(all)

        // Fetch popular stories
        const popular = await storyService.getPopularStories()
        setPopularStories(popular)

        // Fetch user's stories
        if (userProfile.uid) {
          const userStories = await storyService.getUserStories(userProfile.uid)
          setUserStories(userStories)
        }
      } catch (err: any) {
        console.error("Error fetching stories:", err)
        setError(err.message || "Failed to load stories")
      } finally {
        setIsLoading(false)
      }
    }

    fetchStories()
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
      setError("You must be logged in to share a story")
      return
    }

    if (!title.trim() || !content.trim()) {
      setError("Please provide both a title and content for your story")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      // Create story in Firestore
      await storyService.createStory(
        {
          title,
          content,
          author: userProfile.displayName || "Anonymous",
          authorId: userProfile.uid,
          authorRole: userProfile.role || "user",
        },
        selectedFile || undefined,
      )

      // Reset form
      setTitle("")
      setContent("")
      setSelectedFile(null)
      setPreviewUrl(null)

      // Refresh user stories
      const updatedUserStories = await storyService.getUserStories(userProfile.uid)
      setUserStories(updatedUserStories)

      // Refresh all stories
      const updatedAllStories = await storyService.getAllStories()
      setAllStories(updatedAllStories)

      // Close dialog
      document.getElementById("close-dialog")?.click()
    } catch (err: any) {
      console.error("Error submitting story:", err)
      setError(err.message || "Failed to submit story")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLike = async (storyId: string) => {
    if (!userProfile) {
      setError("You must be logged in to like a story")
      return
    }

    try {
      await storyService.likeStory(storyId)

      // Update stories with new like count
      setAllStories((prev) =>
        prev.map((story) => (story.id === storyId ? { ...story, likes: story.likes + 1 } : story)),
      )

      setPopularStories((prev) =>
        prev.map((story) => (story.id === storyId ? { ...story, likes: story.likes + 1 } : story)),
      )

      setUserStories((prev) =>
        prev.map((story) => (story.id === storyId ? { ...story, likes: story.likes + 1 } : story)),
      )
    } catch (err: any) {
      console.error("Error liking story:", err)
      setError(err.message || "Failed to like story")
    }
  }

  const handleComment = async (storyId: string) => {
    if (!commentText.trim() || !userProfile) return

    try {
      await storyService.addComment(storyId, {
        author: userProfile.displayName || "Anonymous",
        authorId: userProfile.uid,
        content: commentText,
      })

      // Refresh stories to show new comment
      const updatedStories = await storyService.getAllStories()
      setAllStories(updatedStories)

      const updatedPopular = await storyService.getPopularStories()
      setPopularStories(updatedPopular)

      if (userProfile.uid) {
        const updatedUserStories = await storyService.getUserStories(userProfile.uid)
        setUserStories(updatedUserStories)
      }

      setCommentText("")
    } catch (err: any) {
      console.error("Error adding comment:", err)
      setError(err.message || "Failed to add comment")
    }
  }

  const toggleExpandStory = (storyId: string) => {
    if (expandedStory === storyId) {
      setExpandedStory(null)
    } else {
      setExpandedStory(storyId)
    }
  }

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
              <h1 className="text-3xl font-bold text-[#1D3557]">Share Your Story</h1>
              <p className="text-[#1D3557]/70">Inspiring journeys, shared together!</p>
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
                    Share Your Story
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle className="text-[#1D3557]">Share Your Inspiring Story</DialogTitle>
                    <DialogDescription>
                      Your journey can inspire and empower other girls in the community.
                    </DialogDescription>
                  </DialogHeader>

                  {error && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="title">Story Title</Label>
                      <Input
                        id="title"
                        placeholder="Give your story a meaningful title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Your Story</Label>
                      <Textarea
                        id="content"
                        placeholder="Share your journey, challenges, and achievements..."
                        className="min-h-[200px]"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="image">Add an Image (Optional)</Label>
                      <div className="mt-2 flex flex-col gap-4">
                        <Input id="image" type="file" accept="image/*" onChange={handleFileChange} />

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
                          setError(null)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Share Story"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Stories</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="my">My Stories</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              {isLoading ? (
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="md:flex">
                        <Skeleton className="md:w-1/3 h-48" />
                        <div className="md:w-2/3 flex flex-col">
                          <CardHeader className="pb-2">
                            <Skeleton className="h-6 w-3/4 mb-2" />
                            <Skeleton className="h-4 w-1/2" />
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-3/4" />
                          </CardContent>
                          <CardFooter className="flex justify-between border-t pt-4">
                            <Skeleton className="h-10 w-20" />
                            <Skeleton className="h-10 w-20" />
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : allStories.length > 0 ? (
                <div className="space-y-8">
                  {allStories.map((story) => (
                    <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img
                            src={story.image || "/placeholder.svg?height=300&width=400"}
                            alt={story.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 flex flex-col">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 mb-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-[#C85C7F] text-white">
                                  {story.author.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <span className="text-sm font-medium text-[#1D3557]">{story.author}</span>
                                <span className="text-xs text-[#1D3557]/60 ml-2">{story.authorRole}</span>
                              </div>
                            </div>
                            <CardTitle className="text-[#1D3557] text-xl">{story.title}</CardTitle>
                            <CardDescription>{story.date?.toDate().toLocaleDateString() || "Recent"}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className={`text-[#1D3557]/80 ${expandedStory === story.id ? "" : "line-clamp-3"}`}>
                              {story.content}
                            </p>
                            {story.content.length > 200 && (
                              <Button
                                variant="link"
                                className="p-0 h-auto text-[#C85C7F] mt-2"
                                onClick={() => toggleExpandStory(story.id || "")}
                              >
                                {expandedStory === story.id ? "Read less" : "Read more"}
                              </Button>
                            )}
                          </CardContent>
                          <CardFooter className="flex flex-col border-t pt-4">
                            <div className="flex justify-between w-full mb-4">
                              <Button
                                variant="ghost"
                                className="text-[#1D3557] gap-1"
                                onClick={() => story.id && handleLike(story.id)}
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
                                {story.likes}
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
                            </div>

                            {story.comments && story.comments.length > 0 && (
                              <div className="w-full space-y-3 mb-4">
                                <h4 className="font-medium text-[#1D3557]">Comments ({story.comments.length})</h4>
                                {story.comments.map((comment, index) => (
                                  <div key={index} className="bg-gray-50 p-3 rounded-md">
                                    <div className="flex items-center gap-2 mb-1">
                                      <Avatar className="h-6 w-6">
                                        <AvatarFallback className="bg-[#1D3557] text-white text-xs">
                                          {comment.author.charAt(0)}
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="text-sm font-medium text-[#1D3557]">{comment.author}</span>
                                      <span className="text-xs text-[#1D3557]/60">
                                        {comment.date.toDate().toLocaleDateString()}
                                      </span>
                                    </div>
                                    <p className="text-sm text-[#1D3557]/80">{comment.content}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="flex w-full gap-2">
                              <Input
                                placeholder="Add a comment..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                className="flex-grow"
                              />
                              <Button
                                className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                                onClick={() => story.id && handleComment(story.id)}
                              >
                                Post
                              </Button>
                            </div>
                          </CardFooter>
                        </div>
                      </div>
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
                      className="lucide lucide-book-open-text"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      <path d="M6 8h2" />
                      <path d="M6 12h2" />
                      <path d="M16 8h2" />
                      <path d="M16 12h2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D3557] mb-2">No Stories Found</h3>
                  <p className="text-[#1D3557]/70 max-w-md mx-auto mb-6">
                    Be the first to share your story! Your experiences can inspire others in the community.
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
                        Share Your First Story
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">{/* Same dialog content as above */}</DialogContent>
                  </Dialog>
                </div>
              )}
            </TabsContent>

            <TabsContent value="popular">
              {isLoading ? (
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="md:flex">
                        <Skeleton className="md:w-1/3 h-48" />
                        <div className="md:w-2/3 flex flex-col">
                          <CardHeader className="pb-2">
                            <Skeleton className="h-6 w-3/4 mb-2" />
                            <Skeleton className="h-4 w-1/2" />
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-3/4" />
                          </CardContent>
                          <CardFooter className="flex justify-between border-t pt-4">
                            <Skeleton className="h-10 w-20" />
                            <Skeleton className="h-10 w-20" />
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : popularStories.length > 0 ? (
                <div className="space-y-8">
                  {popularStories.map((story) => (
                    <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img
                            src={story.image || "/placeholder.svg?height=300&width=400"}
                            alt={story.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 flex flex-col">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 mb-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-[#C85C7F] text-white">
                                  {story.author.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <span className="text-sm font-medium text-[#1D3557]">{story.author}</span>
                                <span className="text-xs text-[#1D3557]/60 ml-2">{story.authorRole}</span>
                              </div>
                            </div>
                            <CardTitle className="text-[#1D3557] text-xl">{story.title}</CardTitle>
                            <CardDescription>{story.date?.toDate().toLocaleDateString() || "Recent"}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className={`text-[#1D3557]/80 ${expandedStory === story.id ? "" : "line-clamp-3"}`}>
                              {story.content}
                            </p>
                            {story.content.length > 200 && (
                              <Button
                                variant="link"
                                className="p-0 h-auto text-[#C85C7F] mt-2"
                                onClick={() => toggleExpandStory(story.id || "")}
                              >
                                {expandedStory === story.id ? "Read less" : "Read more"}
                              </Button>
                            )}
                          </CardContent>
                          <CardFooter className="border-t pt-4">
                            <div className="flex justify-between w-full">
                              <Button
                                variant="ghost"
                                className="text-[#1D3557] gap-1"
                                onClick={() => story.id && handleLike(story.id)}
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
                                {story.likes}
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
                                  className="lucide lucide-message-square mr-1"
                                >
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                {story.comments?.length || 0}
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
                            </div>
                          </CardFooter>
                        </div>
                      </div>
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
                      className="lucide lucide-trending-up"
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D3557] mb-2">No Popular Stories Yet</h3>
                  <p className="text-[#1D3557]/70 max-w-md mx-auto mb-6">
                    Be the first to share a story that others can like and engage with!
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="my">
              {isLoading ? (
                <div className="space-y-8">
                  {[1, 2].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="md:flex">
                        <Skeleton className="md:w-1/3 h-48" />
                        <div className="md:w-2/3 flex flex-col">
                          <CardHeader className="pb-2">
                            <Skeleton className="h-6 w-3/4 mb-2" />
                            <Skeleton className="h-4 w-1/2" />
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-3/4" />
                          </CardContent>
                          <CardFooter className="flex justify-between border-t pt-4">
                            <Skeleton className="h-10 w-20" />
                            <Skeleton className="h-10 w-20" />
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : userStories.length > 0 ? (
                <div className="space-y-8">
                  {userStories.map((story) => (
                    <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img
                            src={story.image || "/placeholder.svg?height=300&width=400"}
                            alt={story.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 flex flex-col">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2 mb-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-[#C85C7F] text-white">
                                  {story.author.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <span className="text-sm font-medium text-[#1D3557]">{story.author}</span>
                                <span className="text-xs text-[#1D3557]/60 ml-2">{story.authorRole}</span>
                              </div>
                            </div>
                            <CardTitle className="text-[#1D3557] text-xl">{story.title}</CardTitle>
                            <CardDescription>{story.date?.toDate().toLocaleDateString() || "Recent"}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className={`text-[#1D3557]/80 ${expandedStory === story.id ? "" : "line-clamp-3"}`}>
                              {story.content}
                            </p>
                            {story.content.length > 200 && (
                              <Button
                                variant="link"
                                className="p-0 h-auto text-[#C85C7F] mt-2"
                                onClick={() => toggleExpandStory(story.id || "")}
                              >
                                {expandedStory === story.id ? "Read less" : "Read more"}
                              </Button>
                            )}
                          </CardContent>
                          <CardFooter className="flex justify-between border-t pt-4">
                            <Button
                              variant="ghost"
                              className="text-[#1D3557] gap-1"
                              onClick={() => story.id && handleLike(story.id)}
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
                              {story.likes}
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
                                className="lucide lucide-message-square mr-1"
                              >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                              </svg>
                              {story.comments?.length || 0}
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
                        </div>
                      </div>
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
                      className="lucide lucide-book-open-text"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      <path d="M6 8h2" />
                      <path d="M6 12h2" />
                      <path d="M16 8h2" />
                      <path d="M16 12h2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D3557] mb-2">You Haven't Shared Any Stories Yet</h3>
                  <p className="text-[#1D3557]/70 max-w-md mx-auto mb-6">
                    Share your journey and inspire others in the community with your experiences.
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
                        Share Your First Story
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">{/* Same dialog content as above */}</DialogContent>
                  </Dialog>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarProvider>
  )
}


