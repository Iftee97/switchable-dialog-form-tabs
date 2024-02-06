"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface FormState {
  name: string
  username: string
  email: string
  password: string
  newPassword: string
}

export default function EmailTab({
  formState,
  setFormState,
  setActiveTab,
}: {
  formState: FormState,
  setFormState: (state: FormState) => void,
  setActiveTab: (tab: "account" | "password" | "email") => void,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Email</CardTitle>
        <CardDescription>
          Change your email here. After saving, you'll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="jondoe@email.com"
            value={formState.email}
            onChange={(e) => setFormState({
              ...formState,
              email: e.target.value
            })}
          />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            setActiveTab("account")
          }}
        >
          Previous
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setActiveTab("password")
          }}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}
