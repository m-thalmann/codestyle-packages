/**
 * This script is used to start the local registry and reset it after it's done.
 * It's used to avoid the need to manually reset the local registry after running the command.
 */

const { exec } = require('child_process');
const fs = require('fs');

const CALL_ARGS_AMOUNT = 2;

const args = process.argv.slice(CALL_ARGS_AMOUNT).join(' ');

const registryProcess = exec(`npx nx local-registry --location=project ${args}`);

registryProcess.stdout.on('data', (data) => process.stdout.write(data));
registryProcess.stderr.on('data', (data) => process.stderr.write(data));

registryProcess.on('close', () => {
  try {
    fs.unlinkSync('.npmrc');
    process.stdout.write('\n✔ Local registry reset.\n');
  } catch {
    process.stderr.write('\n❌ Registry could not be reset.\n');
  }
});

process.on('SIGINT', () => {
  registryProcess.kill();
});
