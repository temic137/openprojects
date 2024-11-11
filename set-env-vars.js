const fs = require('fs');
const path = require('path');

// Get the GitHub token from the environment variables
const githubToken = process.env.GITHUB_TOKEN;

// Check if the GITHUB_TOKEN is provided
if (!githubToken) {
  console.error('GITHUB_TOKEN is not set!');
  process.exit(1);  // Exit with an error if the token is not found
}

// Define the path to the environment.prod.ts file
const envFilePath = path.resolve(__dirname, 'src/environments/environment.prod.ts');

// Read the content of environment.prod.ts
let envFileContent = fs.readFileSync(envFilePath, 'utf8');

// Replace the placeholder with the real GitHub token
envFileContent = envFileContent.replace(
  /process\.env\.GITHUB_TOKEN/g,  // This is the placeholder in your environment.prod.ts
  `'${githubToken}'`  // Replace with the actual GitHub token
);

// Write the updated content back to the environment.prod.ts file
fs.writeFileSync(envFilePath, envFileContent, 'utf8');

console.log('Environment variables set successfully!');
