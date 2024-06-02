export const dynamic = "force-dynamic";

export async function GET() {
  const currentVersion = process.env.APP_CURRENT_VERSION;
  const latestVersion = process.env.APP_LATEST_VERSION;
  const appName = process.env.APP_NAME;

  return Response.json({
    currentVersion,
    latestVersion,
    appName,
  });
}
