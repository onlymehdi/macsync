import { execFile } from "child_process";

const PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin";

export function macsync(arg: string): Promise<string> {
  return new Promise((resolve, reject) => {
    execFile("macsync", [arg], { env: { ...process.env, PATH } }, (err, stdout, stderr) => {
      if (err) reject(new Error(stderr || err.message));
      else resolve(stdout.trim());
    });
  });
}
