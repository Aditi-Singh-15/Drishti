"use client"

import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface FirestoreIndexAlertProps {
  error: string | null
  onDismiss: () => void
}

export function FirestoreIndexAlert({ error, onDismiss }: FirestoreIndexAlertProps) {
  const [dismissed, setDismissed] = useState(false)

  if (!error || dismissed || !error.includes("index")) return null

  // Extract the index creation URL if present
  const indexUrlMatch = error.match(/https:\/\/console\.firebase\.google\.com[^\s]+/)
  const indexUrl = indexUrlMatch ? indexUrlMatch[0] : null

  const handleDismiss = () => {
    setDismissed(true)
    onDismiss()
  }

  return (
    <Alert variant="warning" className="mb-4">
      <AlertTitle>Firestore Index Required</AlertTitle>
      <AlertDescription className="space-y-2">
        <p>
          This query requires a Firestore index to be created. The application will still work with limited
          functionality, but for optimal performance, please create the required index.
        </p>

        {indexUrl && (
          <div className="mt-2">
            <p className="mb-2">You can create the index by clicking the button below:</p>
            <Button
              variant="outline"
              className="bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100"
              onClick={() => window.open(indexUrl, "_blank")}
            >
              Create Firestore Index
            </Button>
          </div>
        )}

        <div className="flex justify-end mt-2">
          <Button variant="ghost" size="sm" onClick={handleDismiss}>
            Dismiss
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}

