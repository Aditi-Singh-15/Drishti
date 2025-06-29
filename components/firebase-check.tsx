"use client"

import { useEffect, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { app } from "@/lib/firebase"

export function FirebaseCheck() {
  const [isConfigValid, setIsConfigValid] = useState(true)
  const [showDomainWarning, setShowDomainWarning] = useState(false)

  useEffect(() => {
    // Check if Firebase app is initialized
    if (!app) {
      setIsConfigValid(false)
    }

    // Check if environment variables are set
    const requiredEnvVars = [
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    ]

    if (requiredEnvVars.some((v) => !v)) {
      setIsConfigValid(false)
    }

    // Check if we're in a development environment
    if (typeof window !== "undefined" && window.location.hostname === "localhost") {
      // Show a warning about domain authorization
      setShowDomainWarning(true)
    }
  }, [])

  if (!isConfigValid) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertTitle>Firebase Configuration Error</AlertTitle>
        <AlertDescription>
          <p>The Firebase configuration is incomplete or invalid. Please check your environment variables.</p>
          <p className="mt-2">Make sure you have added the following environment variables:</p>
          <ul className="list-disc pl-5 mt-1">
            <li>NEXT_PUBLIC_FIREBASE_API_KEY</li>
            <li>NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN</li>
            <li>NEXT_PUBLIC_FIREBASE_PROJECT_ID</li>
            <li>NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET</li>
            <li>NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID</li>
            <li>NEXT_PUBLIC_FIREBASE_APP_ID</li>
          </ul>
        </AlertDescription>
      </Alert>
    )
  }

  if (showDomainWarning) {
    return (
      <Alert className="mb-4 bg-amber-50 border-amber-200">
        <AlertTitle className="text-amber-800">Firebase Authentication Domain Notice</AlertTitle>
        <AlertDescription className="text-amber-700">
          <p>
            You're running in a development environment. Make sure{" "}
            <code className="bg-amber-100 px-1 rounded">localhost</code> is added to the authorized domains in your
            Firebase Authentication settings.
          </p>
          <p className="mt-2">
            If you encounter authentication errors, go to Firebase Console &gt; Authentication &gt; Settings &gt;
            Authorized domains and add <code className="bg-amber-100 px-1 rounded">localhost</code>.
          </p>
        </AlertDescription>
      </Alert>
    )
  }

  return null
}

