import path from "node:path";
import fs from "node:fs";

export const usersJson = () => {
  // load json from file if exists
  // get directory where the script is running
  // don't use process.cwd(). because when it's run with `npx <package-name>`, the process.cwd() will be the package directory
  // where npx installed it.
  const fileDir = path.resolve(
    process.env.ORIGINAL_CWD || process.cwd(),
    "public/data"
  );
  // create the directory and subdiirectories if they don't exist
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir, { recursive: true });
  }

  const filePath = `${fileDir}/users.json`;

  return filePath;
};

export const getUsers = async () => {
  let users: { email: string; password: string }[] = [];

  try {
    const fileContent = fs.readFileSync(usersJson(), "utf8");
    users = JSON.parse(fileContent);
  } catch (error) {
    console.log("No existing file found");
  }

  return users;
};

export const addUser = async (email: string, password: string) => {
  const users = await getUsers();

  if (users.find((user) => user.email === email)) {
    return false;
  }

  users.push({
    email: email,
    password: password,
  });

  // write json to file
  fs.writeFileSync(usersJson(), JSON.stringify(users));

  return true;
};

export const deleteUser = async (email: string) => {
  const users = await getUsers();

  const index = users.findIndex((user) => user.email === email);

  if (index === -1) {
    return;
  }

  users.splice(index, 1);

  // write json to file
  fs.writeFileSync(usersJson(), JSON.stringify(users));

  return true;
};
