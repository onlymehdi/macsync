import { showHUD } from "@raycast/api";
import { macsync } from "./run";

export default async function Command() {
  try {
    await showHUD(await macsync("pro-push"));
  } catch (e) {
    await showHUD("Pro push failed: " + (e as Error).message);
  }
}
