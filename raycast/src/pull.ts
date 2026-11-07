import { showHUD, confirmAlert } from "@raycast/api";
import { macsync } from "./run";

export default async function Command() {
  const ok = await confirmAlert({
    title: "Apply saved setup?",
    message: "This installs missing apps and replaces your Dock layout.",
  });
  if (!ok) return;
  try {
    await showHUD(await macsync("pull"));
  } catch (e) {
    await showHUD("Pull failed: " + (e as Error).message);
  }
}
