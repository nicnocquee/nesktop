import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddUserForm from "./add-user-form";
import { getUsers, usersJson } from "./database";
import { UsersTable } from "./users-table";

export const dynamic = "force-dynamic";

export default async function About() {
  const users = await getUsers();
  const jsonPath = usersJson();
  return (
    <div className="max-w-5xl mx-auto w-full space-y-4">
      <div className="grid grid-cols-4  gap-4">
        <div className="flex flex-col space-y-4">
          <AddUserForm />
          <Card>
            <CardHeader>
              <CardTitle>Database</CardTitle>
            </CardHeader>
            <CardContent className="break-all">
              The database is stored in the
              <p className="text-sm text-gray-700 bg-slate-100 my-2 p-2 rounded-md">
                {jsonPath}
              </p>{" "}
              file.
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3 p-4 flex flex-col space-y-4 border shadow-sm rounded-lg">
          <h3 className=" text-2xl font-bold">Users</h3>
          {users.length === 0 && (
            <div className="flex flex-col w-full items-center justify-center ">
              <p className="text-center text-sm">No users found.</p>
            </div>
          )}

          {users.length > 0 && <UsersTable users={users} />}
        </div>
      </div>
      <div>
        This page can be edited at{" "}
        <code className="text-sm">app/add-user/page.tsx</code>
      </div>
    </div>
  );
}
