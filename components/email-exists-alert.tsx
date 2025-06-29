"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EmailExistsAlertProps {
  email: string
  onUseAnotherEmail: () => void
}

export function EmailExistsAlert({ email, onUseAnotherEmail }: EmailExistsAlertProps) {
  return (
    <Alert className="mb-4 bg-amber-50 border-amber-200">
      <AlertTitle className="text-amber-800">Email Already Registered</AlertTitle>
      <AlertDescription className="text-amber-700">
        <p>
          The email address <strong>{email}</strong> is already registered. You can:
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <Link href="/login">
            <Button variant="outline" size="sm" className="bg-white border-amber-300 text-amber-800 hover:bg-amber-100">
              Sign In Instead
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="text-amber-800 hover:bg-amber-100" onClick={onUseAnotherEmail}>
            Use Different Email
          </Button>
          <Link href="/forgot-password">
            <Button variant="ghost" size="sm" className="text-amber-800 hover:bg-amber-100">
              Reset Password
            </Button>
          </Link>
        </div>
      </AlertDescription>
    </Alert>
  )
}

