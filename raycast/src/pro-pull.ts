import { showHUD, confirmAlert } from "@raycast/api";
import { macsync } from "./run";

export default async function Command() {
  const ok = await confirmAlert({
    title: "Apply saved settings?",
    message: "This overwrites trackpad, keyboard, Finder, Dock and display settings on this Mac.",
  });
  if (!ok) return;
  try {
    await showHUD(await macsync("pro-pull"));
  } catch (e) {
    await showHUD("Pro pull failed: " + (e as Error).message);
  }
}
