"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { EmailExistsAlert } from "@/components/email-exists-alert"

export default function ProfileSetup() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role") || "parent-child"
  const { signUpWithEmail, error } = useAuth()

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  })

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [localError, setLocalError] = useState<string | null>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError(null)

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setLocalError("Passwords do not match")
      return
    }

    setIsSubmitting(true)

    try {
      // Sign up user with Firebase
      await signUpWithEmail(formData.email, formData.password, {
        displayName: formData.fullName,
        gender: formData.gender,
        age: formData.age,
        contactNumber: formData.contactNumber,
        address: formData.address,
        role: role === "parent-child" ? "parent" : "educator",
      })

      // Redirect to dashboard on success
      router.push("/dashboard")
    } catch (err: any) {
      // Handle specific error cases
      if (err.code === "auth/email-already-in-use") {
        setLocalError("This email address is already registered. Please sign in instead.")
      } else {
        setLocalError(err.message || "Failed to create account")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const roleTitle = role === "parent-child" ? "Parent / Child" : "Educator / Leader"

  // Check if the error is about email already in use
  const isEmailInUseError = error?.includes("already in use") || localError?.includes("already registered")

  const handleUseAnotherEmail = () => {
    setFormData((prev) => ({ ...prev, email: "" }))
    setLocalError(null)
  }

  return (
    <div className="min-h-screen bg-[#FEF6F0] flex items-center justify-center py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 m-4">
        <Link href="/role-selection" className="text-[#1D3557] hover:text-[#C85C7F] flex items-center mb-6">
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
            className="mr-2"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to role selection
        </Link>

        <h1 className="text-[#1D3557] text-2xl font-bold text-center mb-2">Profile Setup</h1>
        <p className="text-[#1D3557] text-center mb-6">Setting up your profile as {roleTitle}</p>

        {isEmailInUseError ? (
          <EmailExistsAlert email={formData.email} onUseAnotherEmail={handleUseAnotherEmail} />
        ) : error || localError ? (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error || localError}</AlertDescription>
          </Alert>
        ) : null}

        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= stepNumber ? "bg-[#C85C7F] text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {stepNumber}
                </div>
                <span className="text-xs mt-1 text-[#1D3557]">
                  {stepNumber === 1 ? "Personal" : stepNumber === 2 ? "Contact" : "Security"}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 h-1 mt-4 rounded-full">
            <div
              className="bg-[#C85C7F] h-1 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
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

              <Button
                type="button"
                onClick={nextStep}
                className="w-full bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                disabled={!formData.fullName || !formData.gender || !formData.age}
              >
                Next Step
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
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
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
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

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="w-1/2 border-[#1D3557] text-[#1D3557]"
                >
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  className="w-1/2 bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                  disabled={!formData.contactNumber || !formData.email || !formData.address}
                >
                  Next Step
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="w-1/2 border-[#1D3557] text-[#1D3557]"
                >
                  Previous
                </Button>
                <Button
                  type="submit"
                  className="w-1/2 bg-[#C85C7F] hover:bg-[#b34e6f] text-white"
                  disabled={isSubmitting || !formData.password || !formData.confirmPassword}
                >
                  {isSubmitting ? "Creating Account..." : "Complete Setup"}
                </Button>
              </div>
            </div>
          )}
        </form>

        <div className="mt-6 text-center text-sm text-[#1D3557]/70">
          Already have an account?{" "}
          <Link href="/login" className="text-[#C85C7F] hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

