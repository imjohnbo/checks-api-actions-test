const core = require('@actions/core');
const github = require('@actions/github');
const token = process.env.GITHUB_TOKEN;
const octokit = new github.GitHub(token);
const sha = process.env.GITHUB_SHA;

// most @actions toolkit packages have async methods
async function run() {
  try { 
    const returnVal = await octokit.checks.create({
      ...github.context.repo,
      name: 'Test Check',
      head_sha: sha
    })
    console.log(`returnVal: ${returnVal}`);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
