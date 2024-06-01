#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");

// Store the original current working directory
const originalCwd = process.cwd();

// Set the working directory to the package directory
const projectDir = path.resolve(__dirname);

// Pass the original cwd as an environment variable and start the Next.js server in production mode
execSync(`ORIGINAL_CWD=${originalCwd} npm run start`, {
  cwd: projectDir,
  stdio: "inherit",
});
