# macsync

Sync your Dock, apps and settings across your Macs through iCloud Drive.

## Install

```
brew install onlymehdi/tap/macsync
```

Homebrew installs `mas` and `dockutil` for you.

## Free commands

```
macsync push     # save this Mac's Dock and apps
macsync pull     # apply the saved setup to this Mac
macsync status   # show the last saved snapshot
```

## Pro commands

```
macsync pro-push    # save settings
macsync pro-pull    # apply settings to this Mac
macsync pro-status  # show the last saved settings snapshot
```

Pro syncs trackpad, mouse, keyboard, Finder, Dock behavior, display and appearance, screenshot settings, and Raycast preferences.

Run `push` and `pro-push` on your main Mac first, then `pull` and `pro-pull` on the new one. Both Macs need iCloud Drive on and the same Apple ID.

## Raycast

The `raycast/` folder holds a Raycast extension with commands for all six actions.

## Notes

- Pull replaces your whole Dock. Pro-pull overwrites the settings listed above.
- Some settings (trackpad, keyboard, appearance) need a log out to fully apply.
- Apps that need a login or license key still need a manual sign-in.
