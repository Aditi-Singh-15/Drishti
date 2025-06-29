"use client"

import type React from "react"

import { useState } from "react"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardNav } from "@/components/dashboard-nav"

export default function LawsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Sample laws data
  const laws = [
    {
      id: "1",
      title: "Protection of Children from Sexual Offences (POCSO) Act, 2012",
      description:
        "Protects children from sexual abuse and exploitation. It defines a child as any person below 18 years of age and provides for stringent punishment for sexual crimes against children.",
      category: "protection",
      keyPoints: [
        "Covers all forms of sexual abuse against children",
        "Establishes Special Courts for speedy trials",
        "Provides for child-friendly procedures during investigation and trial",
        "Mandates reporting of sexual offenses against children",
      ],
    },
    {
      id: "2",
      title: "Right of Children to Free and Compulsory Education Act, 2009",
      description:
        "Ensures free and compulsory education for all children between 6 and 14 years. Schools must reserve 25% of seats for children from disadvantaged backgrounds.",
      category: "education",
      keyPoints: [
        "Free education from ages 6-14",
        "No child can be held back, expelled, or required to pass a board examination until completion of elementary education",
        "Schools must have adequate infrastructure and qualified teachers",
        "Special provisions for children not admitted to school or who have dropped out",
      ],
    },
    {
      id: "3",
      title: "Prohibition of Child Marriage Act, 2006",
      description:
        "Prohibits child marriages and protects victims. The legal age for marriage is 18 for girls and 21 for boys. Child marriages are voidable at the option of the minor party.",
      category: "protection",
      keyPoints: [
        "Child marriages are voidable, not automatically void",
        "Punishes adults who perform, conduct, or direct child marriages",
        "District Magistrates can prevent mass child marriages",
        "Provides maintenance and residence to female contracting party",
      ],
    },
    {
      id: "4",
      title: "Sexual Harassment of Women at Workplace Act, 2013",
      description:
        "Protects women from sexual harassment at the workplace, including both organized and unorganized sectors. Mandates employers to create safe working environments.",
      category: "workplace",
      keyPoints: [
        "Covers all women, regardless of age or employment status",
        "Requires employers to set up Internal Complaints Committees",
        "Defines sexual harassment comprehensively",
        "Provides for confidential and time-bound resolution",
      ],
    },
    {
      id: "5",
      title: "Domestic Violence Act, 2005",
      description:
        "Protects women from domestic violence, including physical, sexual, verbal, emotional, and economic abuse. Provides for immediate and emergency relief to victims.",
      category: "protection",
      keyPoints: [
        "Broad definition of domestic violence",
        "Protection officers to assist victims",
        "Right to reside in shared household",
        "Monetary relief and compensation provisions",
      ],
    },
    {
      id: "6",
      title: "Maternity Benefit (Amendment) Act, 2017",
      description:
        "Provides for paid maternity leave to women employees. The amendment increased the duration of paid maternity leave from 12 weeks to 26 weeks for women with fewer than two children.",
      category: "workplace",
      keyPoints: [
        "26 weeks of paid maternity leave",
        "Work from home options after the leave period",
        "Crèche facilities in establishments with 50+ employees",
        "Adoptive and commissioning mothers also eligible for leave",
      ],
    },
    {
      id: "7",
      title: "Equal Remuneration Act, 1976",
      description:
        "Mandates equal pay for equal work regardless of gender. Prohibits discrimination in recruitment, promotions, and training opportunities based on gender.",
      category: "workplace",
      keyPoints: [
        "Equal pay for equal work",
        "No discrimination during recruitment",
        "Employers cannot reduce wages to comply with the Act",
        "Complaints can be filed with labor inspectors",
      ],
    },
    {
      id: "8",
      title: "National Food Security Act, 2013",
      description:
        "Provides subsidized food grains to approximately two-thirds of India's population. Special provisions for pregnant women, lactating mothers, and children.",
      category: "welfare",
      keyPoints: [
        "Pregnant women and lactating mothers entitled to nutritious meals and maternity benefits",
        "Children aged 6 months to 14 years entitled to nutritious meals",
        "Identification of eligible households by state governments",
        "Grievance redressal mechanism at district level",
      ],
    },
  ]

  // Sample complaint categories
  const complaintCategories = [
    { value: "child-marriage", label: "Child Marriage" },
    { value: "education-denial", label: "Denial of Education" },
    { value: "harassment", label: "Sexual Harassment" },
    { value: "domestic-violence", label: "Domestic Violence" },
    { value: "discrimination", label: "Gender Discrimination" },
    { value: "other", label: "Other Issues" },
  ]

  const handleSubmitComplaint = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission to Firebase
    setTimeout(() => {
      setIsSubmitting(false)

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()

      // Close dialog
      document.getElementById("close-dialog")?.click()

      // Show success message
      alert("Your complaint has been submitted successfully. A representative will contact you soon.")
    }, 2000)
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#FEF6F0]">
        <DashboardNav />

        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1D3557]">Government Laws & Complaint Filing</h1>
              <p className="text-[#1D3557]/70">Know your rights, raise your voice!</p>
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
                    className="lucide lucide-file-plus mr-2"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" x2="12" y1="18" y2="12" />
                    <line x1="9" x2="15" y1="15" y2="15" />
                  </svg>
                  File a Complaint
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="text-[#1D3557]">File a Complaint</DialogTitle>
                  <DialogDescription>
                    Report violations of rights or seek assistance with legal matters.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmitComplaint} className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="category">Complaint Category</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {complaintCategories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief subject of your complaint" required />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide details of the incident or issue..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div>
                    <Label>Is this an emergency?</Label>
                    <RadioGroup defaultValue="no" className="flex gap-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="emergency-yes" />
                        <Label htmlFor="emergency-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="emergency-no" />
                        <Label htmlFor="emergency-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="contact">Contact Number</Label>
                    <Input id="contact" type="tel" placeholder="Your phone number" required />
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Village/Town, District, State" required />
                  </div>

                  <DialogFooter>
                    <Button type="button" variant="outline" id="close-dialog">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Complaint"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Laws</TabsTrigger>
                  <TabsTrigger value="protection">Protection</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="workplace">Workplace</TabsTrigger>
                  <TabsTrigger value="welfare">Welfare</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="space-y-6">
                    {laws.map((law) => (
                      <Card key={law.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs bg-[#C85C7F]/10 text-[#C85C7F] px-2 py-1 rounded-full">
                              {law.category.charAt(0).toUpperCase() + law.category.slice(1)}
                            </span>
                          </div>
                          <CardTitle className="text-[#1D3557]">{law.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-[#1D3557]/80 mb-4">{law.description}</p>
                          <div>
                            <h4 className="font-medium text-[#1D3557] mb-2">Key Points:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {law.keyPoints.map((point, index) => (
                                <li key={index} className="text-[#1D3557]/80">
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-end border-t pt-4">
                          <Button variant="outline" className="text-[#1D3557]">
                            Learn More
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="protection">
                  <div className="space-y-6">
                    {laws
                      .filter((law) => law.category === "protection")
                      .map((law) => (
                        <Card key={law.id} className="hover:shadow-md transition-shadow">
                          <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs bg-[#C85C7F]/10 text-[#C85C7F] px-2 py-1 rounded-full">
                                Protection
                              </span>
                            </div>
                            <CardTitle className="text-[#1D3557]">{law.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-[#1D3557]/80 mb-4">{law.description}</p>
                            <div>
                              <h4 className="font-medium text-[#1D3557] mb-2">Key Points:</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {law.keyPoints.map((point, index) => (
                                  <li key={index} className="text-[#1D3557]/80">
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-end border-t pt-4">
                            <Button variant="outline" className="text-[#1D3557]">
                              Learn More
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="education">
                  <div className="space-y-6">
                    {laws
                      .filter((law) => law.category === "education")
                      .map((law) => (
                        <Card key={law.id} className="hover:shadow-md transition-shadow">
                          <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs bg-[#C85C7F]/10 text-[#C85C7F] px-2 py-1 rounded-full">
                                Education
                              </span>
                            </div>
                            <CardTitle className="text-[#1D3557]">{law.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-[#1D3557]/80 mb-4">{law.description}</p>
                            <div>
                              <h4 className="font-medium text-[#1D3557] mb-2">Key Points:</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {law.keyPoints.map((point, index) => (
                                  <li key={index} className="text-[#1D3557]/80">
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-end border-t pt-4">
                            <Button variant="outline" className="text-[#1D3557]">
                              Learn More
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="workplace">
                  <div className="space-y-6">
                    {laws
                      .filter((law) => law.category === "workplace")
                      .map((law) => (
                        <Card key={law.id} className="hover:shadow-md transition-shadow">
                          <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs bg-[#C85C7F]/10 text-[#C85C7F] px-2 py-1 rounded-full">
                                Workplace
                              </span>
                            </div>
                            <CardTitle className="text-[#1D3557]">{law.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-[#1D3557]/80 mb-4">{law.description}</p>
                            <div>
                              <h4 className="font-medium text-[#1D3557] mb-2">Key Points:</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {law.keyPoints.map((point, index) => (
                                  <li key={index} className="text-[#1D3557]/80">
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-end border-t pt-4">
                            <Button variant="outline" className="text-[#1D3557]">
                              Learn More
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="welfare">
                  <div className="space-y-6">
                    {laws
                      .filter((law) => law.category === "welfare")
                      .map((law) => (
                        <Card key={law.id} className="hover:shadow-md transition-shadow">
                          <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs bg-[#C85C7F]/10 text-[#C85C7F] px-2 py-1 rounded-full">
                                Welfare
                              </span>
                            </div>
                            <CardTitle className="text-[#1D3557]">{law.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-[#1D3557]/80 mb-4">{law.description}</p>
                            <div>
                              <h4 className="font-medium text-[#1D3557] mb-2">Key Points:</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {law.keyPoints.map((point, index) => (
                                  <li key={index} className="text-[#1D3557]/80">
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-end border-t pt-4">
                            <Button variant="outline" className="text-[#1D3557]">
                              Learn More
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1D3557]">Emergency Helplines</CardTitle>
                  <CardDescription>Important contact numbers for immediate assistance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-md bg-[#C85C7F]/5 border border-[#C85C7F]/20">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1D3557]">Women's Helpline</h3>
                      <p className="text-[#C85C7F] font-semibold">1800-112-789</p>
                      <p className="text-xs text-[#1D3557]/70">24/7 national helpline for women in distress</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-md bg-[#C85C7F]/5 border border-[#C85C7F]/20">
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
                        className="lucide lucide-shield-alert"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1D3557]">Child Helpline</h3>
                      <p className="text-[#C85C7F] font-semibold">1098</p>
                      <p className="text-xs text-[#1D3557]/70">
                        Emergency helpline for children in need of care and protection
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-md bg-[#C85C7F]/5 border border-[#C85C7F]/20">
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
                        className="lucide lucide-siren"
                      >
                        <path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z" />
                        <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z" />
                        <path d="M21 12h1" />
                        <path d="M18.5 4.5 18 5" />
                        <path d="M2 12h1" />
                        <path d="M12 2v1" />
                        <path d="M4.929 4.929l.707.707" />
                        <path d="M12 12v6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1D3557]">Police Emergency</h3>
                      <p className="text-[#C85C7F] font-semibold">100</p>
                      <p className="text-xs text-[#1D3557]/70">For immediate police assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-md bg-[#C85C7F]/5 border border-[#C85C7F]/20">
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
                        className="lucide lucide-ambulance"
                      >
                        <path d="M4 9h8" />
                        <path d="M8 9V3h4l4 6v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9Z" />
                        <path d="M9 17h.01" />
                        <path d="M15 17h.01" />
                        <path d="m14 9 4 4" />
                        <path d="m18 9-4 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1D3557]">Medical Emergency</h3>
                      <p className="text-[#C85C7F] font-semibold">108</p>
                      <p className="text-xs text-[#1D3557]/70">For medical emergencies and ambulance services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-[#1D3557]">Legal Aid Resources</CardTitle>
                  <CardDescription>Free and low-cost legal assistance</CardDescription>
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
                      <h3 className="font-medium text-[#1D3557]">National Legal Services Authority</h3>
                      <p className="text-sm text-[#1D3557]/70">
                        Provides free legal services to eligible candidates and organizes Lok Adalats for settlement of
                        disputes.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-[#C85C7F]">
                        Visit Website
                      </Button>
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
                        className="lucide lucide-building"
                      >
                        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                        <path d="M9 22v-4h6v4" />
                        <path d="M8 6h.01" />
                        <path d="M16 6h.01" />
                        <path d="M12 6h.01" />
                        <path d="M12 10h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 10h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 10h.01" />
                        <path d="M8 14h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1D3557]">District Legal Services Authority</h3>
                      <p className="text-sm text-[#1D3557]/70">
                        Provides legal aid at the district level. Contact your local DLSA for assistance with legal
                        matters.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-[#C85C7F]">
                        Find Nearest Office
                      </Button>
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
                        className="lucide lucide-users"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1D3557]">NGOs Providing Legal Aid</h3>
                      <p className="text-sm text-[#1D3557]/70">
                        Several NGOs provide free legal assistance to women and children in need.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-[#C85C7F]">
                        View Directory
                      </Button>
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

