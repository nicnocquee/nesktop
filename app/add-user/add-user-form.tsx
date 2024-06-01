"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import addUserAction from "./add-user-action";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AddUserForm() {
  const [state, formAction] = useFormState(addUserAction, {});
  return (
    <form
      action={formAction}
      className="w-full max-w-sm flex flex-col space-y-4"
    >
      {state && "status" in state && state.status === "ok" && (
        <Alert>
          <AlertDescription>User saved to {state.data}</AlertDescription>
        </Alert>
      )}
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Add user</CardTitle>
          <CardDescription>
            Enter an email and password below to add a new user.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Add user</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
