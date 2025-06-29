// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { DashboardNav } from "@/components/dashboard-nav"
// import { useAuth } from "@/contexts/auth-context"
// import { achievementService } from "@/lib/services/achievement-service"
// import { storyService } from "@/lib/services/story-service"
// import { sochService } from "@/lib/services/soch-service"
// import { Skeleton } from "@/components/ui/skeleton"
// import { UserProfileDropdown } from "@/components/user-profile-dropdown"

// export default function Dashboard() {
//   const { userProfile, loading } = useAuth()
//   const router = useRouter()
//   const [userStats, setUserStats] = useState({
//     storiesCount: 0,
//     achievementsCount: 0,
//     sochCount: 0,
//   })
//   const [isLoading, setIsLoading] = useState(true)

//   // Redirect if not authenticated
//   useEffect(() => {
//     if (!loading && !userProfile) {
//       router.push("/login")
//     }
//   }, [loading, userProfile, router])

//   // Fetch user statistics from Firebase
//   useEffect(() => {
//     const fetchUserStats = async () => {
//       if (!userProfile?.uid) return

//       setIsLoading(true)
//       try {
//         // Fetch user's stories
//         const stories = await storyService.getUserStories(userProfile.uid)

//         // Fetch user's achievements
//         const achievements = await achievementService.getUserAchievements(userProfile.uid)

//         // Fetch user's SOCH visions
//         const sochRequests = await sochService.getUserSochRequests(userProfile.uid)

//         setUserStats({
//           storiesCount: stories.length,
//           achievementsCount: achievements.length,
//           sochCount: sochRequests.length,
//         })
//       } catch (error) {
//         console.error("Error fetching user statistics:", error)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     if (userProfile?.uid) {
//       fetchUserStats()
//     }
//   }, [userProfile])

//   // Show loading state while fetching user data
//   if (loading || !userProfile) {
//     return (
//       <div className="min-h-screen bg-[#FEF6F0] flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C85C7F]"></div>
//       </div>
//     )
//   }

//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen bg-[#FEF6F0]">
//         <DashboardNav />

//         <main className="flex-1 p-6">
//           <div className="flex justify-between items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-[#1D3557]">Welcome back, {userProfile.displayName || "User"}!</h1>
//               <p className="text-[#1D3557]/70">Here's what's happening with your account</p>
//             </div>

//             {/* User Profile Dropdown in top-right corner */}
//             <div className="hidden md:block">
//               <UserProfileDropdown />
//             </div>

//             <Button className="md:hidden bg-[#C85C7F] hover:bg-[#b34e6f] text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-plus mr-2"
//               >
//                 <path d="M5 12h14" />
//                 <path d="M12 5v14" />
//               </svg>
//               Add New
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <Card>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-[#1D3557] text-lg">Stories Shared</CardTitle>
//                 <CardDescription>Your contribution to the community</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {isLoading ? (
//                   <Skeleton className="h-8 w-16" />
//                 ) : (
//                   <div className="flex items-center justify-between">
//                     <span className="text-3xl font-bold text-[#1D3557]">{userStats.storiesCount}</span>
//                     <div className="p-2 bg-[#C85C7F]/10 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="#C85C7F"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-book-open-text"
//                       >
//                         <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//                         <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//                         <path d="M6 8h2" />
//                         <path d="M6 12h2" />
//                         <path d="M16 8h2" />
//                         <path d="M16 12h2" />
//                       </svg>
//                     </div>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-[#1D3557] text-lg">Achievements Posted</CardTitle>
//                 <CardDescription>Recognitions and milestones</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {isLoading ? (
//                   <Skeleton className="h-8 w-16" />
//                 ) : (
//                   <div className="flex items-center justify-between">
//                     <span className="text-3xl font-bold text-[#1D3557]">{userStats.achievementsCount}</span>
//                     <div className="p-2 bg-[#C85C7F]/10 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="#C85C7F"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-trophy"
//                       >
//                         <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
//                         <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
//                         <path d="M4 22h16" />
//                         <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
//                         <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
//                         <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
//                       </svg>
//                     </div>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-[#1D3557] text-lg">SOCH Visions Generated</CardTitle>
//                 <CardDescription>AI-powered future visualizations</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {isLoading ? (
//                   <Skeleton className="h-8 w-16" />
//                 ) : (
//                   <div className="flex items-center justify-between">
//                     <span className="text-3xl font-bold text-[#1D3557]">{userStats.sochCount}</span>
//                     <div className="p-2 bg-[#C85C7F]/10 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="#C85C7F"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-sparkles"
//                       >
//                         <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
//                         <path d="M5 3v4" />
//                         <path d="M19 17v4" />
//                         <path d="M3 5h4" />
//                         <path d="M17 19h4" />
//                       </svg>
//                     </div>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-[#1D3557]">Recent Activities</CardTitle>
//                 <CardDescription>Your latest interactions on the platform</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {isLoading ? (
//                   <div className="space-y-4">
//                     {[1, 2, 3].map((i) => (
//                       <div key={i} className="flex items-start gap-4">
//                         <Skeleton className="h-10 w-10 rounded-full" />
//                         <div className="space-y-2 flex-1">
//                           <Skeleton className="h-4 w-3/4" />
//                           <Skeleton className="h-3 w-1/2" />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     {userStats.sochCount > 0 && (
//                       <div className="flex items-start gap-4">
//                         <div className="p-2 bg-[#C85C7F]/10 rounded-full">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="#C85C7F"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="lucide lucide-sparkles"
//                           >
//                             <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
//                             <path d="M5 3v4" />
//                             <path d="M19 17v4" />
//                             <path d="M3 5h4" />
//                             <path d="M17 19h4" />
//                           </svg>
//                         </div>
//                         <div>
//                           <h3 className="font-medium text-[#1D3557]">Generated a SOCH Vision</h3>
//                           <p className="text-sm text-[#1D3557]/70">You've created {userStats.sochCount} vision(s)</p>
//                           <p className="text-xs text-[#1D3557]/50 mt-1">Recently</p>
//                         </div>
//                       </div>
//                     )}

//                     {userStats.achievementsCount > 0 && (
//                       <div className="flex items-start gap-4">
//                         <div className="p-2 bg-[#C85C7F]/10 rounded-full">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="#C85C7F"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="lucide lucide-trophy"
//                           >
//                             <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
//                             <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
//                             <path d="M4 22h16" />
//                             <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
//                             <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
//                             <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
//                           </svg>
//                         </div>
//                         <div>
//                           <h3 className="font-medium text-[#1D3557]">Posted an Achievement</h3>
//                           <p className="text-sm text-[#1D3557]/70">
//                             You've shared {userStats.achievementsCount} achievement(s)
//                           </p>
//                           <p className="text-xs text-[#1D3557]/50 mt-1">Recently</p>
//                         </div>
//                       </div>
//                     )}

//                     {userStats.storiesCount > 0 && (
//                       <div className="flex items-start gap-4">
//                         <div className="p-2 bg-[#C85C7F]/10 rounded-full">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="#C85C7F"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="lucide lucide-book-open-text"
//                           >
//                             <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//                             <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//                             <path d="M6 8h2" />
//                             <path d="M6 12h2" />
//                             <path d="M16 8h2" />
//                             <path d="M16 12h2" />
//                           </svg>
//                         </div>
//                         <div>
//                           <h3 className="font-medium text-[#1D3557]">Shared a Story</h3>
//                           <p className="text-sm text-[#1D3557]/70">You've shared {userStats.storiesCount} story(ies)</p>
//                           <p className="text-xs text-[#1D3557]/50 mt-1">Recently</p>
//                         </div>
//                       </div>
//                     )}

//                     {userStats.storiesCount === 0 && userStats.achievementsCount === 0 && userStats.sochCount === 0 && (
//                       <div className="text-center py-4">
//                         <p className="text-[#1D3557]/70">No activities yet. Start by sharing a story or achievement!</p>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-[#1D3557]">Recommended Resources</CardTitle>
//                 <CardDescription>Educational content tailored for you</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-4">
//                     <div className="p-2 bg-[#C85C7F]/10 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="#C85C7F"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-graduation-cap"
//                       >
//                         <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//                         <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-[#1D3557]">STEM Education for Girls</h3>
//                       <p className="text-sm text-[#1D3557]/70">Learn about opportunities in science and technology</p>
//                       <Button variant="link" className="p-0 h-auto text-[#C85C7F]">
//                         Watch Video
//                       </Button>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="p-2 bg-[#C85C7F]/10 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="#C85C7F"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-scale"
//                       >
//                         <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
//                         <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
//                         <path d="M7 21h10" />
//                         <path d="M12 3v18" />
//                         <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-[#1D3557]">Rights of the Girl Child</h3>
//                       <p className="text-sm text-[#1D3557]/70">Understanding legal protections and rights</p>
//                       <Button variant="link" className="p-0 h-auto text-[#C85C7F]">
//                         Learn More
//                       </Button>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="p-2 bg-[#C85C7F]/10 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="#C85C7F"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-message-square-text"
//                       >
//                         <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//                         <path d="M13 8H7" />
//                         <path d="M17 12H7" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-[#1D3557]">Financial Literacy</h3>
//                       <p className="text-sm text-[#1D3557]/70">Basic concepts for financial independence</p>
//                       <Button variant="link" className="p-0 h-auto text-[#C85C7F]">
//                         Start Learning
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </main>
//       </div>
//     </SidebarProvider>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardNav } from "@/components/dashboard-nav"
import { useAuth } from "@/contexts/auth-context"
import { achievementService } from "@/lib/services/achievement-service"
import { storyService } from "@/lib/services/story-service"
import { sochService } from "@/lib/services/soch-service"
import { Skeleton } from "@/components/ui/skeleton"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"

export default function Dashboard() {
  const { userProfile, loading } = useAuth()
  const router = useRouter()
  const [userStats, setUserStats] = useState({
    storiesCount: 0,
    achievementsCount: 0,
    sochCount: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !userProfile) {
      router.push("/login")
    }
  }, [loading, userProfile, router])

  // Fetch user statistics from Firebase
  useEffect(() => {
    const fetchUserStats = async () => {
      if (!userProfile?.uid) return

      setIsLoading(true)
      try {
        // Fetch user's stories
        const stories = await storyService.getUserStories(userProfile.uid)

        // Fetch user's achievements
        const achievements = await achievementService.getUserAchievements(userProfile.uid)

        // Fetch user's SOCH visions
        const sochRequests = await sochService.getUserSochRequests(userProfile.uid)

        setUserStats({
          storiesCount: stories.length,
          achievementsCount: achievements.length,
          sochCount: sochRequests.length,
        })
      } catch (error) {
        console.error("Error fetching user statistics:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (userProfile?.uid) {
      fetchUserStats()
    }
  }, [userProfile])

  // Show loading state while fetching user data
  if (loading || !userProfile) {
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

        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1D3557]">Welcome back, {userProfile.displayName || "User"}!</h1>
              <p className="text-[#1D3557]/70">Here's what's happening with your account</p>
            </div>

            {/* User Profile Dropdown in top-right corner */}
            <div className="hidden md:block">
              <UserProfileDropdown />
            </div>

            <Button className="md:hidden bg-[#C85C7F] hover:bg-[#b34e6f] text-white">
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
              Add New
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-[#1D3557] text-lg">Stories Shared</CardTitle>
                <CardDescription>Your contribution to the community</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#1D3557]">{userStats.storiesCount}</span>
                    <div className="p-2 bg-[#C85C7F]/10 rounded-full">
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
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-[#1D3557] text-lg">Achievements Posted</CardTitle>
                <CardDescription>Recognitions and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#1D3557]">{userStats.achievementsCount}</span>
                    <div className="p-2 bg-[#C85C7F]/10 rounded-full">
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
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-[#1D3557] text-lg">SOCH Visions Generated</CardTitle>
                <CardDescription>AI-powered future visualizations</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#1D3557]">{userStats.sochCount}</span>
                    <div className="p-2 bg-[#C85C7F]/10 rounded-full">
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
                        className="lucide lucide-sparkles"
                      >
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                        <path d="M5 3v4" />
                        <path d="M19 17v4" />
                        <path d="M3 5h4" />
                        <path d="M17 19h4" />
                      </svg>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1D3557]">Recent Activities</CardTitle>
                <CardDescription>Your latest interactions on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="space-y-2 flex-1">
                          <Skeleton className="h-4 w-3/4" />
                          <Skeleton className="h-3 w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userStats.sochCount > 0 && (
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#C85C7F]/10 rounded-full">
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
                          <h3 className="font-medium text-[#1D3557]">Generated a SOCH Vision</h3>
                          <p className="text-sm text-[#1D3557]/70">You've created {userStats.sochCount} vision(s)</p>
                          <p className="text-xs text-[#1D3557]/50 mt-1">Recently</p>
                        </div>
                      </div>
                    )}

                    {userStats.achievementsCount > 0 && (
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#C85C7F]/10 rounded-full">
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
                        <div>
                          <h3 className="font-medium text-[#1D3557]">Posted an Achievement</h3>
                          <p className="text-sm text-[#1D3557]/70">
                            You've shared {userStats.achievementsCount} achievement(s)
                          </p>
                          <p className="text-xs text-[#1D3557]/50 mt-1">Recently</p>
                        </div>
                      </div>
                    )}

                    {userStats.storiesCount > 0 && (
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#C85C7F]/10 rounded-full">
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
                        <div>
                          <h3 className="font-medium text-[#1D3557]">Shared a Story</h3>
                          <p className="text-sm text-[#1D3557]/70">You've shared {userStats.storiesCount} story(ies)</p>
                          <p className="text-xs text-[#1D3557]/50 mt-1">Recently</p>
                        </div>
                      </div>
                    )}

                    {userStats.storiesCount === 0 && userStats.achievementsCount === 0 && userStats.sochCount === 0 && (
                      <div className="text-center py-4">
                        <p className="text-[#1D3557]/70">No activities yet. Start by sharing a story or achievement!</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#1D3557]">Recommended Resources</CardTitle>
                <CardDescription>Educational content tailored for you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#C85C7F]/10 rounded-full">
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
                        className="lucide lucide-graduation-cap"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1D3557]">STEM Education for Girls</h3>
                      <p className="text-sm text-[#1D3557]/70">Learn about opportunities in science and technology</p>
                      <Button variant="link" className="p-0 h-auto text-[#C85C7F]">
                        Watch Video
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#C85C7F]/10 rounded-full">
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
                        className="lucide lucide-scale"
                      >
                        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                        <path d="M7 21h10" />
                        <path d="M12 3v18" />
                        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1D3557]">Rights of the Girl Child</h3>
                      <p className="text-sm text-[#1D3557]/70">Understanding legal protections and rights</p>
                      <Button variant="link" className="p-0 h-auto text-[#C85C7F]">
                        Learn More
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#C85C7F]/10 rounded-full">
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
                        className="lucide lucide-message-square-text"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <path d="M13 8H7" />
                        <path d="M17 12H7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1D3557]">Financial Literacy</h3>
                      <p className="text-sm text-[#1D3557]/70">Basic concepts for financial independence</p>
                      <Button variant="link" className="p-0 h-auto text-[#C85C7F]">
                        Start Learning
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

