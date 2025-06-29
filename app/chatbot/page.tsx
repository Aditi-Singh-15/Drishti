// "use client"

// import type React from "react"

// import { useState, useRef, useEffect } from "react"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { DashboardNav } from "@/components/dashboard-nav"

// type Message = {
//   id: string
//   content: string
//   sender: "user" | "bot"
//   timestamp: Date
// }

// export default function ChatbotPage() {
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       content: "Hello! I'm your AI Business & Financial Mentor. How can I help you today?",
//       sender: "bot",
//       timestamp: new Date(),
//     },
//   ])
//   const [inputMessage, setInputMessage] = useState("")
//   const [isTyping, setIsTyping] = useState(false)
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   // Sample suggested topics
//   const suggestedTopics = [
//     {
//       id: "1",
//       title: "Financial Literacy",
//       description: "Learn about saving, budgeting, and basic financial concepts",
//       icon: "wallet",
//     },
//     {
//       id: "2",
//       title: "Starting a Business",
//       description: "Guidance on starting a small business in rural areas",
//       icon: "store",
//     },
//     {
//       id: "3",
//       title: "Government Schemes",
//       description: "Information about government programs for women entrepreneurs",
//       icon: "landmark",
//     },
//     {
//       id: "4",
//       title: "Digital Skills",
//       description: "Essential digital skills for the modern workplace",
//       icon: "laptop",
//     },
//   ]

//   // Sample chat history
//   const chatHistory = [
//     {
//       id: "1",
//       title: "Starting a small handicraft business",
//       date: "March 18, 2025",
//       preview: "How can I start a small handicraft business from my village?",
//     },
//     {
//       id: "2",
//       title: "Saving for education",
//       date: "March 15, 2025",
//       preview: "What's the best way to save money for my daughter's education?",
//     },
//     {
//       id: "3",
//       title: "Government loans for women",
//       date: "March 10, 2025",
//       preview: "Are there any special loan schemes for rural women entrepreneurs?",
//     },
//   ]

//   useEffect(() => {
//     scrollToBottom()
//   }, [messages])

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }

//   const handleSendMessage = () => {
//     if (!inputMessage.trim()) return

//     // Add user message
//     const userMessage: Message = {
//       id: Date.now().toString(),
//       content: inputMessage,
//       sender: "user",
//       timestamp: new Date(),
//     }

//     setMessages((prev) => [...prev, userMessage])
//     setInputMessage("")
//     setIsTyping(true)

//     // Simulate bot response after a delay
//     setTimeout(() => {
//       const botResponses = {
//         "financial literacy":
//           "Financial literacy is about understanding how money works. Here are some key concepts to start with:\n\n1. Budgeting: Track your income and expenses\n2. Saving: Set aside money regularly\n3. Investing: Make your money grow\n4. Debt management: Handle loans responsibly\n\nWould you like to learn more about any of these topics?",
//         business:
//           "Starting a small business in a rural area can be rewarding! Here are some steps to get started:\n\n1. Identify a need in your community\n2. Start with minimal investment\n3. Leverage local resources and skills\n4. Build a network of supporters\n5. Look for government schemes that support women entrepreneurs\n\nWhat kind of business are you interested in starting?",
//         "government schemes":
//           "There are several government schemes in India designed to support rural women entrepreneurs:\n\n1. Mudra Loan Scheme: Provides loans up to ₹10 lakhs\n2. Stree Shakti Package: Special concessions for women entrepreneurs\n3. Mahila Udyam Nidhi Scheme: Offers loans for small-scale businesses\n4. Trade Related Entrepreneurship Assistance (TREAD): Provides training and counseling\n\nWould you like more details about any of these schemes?",
//         education:
//           "Investing in education is one of the best decisions you can make. Here are some ways to finance education:\n\n1. Start an education savings fund early\n2. Look for scholarships and grants\n3. Consider skill-based courses with good employment prospects\n4. Explore government schemes for educational loans\n\nWhat specific educational goal are you saving for?",
//       }

//       let botResponse =
//         "I'm here to help with your business and financial questions. Could you provide more details about what you'd like to know?"

//       // Check if the message contains any keywords
//       const lowercaseMessage = inputMessage.toLowerCase()
//       if (
//         lowercaseMessage.includes("financial") ||
//         lowercaseMessage.includes("money") ||
//         lowercaseMessage.includes("saving")
//       ) {
//         botResponse = botResponses["financial literacy"]
//       } else if (
//         lowercaseMessage.includes("business") ||
//         lowercaseMessage.includes("start") ||
//         lowercaseMessage.includes("entrepreneur")
//       ) {
//         botResponse = botResponses["business"]
//       } else if (
//         lowercaseMessage.includes("government") ||
//         lowercaseMessage.includes("scheme") ||
//         lowercaseMessage.includes("loan")
//       ) {
//         botResponse = botResponses["government schemes"]
//       } else if (
//         lowercaseMessage.includes("education") ||
//         lowercaseMessage.includes("school") ||
//         lowercaseMessage.includes("college")
//       ) {
//         botResponse = botResponses["education"]
//       }

//       const newBotMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         content: botResponse,
//         sender: "bot",
//         timestamp: new Date(),
//       }

//       setMessages((prev) => [...prev, newBotMessage])
//       setIsTyping(false)
//     }, 1500)
//   }

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault()
//       handleSendMessage()
//     }
//   }

//   const handleTopicClick = (topic: string) => {
//     setInputMessage(topic)
//   }

//   const formatTime = (date: Date) => {
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
//   }

//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen bg-[#FEF6F0]">
//         <DashboardNav />

//         <main className="flex-1 p-6">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-[#1D3557]">AI Chatbot – Business & Financial Mentor</h1>
//             <p className="text-[#1D3557]/70">Smart guidance for financial independence!</p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-2">
//               <Card className="h-[calc(100vh-12rem)]">
//                 <CardHeader className="border-b pb-3">
//                   <div className="flex items-center gap-3">
//                     <Avatar>
//                       <AvatarFallback className="bg-[#C85C7F] text-white">AI</AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <CardTitle className="text-[#1D3557]">Financial Mentor</CardTitle>
//                       <CardDescription>Powered by Google Gemini</CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="p-0">
//                   <div className="h-[calc(100vh-20rem)] overflow-y-auto p-4">
//                     {messages.map((message) => (
//                       <div
//                         key={message.id}
//                         className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
//                       >
//                         <div
//                           className={`max-w-[80%] rounded-lg p-3 ${
//                             message.sender === "user" ? "bg-[#C85C7F] text-white" : "bg-gray-100 text-[#1D3557]"
//                           }`}
//                         >
//                           <div className="whitespace-pre-line">{message.content}</div>
//                           <div
//                             className={`text-xs mt-1 ${
//                               message.sender === "user" ? "text-white/70" : "text-[#1D3557]/50"
//                             }`}
//                           >
//                             {formatTime(message.timestamp)}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                     {isTyping && (
//                       <div className="mb-4 flex justify-start">
//                         <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-[#1D3557]">
//                           <div className="flex gap-1">
//                             <div
//                               className="w-2 h-2 rounded-full bg-[#1D3557]/40 animate-bounce"
//                               style={{ animationDelay: "0ms" }}
//                             ></div>
//                             <div
//                               className="w-2 h-2 rounded-full bg-[#1D3557]/40 animate-bounce"
//                               style={{ animationDelay: "150ms" }}
//                             ></div>
//                             <div
//                               className="w-2 h-2 rounded-full bg-[#1D3557]/40 animate-bounce"
//                               style={{ animationDelay: "300ms" }}
//                             ></div>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                     <div ref={messagesEndRef} />
//                   </div>
//                 </CardContent>
//                 <CardFooter className="border-t p-3">
//                   <div className="flex w-full gap-2">
//                     <Input
//                       placeholder="Type your message..."
//                       value={inputMessage}
//                       onChange={(e) => setInputMessage(e.target.value)}
//                       onKeyDown={handleKeyDown}
//                       className="flex-grow"
//                     />
//                     <Button
//                       className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
//                       onClick={handleSendMessage}
//                       disabled={!inputMessage.trim() || isTyping}
//                     >
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
//                         className="lucide lucide-send"
//                       >
//                         <path d="m22 2-7 20-4-9-9-4Z" />
//                         <path d="M22 2 11 13" />
//                       </svg>
//                     </Button>
//                   </div>
//                 </CardFooter>
//               </Card>
//             </div>

//             <div>
//               <Tabs defaultValue="topics" className="w-full">
//                 <TabsList className="w-full">
//                   <TabsTrigger value="topics" className="flex-1">
//                     Suggested Topics
//                   </TabsTrigger>
//                   <TabsTrigger value="history" className="flex-1">
//                     Chat History
//                   </TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="topics">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-[#1D3557] text-lg">What would you like to learn about?</CardTitle>
//                       <CardDescription>Click on a topic to start a conversation</CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       {suggestedTopics.map((topic) => (
//                         <div
//                           key={topic.id}
//                           className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#C85C7F] hover:bg-[#C85C7F]/5 cursor-pointer transition-colors"
//                           onClick={() => handleTopicClick(`Tell me about ${topic.title.toLowerCase()}`)}
//                         >
//                           <div className="bg-[#C85C7F]/10 p-2 rounded-full">
//                             {topic.icon === "wallet" && (
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="#C85C7F"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="lucide lucide-wallet"
//                               >
//                                 <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
//                                 <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
//                                 <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
//                               </svg>
//                             )}
//                             {topic.icon === "store" && (
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="#C85C7F"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="lucide lucide-store"
//                               >
//                                 <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
//                                 <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//                                 <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
//                                 <path d="M2 7h20" />
//                                 <path d="M22 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0" />
//                                 <path d="M18 12v0a2 2 0 0 1-2-2v0" />
//                                 <path d="M14 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0" />
//                                 <path d="M10 12v0a2 2 0 0 1-2-2v0" />
//                                 <path d="M6 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0" />
//                               </svg>
//                             )}
//                             {topic.icon === "landmark" && (
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="#C85C7F"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="lucide lucide-landmark"
//                               >
//                                 <path d="M3 22h18" />
//                                 <path d="M6 18h12" />
//                                 <path d="M4 10v8" />
//                                 <path d="M20 10v8" />
//                                 <path d="M12 2v8" />
//                                 <path d="m2 10 10-8 10 8" />
//                               </svg>
//                             )}
//                             {topic.icon === "laptop" && (
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="#C85C7F"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="lucide lucide-laptop"
//                               >
//                                 <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
//                               </svg>
//                             )}
//                           </div>
//                           <div>
//                             <h3 className="font-medium text-[#1D3557]">{topic.title}</h3>
//                             <p className="text-sm text-[#1D3557]/70">{topic.description}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </CardContent>
//                   </Card>

//                   <Card className="mt-6">
//                     <CardHeader>
//                       <CardTitle className="text-[#1D3557] text-lg">How can the AI mentor help?</CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="flex items-start gap-3">
//                         <div className="bg-[#C85C7F]/10 p-2 rounded-full">
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
//                             className="lucide lucide-lightbulb"
//                           >
//                             <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
//                             <path d="M9 18h6" />
//                             <path d="M10 22h4" />
//                           </svg>
//                         </div>
//                         <div>
//                           <h3 className="font-medium text-[#1D3557]">Financial Guidance</h3>
//                           <p className="text-sm text-[#1D3557]/70">
//                             Get advice on saving, budgeting, and managing finances effectively.
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start gap-3">
//                         <div className="bg-[#C85C7F]/10 p-2 rounded-full">
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
//                             className="lucide lucide-briefcase"
//                           >
//                             <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//                             <rect width="20" height="14" x="2" y="6" rx="2" />
//                           </svg>
//                         </div>
//                         <div>
//                           <h3 className="font-medium text-[#1D3557]">Business Planning</h3>
//                           <p className="text-sm text-[#1D3557]/70">
//                             Learn how to start and grow a small business in your community.
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start gap-3">
//                         <div className="bg-[#C85C7F]/10 p-2 rounded-full">
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
//                             className="lucide lucide-file-text"
//                           >
//                             <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
//                             <polyline points="14 2 14 8 20 8" />
//                             <line x1="16" x2="8" y1="13" y2="13" />
//                             <line x1="16" x2="8" y1="17" y2="17" />
//                             <line x1="10" x2="8" y1="9" y2="9" />
//                           </svg>
//                         </div>
//                         <div>
//                           <h3 className="font-medium text-[#1D3557]">Government Schemes</h3>
//                           <p className="text-sm text-[#1D3557]/70">
//                             Discover government programs and schemes designed for rural women.
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </TabsContent>

//                 <TabsContent value="history">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-[#1D3557] text-lg">Previous Conversations</CardTitle>
//                       <CardDescription>Continue where you left off</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       {chatHistory.length > 0 ? (
//                         <div className="space-y-3">
//                           {chatHistory.map((chat) => (
//                             <div
//                               key={chat.id}
//                               className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#C85C7F] hover:bg-[#C85C7F]/5 cursor-pointer transition-colors"
//                             >
//                               <div className="bg-[#C85C7F]/10 p-2 rounded-full">
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   width="20"
//                                   height="20"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   stroke="#C85C7F"
//                                   strokeWidth="2"
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   className="lucide lucide-message-square"
//                                 >
//                                   <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//                                 </svg>
//                               </div>
//                               <div className="flex-grow">
//                                 <h3 className="font-medium text-[#1D3557]">{chat.title}</h3>
//                                 <p className="text-sm text-[#1D3557]/70 line-clamp-1">{chat.preview}</p>
//                                 <p className="text-xs text-[#1D3557]/50 mt-1">{chat.date}</p>
//                               </div>
//                               <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   width="16"
//                                   height="16"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   strokeWidth="2"
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   className="lucide lucide-trash-2"
//                                 >
//                                   <path d="M3 6h18" />
//                                   <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//                                   <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//                                   <line x1="10" x2="10" y1="11" y2="17" />
//                                   <line x1="14" x2="14" y1="11" y2="17" />
//                                 </svg>
//                               </Button>
//                             </div>
//                           ))}
//                         </div>
//                       ) : (
//                         <div className="text-center py-6">
//                           <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C85C7F]/10 mb-3">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="#C85C7F"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               className="lucide lucide-history"
//                             >
//                               <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
//                               <path d="M3 3v5h5" />
//                               <path d="M12 7v5l4 2" />
//                             </svg>
//                           </div>
//                           <h3 className="font-medium text-[#1D3557] mb-1">No Chat History</h3>
//                           <p className="text-sm text-[#1D3557]/70">Your conversations will appear here</p>
//                         </div>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </TabsContent>
//               </Tabs>
//             </div>
//           </div>
//         </main>
//       </div>
//     </SidebarProvider>
//   )
// }

"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardNav } from "@/components/dashboard-nav"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatbotPage() {
  const { userProfile, loading } = useAuth()
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! I'm here to guide and support you with any questions related to education, entrepreneurship, rights, and opportunities for girls. Let's grow together!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [apiKey, setApiKey] = useState("")
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !userProfile) {
      router.push("/login")
    }
  }, [loading, userProfile, router])

  // Check for Gemini API key in localStorage
  useEffect(() => {
    const storedApiKey = localStorage.getItem("geminiApiKey")
    if (storedApiKey) {
      setApiKey(storedApiKey)
    } else {
      setShowApiKeyInput(true)
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      setError("Please enter a valid API key")
      return
    }

    localStorage.setItem("geminiApiKey", apiKey)
    setShowApiKeyInput(false)
    setError(null)
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    if (!apiKey) {
      setShowApiKeyInput(true)
      setError("Gemini API key is required")
      return
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)
    setError(null)

    try {
      // Call our API route to get response from Gemini
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage,
          apiKey,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response")
      }

      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (err: any) {
      console.error("Error sending message:", err)
      setError(err.message || "Failed to get response")

      // Add error message from bot
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an error while processing your request. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleTopicClick = (topic: string) => {
    setInputMessage(topic)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // Sample suggested topics
  const suggestedTopics = [
    {
      id: "1",
      title: "Financial Literacy",
      description: "Learn about saving, budgeting, and basic financial concepts",
      icon: "wallet",
    },
    {
      id: "2",
      title: "Starting a Business",
      description: "Guidance on starting a small business in rural areas",
      icon: "store",
    },
    {
      id: "3",
      title: "Government Schemes",
      description: "Information about government programs for women entrepreneurs",
      icon: "landmark",
    },
    {
      id: "4",
      title: "Digital Skills",
      description: "Essential digital skills for the modern workplace",
      icon: "laptop",
    },
  ]

  // Sample chat history
  const chatHistory = [
    {
      id: "1",
      title: "Starting a small handicraft business",
      date: "March 18, 2025",
      preview: "How can I start a small handicraft business from my village?",
    },
    {
      id: "2",
      title: "Saving for education",
      date: "March 15, 2025",
      preview: "What's the best way to save money for my daughter's education?",
    },
    {
      id: "3",
      title: "Government loans for women",
      date: "March 10, 2025",
      preview: "Are there any special loan schemes for rural women entrepreneurs?",
    },
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
              <h1 className="text-3xl font-bold text-[#1D3557]">EKLAVYA – Business & Financial Mentor</h1>
              <p className="text-[#1D3557]/70">Smart guidance for financial independence!</p>
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
                  To use the AI chatbot, please provide your Google Gemini API key. You can get one for free at{" "}
                  <a
                    href="https://ai.google.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C85C7F] underline"
                  >
                    Google AI Studio
                  </a>
                  . We use the Gemini 1.5 Flash model for our AI chatbot.
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="h-[calc(100vh-12rem)]">
                <CardHeader className="border-b pb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-[#C85C7F] text-white">AI</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-[#1D3557]">Financial Mentor</CardTitle>
                      <CardDescription>Powered by Google Gemini 1.5</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[calc(100vh-20rem)] overflow-y-auto p-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === "user" ? "bg-[#C85C7F] text-white" : "bg-gray-100 text-[#1D3557]"
                          }`}
                        >
                          <div className="whitespace-pre-line">{message.content}</div>
                          <div
                            className={`text-xs mt-1 ${
                              message.sender === "user" ? "text-white/70" : "text-[#1D3557]/50"
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="mb-4 flex justify-start">
                        <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-[#1D3557]">
                          <div className="flex gap-1">
                            <div
                              className="w-2 h-2 rounded-full bg-[#1D3557]/40 animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-[#1D3557]/40 animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-[#1D3557]/40 animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </CardContent>
                <CardFooter className="border-t p-3">
                  <div className="flex w-full gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-grow"
                      disabled={showApiKeyInput}
                    />
                    <Button
                      className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isTyping || showApiKeyInput}
                    >
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
                        className="lucide lucide-send"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Tabs defaultValue="topics" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="topics" className="flex-1">
                    Suggested Topics
                  </TabsTrigger>
                  <TabsTrigger value="history" className="flex-1">
                    Chat History
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="topics">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1D3557] text-lg">What would you like to learn about?</CardTitle>
                      <CardDescription>Click on a topic to start a conversation</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {suggestedTopics.map((topic) => (
                        <div
                          key={topic.id}
                          className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#C85C7F] hover:bg-[#C85C7F]/5 cursor-pointer transition-colors"
                          onClick={() => handleTopicClick(`Tell me about ${topic.title.toLowerCase()}`)}
                        >
                          <div className="bg-[#C85C7F]/10 p-2 rounded-full">
                            {topic.icon === "wallet" && (
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
                                className="lucide lucide-wallet"
                              >
                                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                              </svg>
                            )}
                            {topic.icon === "store" && (
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
                                className="lucide lucide-store"
                              >
                                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                                <path d="M2 7h20" />
                                <path d="M22 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0" />
                                <path d="M18 12v0a2 2 0 0 1-2-2v0" />
                                <path d="M14 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0" />
                                <path d="M10 12v0a2 2 0 0 1-2-2v0" />
                                <path d="M6 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0" />
                              </svg>
                            )}
                            {topic.icon === "landmark" && (
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
                                className="lucide lucide-landmark"
                              >
                                <path d="M3 22h18" />
                                <path d="M6 18h12" />
                                <path d="M4 10v8" />
                                <path d="M20 10v8" />
                                <path d="M12 2v8" />
                                <path d="m2 10 10-8 10 8" />
                              </svg>
                            )}
                            {topic.icon === "laptop" && (
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
                                className="lucide lucide-laptop"
                              >
                                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium text-[#1D3557]">{topic.title}</h3>
                            <p className="text-sm text-[#1D3557]/70">{topic.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-[#1D3557] text-lg">How can the AI mentor help?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
                          <h3 className="font-medium text-[#1D3557]">Financial Guidance</h3>
                          <p className="text-sm text-[#1D3557]/70">
                            Get advice on saving, budgeting, and managing finances effectively.
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
                            className="lucide lucide-briefcase"
                          >
                            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            <rect width="20" height="14" x="2" y="6" rx="2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-[#1D3557]">Business Planning</h3>
                          <p className="text-sm text-[#1D3557]/70">
                            Learn how to start and grow a small business in your community.
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
                            className="lucide lucide-file-text"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" x2="8" y1="13" y2="13" />
                            <line x1="16" x2="8" y1="17" y2="17" />
                            <line x1="10" x2="8" y1="9" y2="9" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-[#1D3557]">Government Schemes</h3>
                          <p className="text-sm text-[#1D3557]/70">
                            Discover government programs and schemes designed for rural women.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="history">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#1D3557] text-lg">Previous Conversations</CardTitle>
                      <CardDescription>Continue where you left off</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {chatHistory.length > 0 ? (
                        <div className="space-y-3">
                          {chatHistory.map((chat) => (
                            <div
                              key={chat.id}
                              className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#C85C7F] hover:bg-[#C85C7F]/5 cursor-pointer transition-colors"
                            >
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
                                  className="lucide lucide-message-square"
                                >
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                              </div>
                              <div className="flex-grow">
                                <h3 className="font-medium text-[#1D3557]">{chat.title}</h3>
                                <p className="text-sm text-[#1D3557]/70 line-clamp-1">{chat.preview}</p>
                                <p className="text-xs text-[#1D3557]/50 mt-1">{chat.date}</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
                                  className="lucide lucide-trash-2"
                                >
                                  <path d="M3 6h18" />
                                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                  <line x1="10" x2="10" y1="11" y2="17" />
                                  <line x1="14" x2="14" y1="11" y2="17" />
                                </svg>
                              </Button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C85C7F]/10 mb-3">
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
                              className="lucide lucide-history"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                              <path d="M12 7v5l4 2" />
                            </svg>
                          </div>
                          <h3 className="font-medium text-[#1D3557] mb-1">No Chat History</h3>
                          <p className="text-sm text-[#1D3557]/70">Your conversations will appear here</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

