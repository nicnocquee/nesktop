"use server";

import { revalidatePath } from "next/cache";
import { addUser, deleteUser } from "./database";

type addUserActionResult = {
  status: "ok" | "no";
  data: string;
};
export default async function addUserAction(
  _prevState: any,
  formData: FormData
): Promise<addUserActionResult | {}> {
  // get email and password from formData
  const email = formData.get("user-email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { status: "no" };
  }

  const success = await addUser(email, password);

  if (!success) {
    return { status: "no" };
  }

  revalidatePath("/add-user");

  return { status: "ok" };
}

export async function deleteUserAction(
  _prevState: any,
  formData: FormData
): Promise<addUserActionResult | {}> {
  // get email and password from formData
  const email = formData.get("email") as string;

  if (!email) {
    return { status: "no" };
  }

  await deleteUser(email);

  revalidatePath("/add-user");

  return { status: "ok" };
}
