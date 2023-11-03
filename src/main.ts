import * as core from "@actions/core";

// variables
const deployBranch: string = core.getInput("deploy-branch");
const tscDirectory: (string | undefined) = core.getInput("tsc-directory");

export async function run() {
    try {
        console.log("Running");
    }
    catch(error: any) {
        core.setFailed(error.message);
    }
}