export const dynamic = "force-dynamic";

export async function GET() {
  const currentVersion = process.env.APP_CURRENT_VERSION;
  const latestVersion = process.env.APP_LATEST_VERSION;

  console.log({ currentVersion, latestVersion });

  return Response.json({
    currentVersion,
    latestVersion,
  });
}
