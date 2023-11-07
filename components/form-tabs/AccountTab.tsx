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

// interface AccountTabProps {
//   formState: FormState
//   setFormState: (state: FormState) => void
//   setActiveTab: (tab: string) => void
// }

export default function AccountTab({
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
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formState.name}
            onChange={(e) => setFormState({
              ...formState,
              name: e.target.value
            })}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={formState.username}
            onChange={(e) => setFormState({
              ...formState,
              username: e.target.value
            })}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button
          onClick={() => {
            setActiveTab("email")
          }}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}
