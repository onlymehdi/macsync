# macsync

Sync your Dock layout and installed apps across your Macs through iCloud Drive.

## Install

```
brew install onlymehdi/tap/macsync
```

Homebrew installs `mas` and `dockutil` for you.

## Use

```
macsync push     # save this Mac's Dock and apps
macsync pull     # apply the saved setup to this Mac
macsync status   # show the last saved snapshot
```

Run `push` on your main Mac first, then `pull` on the new one. Both Macs need iCloud Drive on and the same Apple ID.

## Raycast

The `raycast/` folder holds a Raycast extension with three commands: Push Setup, Pull Setup and Show Status.

## Notes

- Pull replaces your whole Dock.
- Apps that need a login or license key still need a manual sign-in.
