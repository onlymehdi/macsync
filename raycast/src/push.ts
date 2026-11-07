import { showHUD } from "@raycast/api";
import { macsync } from "./run";

export default async function Command() {
  try {
    await showHUD(await macsync("push"));
  } catch (e) {
    await showHUD("Push failed: " + (e as Error).message);
  }
}
