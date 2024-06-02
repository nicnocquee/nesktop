export async function GET() {
  const currentVersion = process.env.APP_CURRENT_VERSION;
  const latestVersion = process.env.APP_LATEST_VERSION;

  return Response.json({
    currentVersion,
    latestVersion,
  });
}
