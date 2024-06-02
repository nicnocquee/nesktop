import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function UpdateInfo() {
  const currentVersion = process.env.APP_CURRENT_VERSION;
  const latestVersion = process.env.APP_LATEST_VERSION;
  const shouldShowUpdateAvailableAlert =
    currentVersion && latestVersion && currentVersion !== latestVersion;

  if (!shouldShowUpdateAvailableAlert) {
    return null;
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-4">
      <Alert className="bg-yellow-100">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          <p>
            You are using an outdated version of the app ({currentVersion}
            ). Please update to the latest version ({latestVersion}) to get the
            latest features and bug fixes.
          </p>
          <p>Run the following command in your terminal to update the app:</p>
          <p className="p-2 my-4 bg-slate-800 rounded-md text-white">
            <code>npm i -g {process.env.APP_NAME}@latest</code>
          </p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
