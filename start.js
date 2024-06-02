#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");

// Store the original current working directory
const originalCwd = process.cwd();

// Set the working directory to the package directory
const projectDir = path.resolve(__dirname);

// Get the name and version from package.json
const packageJson = require("./package.json");
const name = packageJson.name;
const version = packageJson.version;

// Check if there is a new version in the npm registry
const npmVersion = execSync(`npm view "${name}" version`).toString();
if (npmVersion !== version) {
  console.log(`A new version of ${name} is available: ${npmVersion}`);
  console.log(`Please run \`npm i -g ${name}@latest\` to update the package.`);
}

// Pass the original cwd as an environment variable and start the Next.js server in production mode
execSync(
  `ORIGINAL_CWD=${originalCwd} APP_NAME=${name} APP_CURRENT_VERSION=${version} APP_LATEST_VERSION=${npmVersion} npm run start`,
  {
    cwd: projectDir,
    stdio: "inherit",
  }
);
