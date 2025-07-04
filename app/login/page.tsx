"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FirebaseCheck } from "@/components/firebase-check"
// Import the FirebaseAuthDomainGuide component
import { FirebaseAuthDomainGuide } from "@/components/firebase-auth-domain-guide"

export default function Login() {
  const router = useRouter()
  const { signInWithEmail, signInWithGoogle, error } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [localError, setLocalError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError(null)
    setIsLoading(true)

    try {
      await signInWithEmail(email, password)
      router.push("/dashboard")
    } catch (err: any) {
      setLocalError(err.message || "Failed to sign in")
    } finally {
      setIsLoading(false)
    }
  }

  // Update the handleGoogleLogin function to provide more specific error messages
  const handleGoogleLogin = async () => {
    setLocalError(null)
    setIsLoading(true)

    try {
      await signInWithGoogle()
      router.push("/dashboard")
    } catch (err: any) {
      if (err.code === "auth/unauthorized-domain") {
        setLocalError(
          "This domain is not authorized for authentication. Please add this domain to your Firebase Authentication settings in the Firebase console.",
        )
      } else {
        setLocalError(err.message || "Failed to sign in with Google")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FEF6F0] flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 m-4">
        <FirebaseCheck />
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-[#C85C7F] text-3xl font-bold">Drishti</h1>
          </Link>
          <p className="text-[#1D3557] mt-2">Sign in to your account to continue</p>
        </div>

        {(error || localError) && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>
              {error?.includes("Firebase configuration") ||
              error?.includes("api-key-not-valid") ||
              localError?.includes("Firebase configuration") ||
              localError?.includes("api-key-not-valid")
                ? "There's an issue with the application configuration. Please contact support."
                : error || localError}
            </AlertDescription>
          </Alert>
        )}

        <FirebaseAuthDomainGuide error={error || localError} />

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-[#C85C7F] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#C85C7F] hover:bg-[#b34e6f] text-white" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300"></span>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Google
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <div className="text-center space-y-4">
              <p className="text-[#1D3557]">Create a new account to get started</p>
              <Link href="/role-selection">
                <Button className="w-full bg-[#C85C7F] hover:bg-[#b34e6f] text-white">Create Account</Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

