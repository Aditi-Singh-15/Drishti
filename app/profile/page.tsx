"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardNav } from "@/components/dashboard-nav"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ProfilePage() {
  const { userProfile, updateUserProfile, loading, error } = useAuth()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [localError, setLocalError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    displayName: userProfile?.displayName || "",
    gender: userProfile?.gender || "",
    age: userProfile?.age || "",
    contactNumber: userProfile?.contactNumber || "",
    address: userProfile?.address || "",
  })

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // If user is not authenticated, redirect to login
  if (!loading && !userProfile) {
    router.push("/login")
    return null
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

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
    setLocalError(null)
    setIsSubmitting(true)

    try {
      await updateUserProfile(
        {
          displayName: formData.displayName,
          gender: formData.gender,
          age: formData.age,
          contactNumber: formData.contactNumber,
          address: formData.address,
        },
        selectedFile,
      )

      setIsEditing(false)
      setSelectedFile(null)
      setPreviewUrl(null)
    } catch (err: any) {
      setLocalError(err.message || "Failed to update profile")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditClick = () => {
    // Initialize form data with current user profile
    if (userProfile) {
      setFormData({
        displayName: userProfile.displayName || "",
        gender: userProfile.gender || "",
        age: userProfile.age || "",
        contactNumber: userProfile.contactNumber || "",
        address: userProfile.address || "",
      })
    }
    setIsEditing(true)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setSelectedFile(null)
    setPreviewUrl(null)
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#FEF6F0]">
        <DashboardNav />

        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1D3557]">My Profile</h1>
            <p className="text-[#1D3557]/70">View and manage your profile information</p>
          </div>

          {(error || localError) && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error || localError}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={userProfile?.photoURL || ""} alt={userProfile?.displayName || "User"} />
                      <AvatarFallback className="text-2xl bg-[#C85C7F] text-white">
                        {userProfile?.displayName?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-[#1D3557]">{userProfile?.displayName}</CardTitle>
                  <CardDescription>
                    {userProfile?.role === "parent" ? "Parent / Guardian" : "Educator / Leader"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-[#1D3557]/70">{userProfile?.email}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  {!isEditing && (
                    <Button className="bg-[#C85C7F] hover:bg-[#b34e6f] text-white" onClick={handleEditClick}>
                      Edit Profile
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1D3557]">
                    {isEditing ? "Edit Profile Information" : "Profile Information"}
                  </CardTitle>
                  <CardDescription>
                    {isEditing ? "Update your personal details below" : "Your personal details and preferences"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="displayName">Full Name</Label>
                        <Input
                          id="displayName"
                          name="displayName"
                          value={formData.displayName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div>
                        <Label>Gender</Label>
                        <RadioGroup
                          value={formData.gender}
                          onValueChange={(value) => handleRadioChange("gender", value)}
                          className="flex gap-4 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female">Female</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male">Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label htmlFor="age">Age</Label>
                        <Select value={formData.age} onValueChange={(value) => handleSelectChange("age", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your age" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 80 }, (_, i) => i + 1).map((age) => (
                              <SelectItem key={age} value={age.toString()}>
                                {age}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="contactNumber">Contact Number</Label>
                        <Input
                          id="contactNumber"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          placeholder="Enter your contact number"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your address"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="profilePhoto">Profile Photo</Label>
                        <div className="mt-2 flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                              Choose File
                            </Button>
                            <span className="text-sm text-gray-500">
                              {selectedFile ? selectedFile.name : "No file chosen"}
                            </span>
                            <input
                              ref={fileInputRef}
                              id="profilePhoto"
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </div>

                          {previewUrl && (
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border border-gray-200">
                              <img
                                src={previewUrl || "/placeholder.svg"}
                                alt="Preview"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button type="button" variant="outline" onClick={handleCancelEdit} className="flex-1">
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Saving..." : "Save Changes"}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-[#1D3557]/70">Full Name</h3>
                          <p className="text-[#1D3557]">{userProfile?.displayName || "Not provided"}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-[#1D3557]/70">Email</h3>
                          <p className="text-[#1D3557]">{userProfile?.email || "Not provided"}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-[#1D3557]/70">Gender</h3>
                          <p className="text-[#1D3557]">
                            {userProfile?.gender
                              ? userProfile.gender.charAt(0).toUpperCase() + userProfile.gender.slice(1)
                              : "Not provided"}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-[#1D3557]/70">Age</h3>
                          <p className="text-[#1D3557]">{userProfile?.age || "Not provided"}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-[#1D3557]/70">Contact Number</h3>
                          <p className="text-[#1D3557]">{userProfile?.contactNumber || "Not provided"}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-[#1D3557]/70">Role</h3>
                          <p className="text-[#1D3557]">
                            {userProfile?.role === "parent"
                              ? "Parent / Guardian"
                              : userProfile?.role === "educator"
                                ? "Educator / Leader"
                                : userProfile?.role || "Not provided"}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-[#1D3557]/70">Address</h3>
                        <p className="text-[#1D3557]">{userProfile?.address || "Not provided"}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

