"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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

import AccountTab from "./form-tabs/AccountTab"
import EmailTab from "./form-tabs/EmailTab"
import PasswordTab from "./form-tabs/PasswordTab"

export default function Modal() {
  const [activeTab, setActiveTab] = useState<"account" | "password" | "email">("account")
  const [formState, setFormState] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    newPassword: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formState)
    setFormSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <Tabs
              value={activeTab}
              onValueChange={(newTab: string) => {
                if (newTab === "account" || newTab === "password" || newTab === "email") {
                  setActiveTab(newTab as "account" | "password" | "email");
                }
              }}
            >
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                {/* <Card>
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
                    <Label htmlFor="username">
                      Username
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      value={formState.username}
                      onChange={(e) => setFormState({
                        ...formState,
                        username: e.target.value
                      })}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => {
                      setActiveTab("email")
                    }}
                  >
                    Next
                  </Button>
                </CardFooter>
              </Card> */}
                <AccountTab
                  formState={formState}
                  setFormState={setFormState}
                  setActiveTab={setActiveTab}
                />
              </TabsContent>
              <TabsContent value="email">
                {/* <Card>
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
                      value={formState.email}
                      onChange={(e) => setFormState({
                        ...formState,
                        email: e.target.value
                      })}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-4">
                  <Button
                    onClick={() => {
                      setActiveTab("account")
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => {
                      setActiveTab("password")
                    }}
                  >
                    Next
                  </Button>
                </CardFooter>
              </Card> */}
                <EmailTab
                  formState={formState}
                  setFormState={setFormState}
                  setActiveTab={setActiveTab}
                />
              </TabsContent>
              <TabsContent value="password">
                {/* <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current-password">
                      Current password
                    </Label>
                    <Input
                      type="password"
                      id="current-password"
                      value={formState.password}
                      onChange={(e) => setFormState({
                        ...formState,
                        password: e.target.value
                      })}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new-password">
                      New password
                    </Label>
                    <Input
                      id="new-password"
                      type="password"
                      value={formState.newPassword}
                      onChange={(e) => setFormState({
                        ...formState,
                        newPassword: e.target.value
                      })}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-4">
                  <Button
                    onClick={() => {
                      setActiveTab("email")
                    }}
                  >
                    Previous
                  </Button>
                  <DialogTrigger asChild>
                    <Button type="submit">
                      Save changes
                    </Button>
                  </DialogTrigger>
                </CardFooter>
              </Card> */}
                <PasswordTab
                  formState={formState}
                  setFormState={setFormState}
                  setActiveTab={setActiveTab}
                />
              </TabsContent>
            </Tabs>
          </form>
        </DialogContent>
      </Dialog>
      {formSubmitted && (
        <pre>
          <code>
            {JSON.stringify(formState, null, 2)}
          </code>
        </pre>
      )}
    </div>
  )
}
