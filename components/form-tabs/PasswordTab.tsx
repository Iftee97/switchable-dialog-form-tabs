"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { DialogTrigger } from "@/components/ui/dialog"
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

export default function PasswordTab({
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
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password here. After saving, you'll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="current">Current password</Label>
          <Input
            id="current"
            type="password"
            placeholder="super secret"
            value={formState.password}
            onChange={(e) => setFormState({
              ...formState,
              password: e.target.value
            })}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="new">New password</Label>
          <Input
            id="new"
            type="password"
            placeholder="super secret"
            value={formState.newPassword}
            onChange={(e) => setFormState({
              ...formState,
              newPassword: e.target.value
            })}
          />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            setActiveTab("email")
          }}
        >
          Previous
        </Button>
        <DialogTrigger asChild>
          <Button type="submit" className="bg-green-400 hover:bg-green-500">
            Save changes
          </Button>
        </DialogTrigger>
      </CardFooter>
    </Card>
  )
}
