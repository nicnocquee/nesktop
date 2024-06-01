"use server";

import path from "node:path";
import fs from "node:fs";

type addUserActionResult = {
  status: "ok" | "no";
  data: string;
};
export default async function addUserAction(
  _prevState: any,
  formData: FormData
): Promise<addUserActionResult | {}> {
  // get email and password from formData
  const email = formData.get("email");
  const password = formData.get("password");

  // load json from file if exists
  // get directory where the script is running
  // don't use process.cwd(). because when it's run with `npx <package-name>`, the process.cwd() will be the package directory
  // where npx installed it.
  const fileDir = path.resolve(
    process.env.ORIGINAL_CWD || process.cwd(),
    "public/data"
  );
  const filePath = `${fileDir}/users.json`;
  let users: any[] = [];

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    users = JSON.parse(fileContent);
  } catch (error) {
    console.log("No existing file found", filePath);
  }

  users.push({
    email: email,
    password: password,
  });

  // create the directory and subdiirectories if they don't exist
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir, { recursive: true });
  }

  // write json to file
  fs.writeFileSync(filePath, JSON.stringify(users));

  return { status: "ok", data: filePath };
}
