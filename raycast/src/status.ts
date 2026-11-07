import { showHUD } from "@raycast/api";
import { macsync } from "./run";

export default async function Command() {
  try {
    await showHUD(await macsync("status"));
  } catch (e) {
    await showHUD("Status failed: " + (e as Error).message);
  }
}
