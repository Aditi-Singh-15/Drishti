// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { DashboardNav } from "@/components/dashboard-nav"

// export default function ResourcesPage() {
//   const [searchQuery, setSearchQuery] = useState("")

//   // Sample educational videos data
//   const videos = [
//     {
//       id: "1",
//       title: "Introduction to Coding for Girls",
//       description: "Learn the basics of programming in a fun and engaging way designed for beginners.",
//       thumbnail: "/placeholder.svg?height=180&width=320",
//       duration: "15:24",
//       channel: "Code for All",
//       views: "12K",
//       date: "2 weeks ago",
//       category: "coding",
//     },
//     {
//       id: "2",
//       title: "Women in STEM: Breaking Barriers",
//       description:
//         "Inspiring stories of women who overcame challenges to succeed in science, technology, engineering, and mathematics.",
//       thumbnail: "/placeholder.svg?height=180&width=320",
//       duration: "22:15",
//       channel: "STEM Education",
//       views: "8.5K",
//       date: "1 month ago",
//       category: "stem",
//     },
//     {
//       id: "3",
//       title: "Financial Literacy for Young Women",
//       description: "Essential financial concepts every young woman should know to achieve financial independence.",
//       thumbnail: "/placeholder.svg?height=180&width=320",
//       duration: "18:42",
//       channel: "Finance Fundamentals",
//       views: "15K",
//       date: "3 weeks ago",
//       category: "finance",
//     },
//     {
//       id: "4",
//       title: "Scholarships and Educational Opportunities",
//       description: "A comprehensive guide to scholarships, grants, and educational programs available for rural girls.",
//       thumbnail: "/placeholder.svg?height=180&width=320",
//       duration: "25:10",
//       channel: "Education Access",
//       views: "20K",
//       date: "1 week ago",
//       category: "education",
//     },
//     {
//       id: "5",
//       title: "Digital Skills for the Modern Workplace",
//       description: "Essential digital skills that can help rural girls prepare for jobs in the modern economy.",
//       thumbnail: "/placeholder.svg?height=180&width=320",
//       duration: "19:35",
//       channel: "Digital Literacy",
//       views: "9.8K",
//       date: "2 months ago",
//       category: "digital",
//     },
//     {
//       id: "6",
//       title: "Health and Wellness for Teenage Girls",
//       description: "Important health information and wellness practices specifically for teenage girls.",
//       thumbnail: "/placeholder.svg?height=180&width=320",
//       duration: "16:50",
//       channel: "Health Matters",
//       views: "11K",
//       date: "3 weeks ago",
//       category: "health",
//     },
//     {
//       id: "7",
//       title: "Leadership Skills for Young Women",
//       description: "Develop essential leadership skills to become a confident and effective leader in your community.",
//       thumbnail: "/placeholder.svg?height=180&width=320",
//       duration: "21:18",
//       channel: "Leadership Academy",
//       views: "7.2K",
//       date: "1 month ago",
//       category: "leadership",
//     },
//     {
//       id: "8",
//       title: "Career Options After High School",
//       description: "Explore various career paths and educational options available after completing high school.",
//       thumbnail: "/placeholder.svg?height=180&width=320",
//       duration: "23:45",
//       channel: "Career Guidance",
//       views: "18K",
//       date: "2 weeks ago",
//       category: "career",
//     },
//   ]

//   // Sample educational articles
//   const articles = [
//     {
//       id: "1",
//       title: "The Importance of Girls' Education in Rural Communities",
//       description: "Exploring how education for girls transforms not just individual lives but entire communities.",
//       image: "/placeholder.svg?height=200&width=300",
//       author: "Dr. Meera Patel",
//       date: "March 15, 2025",
//       readTime: "8 min read",
//       category: "education",
//     },
//     {
//       id: "2",
//       title: "Financial Independence: A Guide for Rural Women",
//       description: "Practical steps and strategies for achieving financial independence in rural settings.",
//       image: "/placeholder.svg?height=200&width=300",
//       author: "Priya Singh",
//       date: "March 10, 2025",
//       readTime: "12 min read",
//       category: "finance",
//     },
//     {
//       id: "3",
//       title: "Digital Literacy: Essential Skills for the 21st Century",
//       description:
//         "Why digital literacy is crucial for rural girls and how to develop these skills with limited resources.",
//       image: "/placeholder.svg?height=200&width=300",
//       author: "Anjali Kumar",
//       date: "March 5, 2025",
//       readTime: "10 min read",
//       category: "digital",
//     },
//     {
//       id: "4",
//       title: "Scholarships and Opportunities for Rural Girls",
//       description: "A comprehensive list of scholarships, grants, and programs specifically designed for rural girls.",
//       image: "/placeholder.svg?height=200&width=300",
//       author: "Sunita Sharma",
//       date: "February 28, 2025",
//       readTime: "15 min read",
//       category: "education",
//     },
//   ]

//   // Filter videos based on search query
//   const filteredVideos = videos.filter(
//     (video) =>
//       video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       video.description.toLowerCase().includes(searchQuery.toLowerCase()),
//   )

//   // Filter articles based on search query
//   const filteredArticles = articles.filter(
//     (article) =>
//       article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       article.description.toLowerCase().includes(searchQuery.toLowerCase()),
//   )

//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen bg-[#FEF6F0]">
//         <DashboardNav />

//         <main className="flex-1 p-6">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-[#1D3557]">Educational Resources</h1>
//               <p className="text-[#1D3557]/70">Learn. Grow. Empower.</p>
//             </div>

//             <div className="w-full md:w-auto">
//               <div className="relative">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1D3557]/50"
//                 >
//                   <circle cx="11" cy="11" r="8" />
//                   <path d="m21 21-4.3-4.3" />
//                 </svg>
//                 <Input
//                   placeholder="Search resources..."
//                   className="pl-10 w-full md:w-[300px]"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>

//           <Tabs defaultValue="videos" className="w-full">
//             <TabsList className="mb-6">
//               <TabsTrigger value="videos">Educational Videos</TabsTrigger>
//               <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
//               <TabsTrigger value="saved">Saved Resources</TabsTrigger>
//             </TabsList>

//             <TabsContent value="videos">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {filteredVideos.length > 0 ? (
//                   filteredVideos.map((video) => (
//                     <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//                       <div className="relative">
//                         <img
//                           src={video.thumbnail || "/placeholder.svg"}
//                           alt={video.title}
//                           className="w-full h-[180px] object-cover"
//                         />
//                         <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
//                           {video.duration}
//                         </div>
//                         <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
//                           <Button
//                             variant="outline"
//                             className="text-white border-white hover:bg-white/20 hover:text-white"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               className="lucide lucide-play"
//                             >
//                               <polygon points="5 3 19 12 5 21 5 3" />
//                             </svg>
//                           </Button>
//                         </div>
//                       </div>
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-[#1D3557] text-lg line-clamp-2">{video.title}</CardTitle>
//                         <CardDescription className="flex items-center text-xs">
//                           {video.channel} • {video.views} views • {video.date}
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-[#1D3557]/80 text-sm line-clamp-2">{video.description}</p>
//                       </CardContent>
//                       <CardFooter className="flex justify-between pt-2 border-t">
//                         <Button variant="ghost" size="sm" className="text-[#1D3557]">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="16"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="lucide lucide-bookmark mr-1"
//                           >
//                             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//                           </svg>
//                           Save
//                         </Button>
//                         <Button variant="ghost" size="sm" className="text-[#1D3557]">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="16"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="lucide lucide-share-2 mr-1"
//                           >
//                             <circle cx="18" cy="5" r="3" />
//                             <circle cx="6" cy="12" r="3" />
//                             <circle cx="18" cy="19" r="3" />
//                             <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
//                             <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
//                           </svg>
//                           Share
//                         </Button>
//                       </CardFooter>
//                     </Card>
//                   ))
//                 ) : (
//                   <div className="col-span-full text-center py-12">
//                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C85C7F]/10 mb-4">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="32"
//                         height="32"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="#C85C7F"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-search-x"
//                       >
//                         <path d="m13.5 8.5-5 5" />
//                         <path d="m8.5 8.5 5 5" />
//                         <circle cx="11" cy="11" r="8" />
//                         <path d="m21 21-4.3-4.3" />
//                       </svg>
//                     </div>
//                     <h3 className="text-xl font-semibold text-[#1D3557] mb-2">No Videos Found</h3>
//                     <p className="text-[#1D3557]/70 max-w-md mx-auto">
//                       We couldn't find any videos matching your search. Try different keywords or browse our categories.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </TabsContent>

//             <TabsContent value="articles">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredArticles.length > 0 ? (
//                   filteredArticles.map((article) => (
//                     <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//                       <div className="h-[200px]">
//                         <img
//                           src={article.image || "/placeholder.svg"}
//                           alt={article.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <CardHeader className="pb-2">
//                         <div className="flex items-center gap-2 mb-2">
//                           <span className="text-xs bg-[#C85C7F]/10 text-[#C85C7F] px-2 py-1 rounded-full">
//                             {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
//                           </span>
//                           <span className="text-xs text-[#1D3557]/60">{article.readTime}</span>
//                         </div>
//                         <CardTitle className="text-[#1D3557] text-xl line-clamp-2">{article.title}</CardTitle>
//                         <CardDescription>
//                           By {article.author} • {article.date}
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-[#1D3557]/80 line-clamp-3">{article.description}</p>
//                       </CardContent>
//                       <CardFooter className="flex justify-between pt-2 border-t">
//                         <Button variant="ghost" className="text-[#1D3557]">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="18"
//                             height="18"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="lucide lucide-bookmark mr-1"
//                           >
//                             <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//                           </svg>
//                           Save
//                         </Button>
//                         <Button className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white">Read Article</Button>
//                       </CardFooter>
//                     </Card>
//                   ))
//                 ) : (
//                   <div className="col-span-full text-center py-12">
//                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C85C7F]/10 mb-4">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="32"
//                         height="32"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="#C85C7F"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-search-x"
//                       >
//                         <path d="m13.5 8.5-5 5" />
//                         <path d="m8.5 8.5 5 5" />
//                         <circle cx="11" cy="11" r="8" />
//                         <path d="m21 21-4.3-4.3" />
//                       </svg>
//                     </div>
//                     <h3 className="text-xl font-semibold text-[#1D3557] mb-2">No Articles Found</h3>
//                     <p className="text-[#1D3557]/70 max-w-md mx-auto">
//                       We couldn't find any articles matching your search. Try different keywords or browse our
//                       categories.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </TabsContent>

//             <TabsContent value="saved">
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
//                     className="lucide lucide-bookmark"
//                   >
//                     <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#1D3557] mb-2">No Saved Resources Yet</h3>
//                 <p className="text-[#1D3557]/70 max-w-md mx-auto mb-6">
//                   Save videos and articles to access them later, even when you're offline.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Button
//                     variant="outline"
//                     className="border-[#1D3557] text-[#1D3557]"
//                     onClick={() => document.querySelector('[data-value="videos"]')?.click()}
//                   >
//                     Browse Videos
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="border-[#1D3557] text-[#1D3557]"
//                     onClick={() => document.querySelector('[data-value="articles"]')?.click()}
//                   >
//                     Browse Articles
//                   </Button>
//                 </div>
//               </div>
//             </TabsContent>
//           </Tabs>

//           <div className="mt-12">
//             <h2 className="text-2xl font-bold text-[#1D3557] mb-6">Popular Categories</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//               {[
//                 { name: "Education", icon: "graduation-cap", count: 24 },
//                 { name: "STEM", icon: "atom", count: 18 },
//                 { name: "Finance", icon: "wallet", count: 15 },
//                 { name: "Leadership", icon: "users", count: 12 },
//                 { name: "Health", icon: "heart", count: 20 },
//                 { name: "Digital Skills", icon: "laptop", count: 16 },
//               ].map((category) => (
//                 <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
//                   <CardContent className="flex flex-col items-center justify-center p-6">
//                     <div className="w-12 h-12 rounded-full bg-[#C85C7F]/10 flex items-center justify-center mb-3">
//                       {category.icon === "graduation-cap" && (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="#C85C7F"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-graduation-cap"
//                         >
//                           <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//                           <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
//                         </svg>
//                       )}
//                       {category.icon === "atom" && (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="#C85C7F"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-atom"
//                         >
//                           <circle cx="12" cy="12" r="1" />
//                           <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
//                           <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
//                         </svg>
//                       )}
//                       {category.icon === "wallet" && (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="#C85C7F"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-wallet"
//                         >
//                           <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
//                           <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
//                           <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
//                         </svg>
//                       )}
//                       {category.icon === "users" && (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="#C85C7F"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-users"
//                         >
//                           <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                           <circle cx="9" cy="7" r="4" />
//                           <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//                           <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                         </svg>
//                       )}
//                       {category.icon === "heart" && (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="#C85C7F"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-heart"
//                         >
//                           <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
//                         </svg>
//                       )}
//                       {category.icon === "laptop" && (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="#C85C7F"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-laptop"
//                         >
//                           <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
//                         </svg>
//                       )}
//                     </div>
//                     <h3 className="font-medium text-[#1D3557]">{category.name}</h3>
//                     <p className="text-xs text-[#1D3557]/60">{category.count} resources</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </SidebarProvider>
//   )
// }

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardNav } from "@/components/dashboard-nav"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  channelTitle: string
  publishedAt: string
  duration: string
  viewCount: string
}

export default function ResourcesPage() {
  const { userProfile, loading } = useAuth()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)
  const [videos, setVideos] = useState<Video[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [savedVideos, setSavedVideos] = useState<Video[]>([])

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !userProfile) {
      router.push("/login")
    }
  }, [loading, userProfile, router])

  // Check for YouTube API key in localStorage
  useEffect(() => {
    const storedApiKey = localStorage.getItem("youtubeApiKey")
    if (storedApiKey) {
      setApiKey(storedApiKey)
    } else {
      setShowApiKeyInput(true)
    }
    
    // Load saved videos from localStorage
    const savedVideosJson = localStorage.getItem("savedVideos")
    if (savedVideosJson) {
      try {
        setSavedVideos(JSON.parse(savedVideosJson))
      } catch (err) {
        console.error("Error parsing saved videos:", err)
      }
    }
  }, [])

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      setError("Please enter a valid API key")
      return
    }
    
    localStorage.setItem("youtubeApiKey", apiKey)
    setShowApiKeyInput(false)
    setError(null)
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError("Please enter a search query")
      return
    }
    
    if (!apiKey) {
      setShowApiKeyInput(true)
      setError("YouTube API key is required")
      return
    }
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/videos?query=${encodeURIComponent(searchQuery)}&apiKey=${apiKey}`)
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch videos")
      }
      
      setVideos(data.videos)
    } catch (err: any) {
      console.error("Error searching videos:", err)
      setError(err.message || "Failed to search videos")
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }
  
  const saveVideo = (video: Video) => {
    const updatedSavedVideos = [...savedVideos, video]
    setSavedVideos(updatedSavedVideos)
    localStorage.setItem("savedVideos", JSON.stringify(updatedSavedVideos))
  }
  
  const removeVideo = (videoId: string) => {
    const updatedSavedVideos = savedVideos.filter(video => video.id !== videoId)
    setSavedVideos(updatedSavedVideos)
    localStorage.setItem("savedVideos", JSON.stringify(updatedSavedVideos))
  }
  
  // Format YouTube duration (PT1H2M3S) to readable format (1:02:03)
  const formatDuration = (duration: string) => {
    if (duration === 'Unknown') return duration
    
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
    if (!match) return duration
    
    const hours = match[1] ? match[1] + ':' : ''
    const minutes = match[2] ? (hours && match[2].length === 1 ? '0' + match[2] : match[2]) + ':' : '0:'
    const seconds = match[3] ? (match[3].length === 1 ? '0' + match[3] : match[3]) : '00'
    
    return hours + minutes + seconds
  }
  
  // Format view count (1234567) to readable format (1.2M)
  const formatViewCount = (viewCount: string) => {
    if (viewCount === 'Unknown') return viewCount
    
    const count = Number.parseInt(viewCount)
    if (isNaN(count)) return viewCount
    
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M'
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K'
    } else {
      return count.toString()
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1D3557]">Educational Resources</h1>
              <p className="text-[#1D3557]/70">Learn. Grow. Empower.</p>
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
                <CardTitle className="text-[#1D3557]">YouTube API Key Required</CardTitle>
                <CardDescription>
                  To search for educational videos, please provide your YouTube API key. You can get one for free at{" "}
                  <a 
                    href="https://console.cloud.google.com/apis/credentials" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#C85C7F] underline"
                  >
                    Google Cloud Console
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    placeholder="Enter your YouTube API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="flex-grow"
                  />
                  <Button 
                    className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                    onClick={handleSaveApiKey}
                  >
                    Save Key
                  </Button>
                </div>
                <p className="text-xs text-[#1D3557]/70 mt-2">
                  Your API key will be stored locally in your browser and is not sent to our servers.
                </p>
              </CardContent>
            </Card>
          )}

          <div className="w-full mb-6">
            <div className="relative">
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
                className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1D3557]/50"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Input
                placeholder="Search for educational videos..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="mt-2 flex justify-end">
              <Button 
                className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                onClick={handleSearch}
                disabled={isLoading || !apiKey}
              >
                {isLoading ? (
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
                    Searching...
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
                      className="lucide lucide-search mr-2"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    Search
                  </>
                )}
              </Button>
            </div>
          </div>

          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="videos">Educational Videos</TabsTrigger>
              <TabsTrigger value="saved">Saved Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="videos">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <Skeleton className="w-full h-[180px]" />
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
              ) : videos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {videos.map((video) => (
                    <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img
                          src={video.thumbnail || "/placeholder.svg?height=180&width=320"}
                          alt={video.title}
                          className="w-full h-[180px] object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {formatDuration(video.duration)}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                          <a 
                            href={`https://www.youtube.com/watch?v=${video.id}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              className="text-white border-white hover:bg-white/20 hover:text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-play"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </Button>
                          </a>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-[#1D3557] text-lg line-clamp-2">{video.title}</CardTitle>
                        <CardDescription className="flex items-center text-xs">
                          {video.channelTitle} • {formatViewCount(video.viewCount)} views
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#1D3557]/80 text-sm line-clamp-2">{video.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-2 border-t">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-[#1D3557]"
                          onClick={() => saveVideo(video)}
                        >
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
                            className="lucide lucide-bookmark mr-1"
                          >
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                          </svg>
                          Save
                        </Button>
                        <a 
                          href={`https://www.youtube.com/watch?v=${video.id}`} 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm" className="text-[#1D3557]">
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
                              className="lucide lucide-external-link mr-1"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" x2="21" y1="14" y2="3" />
                            </svg>
                            Watch
                          </Button>
                        </a>
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
                      className="lucide lucide-video"
                    >
                      <path d="m22 8-6 4 6 4V8Z" />
                      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D3557] mb-2">No Videos Found</h3>
                  <p className="text-[#1D3557]/70 max-w-md mx-auto mb-6">
                    Search for educational videos using the search bar above. Try keywords like "STEM education", "girls empowerment", or "financial literacy".
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="saved">
              {savedVideos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {savedVideos.map((video) => (
                    <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img
                          src={video.thumbnail || "/placeholder.svg?height=180&width=320"}
                          alt={video.title}
                          className="w-full h-[180px] object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {formatDuration(video.duration)}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                          <a 
                            href={`https://www.youtube.com/watch?v=${video.id}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              className="text-white border-white hover:bg-white/20 hover:text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-play"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </Button>
                          </a>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-[#1D3557] text-lg line-clamp-2">{video.title}</CardTitle>
                        <CardDescription className="flex items-center text-xs">
                          {video.channelTitle} • {formatViewCount(video.viewCount)} views
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#1D3557]/80 text-sm line-clamp-2">{video.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-2 border-t">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-500"
                          onClick={() => removeVideo(video.id)}
                        >
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
                            className="lucide lucide-trash-2 mr-1"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                          </svg>
                          Remove
                        </Button>
                        <a 
                          href={`https://www.youtube.com/watch?v=${video.id}`} 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm" className="text-[#1D3557]">
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
                              className="lucide lucide-external-link mr-1"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" x2="21" y1="14" y2="3" />
                            </svg>
                            Watch
                          </Button>
                        </a>
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
                      className="lucide lucide-bookmark"
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D3557] mb-2">No Saved Resources Yet</h3>
                  <p className="text-[#1D3557]/70 max-w-md mx-auto mb-6">
                    Save videos to access them later, even when you're offline.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="outline"
                      className="border-[#1D3557] text-[#1D3557]"
                      onClick={() => document.querySelector('[data-value="videos"]')?.click()}
                    >
                      Browse Videos
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#1D3557] mb-6">Popular Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Education", icon: "graduation-cap", count: 24 },
                { name: "STEM", icon: "atom", count: 18 },
                { name: "Finance", icon: "wallet", count: 15 },
                { name: "Leadership", icon: "users", count: 12 },
                { name: "Health", icon: "heart", count: 20 },
                { name: "Digital Skills", icon: "laptop", count: 16 },
              ].map((category) => (
                <Card 
                  key={category.name} 
                  className="hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    setSearchQuery(category.name)
                    handleSearch()
                  }}
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="w-12 h-12 rounded-full bg-[#C85C7F]/10 flex items-center justify-center mb-3">
                      {category.icon === "graduation-cap" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C85C7F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-graduation-cap"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                      )}
                      {category.icon === "atom" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C85C7F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-atom"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                          <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                        </svg>
                      )}
                      {category.icon === "wallet" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C85C7F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-wallet"
                        >
                          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                        </svg>
                      )}
                      {category.icon === "users" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C85C7F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-users"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      )}
                      {category.icon === "heart" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C85C7F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-heart"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      )}
                      {category.icon === "laptop" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C85C7F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-laptop"
                        >
                          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.\
2 1.45h-18a1 1 0 0 1-.2-1.45L4 16m16 0H4" />
                          <path d="M4 16h16" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D3557]">{category.name}</h3>
                    <p className="text-[#1D3557]/70 text-sm">{category.count} videos</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
