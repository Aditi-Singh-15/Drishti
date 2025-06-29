"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface FirebaseAuthDomainGuideProps {
  error: string | null
}

export function FirebaseAuthDomainGuide({ error }: FirebaseAuthDomainGuideProps) {
  if (!error || !error.includes("domain is not authorized")) return null

  return (
    <Alert className="mb-4 bg-amber-50 border-amber-200">
      <AlertTitle className="text-amber-800">Firebase Authentication Domain Error</AlertTitle>
      <AlertDescription className="text-amber-700 space-y-2">
        <p>Your current domain is not authorized in Firebase Authentication settings. To fix this issue:</p>

        <ol className="list-decimal pl-5 space-y-1">
          <li>
            Go to the{" "}
            <a
              href="https://console.firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Firebase Console
            </a>
          </li>
          <li>Select your project</li>
          <li>Go to Authentication &gt; Settings &gt; Authorized domains</li>
          <li>Add your current domain (e.g., localhost, your-app.vercel.app, etc.)</li>
          <li>Save the changes</li>
        </ol>

        <p className="mt-2">
          For local development, make sure <code className="bg-amber-100 px-1 rounded">localhost</code> is in the
          authorized domains list.
        </p>

        <div className="mt-4">
          <Button
            variant="outline"
            className="bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100"
            onClick={() => window.open("https://console.firebase.google.com/", "_blank")}
          >
            Open Firebase Console
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}

