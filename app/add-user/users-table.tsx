"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { deleteUserAction } from "./user-action";
import { useFormState } from "react-dom";

export function UsersTable({
  users,
}: {
  users: { email: string; password: string }[];
}) {
  const [state, formAction] = useFormState(deleteUserAction, {});
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">E-mail</TableHead>
          <TableHead>Password</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{user.email}</TableCell>
            <TableCell className="w-full">{user.password}</TableCell>
            <TableCell>
              <form action={formAction} method="post">
                <input type="hidden" name="email" value={user.email} />
                <Button type="submit" variant={"ghost"}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </form>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
