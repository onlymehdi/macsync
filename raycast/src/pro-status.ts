import { showHUD } from "@raycast/api";
import { macsync } from "./run";

export default async function Command() {
  try {
    await showHUD(await macsync("pro-status"));
  } catch (e) {
    await showHUD("Pro status failed: " + (e as Error).message);
  }
}
