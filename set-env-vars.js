require('dotenv').config();  // Add this line to load variables from the .env file
const fs = require('fs');
const path = require('path');

const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  console.error('GITHUB_TOKEN is not set!');
  process.exit(1);
}

const envFilePath = path.resolve(__dirname, 'src/environments/environments.prod.ts');
let envFileContent = fs.readFileSync(envFilePath, 'utf8');

envFileContent = envFileContent.replace(
  /process\.env\.GITHUB_TOKEN/g,
  `'${githubToken}'`
);

fs.writeFileSync(envFilePath, envFileContent, 'utf8');

console.log('Environment variables set successfully!');
