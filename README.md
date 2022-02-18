# My .files

My dotfiles, managed by [chezmoi](https://github.com/twpayne/chezmoi).

[If you want to fork it for your own usage](#forking)

## Setup a new mac

1. Install command line tools

   ```sh
   xcode-select --install
   ```

2. Insert Smart Card (Yubikey, Ledger, etc.)

3. Install Homebrew, GPG, Chezmoi and launch configuration

   ```sh
   # Install Homebrew
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   [[ $(arch) == "arm64" ]] && eval "$(/opt/homebrew/bin/brew shellenv)" || eval "$(/usr/local/bin/brew shellenv)"

   # Install GPG and Chezmoi
   brew install gpg chezmoi

   # Use configuration from this repo
   chezmoi init politician --apply
   ```

4. My personal todo list of manual actions:

   - [ ] This script will open, Alfred, Moom, Docker Desktop, grant them the needed permissions and enable start at boot
   - [ ] Grant Full disk access to Alfred and Terminal
   - [ ] Reboot `sudo shutdown -r now`
   - [ ] Connect to Firefox sync or copy profile folder (open _about:profiles_)
   - [ ] Install Xcode `mas install 497799835` (was removed from this script because the 12GB+ download can be slow as hell)

### Pull and apply latest changes from this repo

```sh
chezmoi update
```

### Edit files and push changes

For example, modify `~/.vimrc` (already managed by chezmoi)

```sh
chezmoi edit ~/.vimrc
```

Apply changes

```sh
chezmoi apply
```

Commit changes

```sh
chezmoi git add .
chezmoi git commit
chezmoi git push
```

### Before formatting a mac

Make sure all files are up to date with chezmoi

```sh
cd ~

# Export list of brew/cask/mas installed packages
brew bundle dump --force

# Re-add linked files
chezmoi re-add

# Export list of VSCodium extensions
echo "#\!/bin/bash" > $(chezmoi source-path)/run_once_before_4-install-vscodium-extensions.sh && codium --list-extensions | xargs -I{} echo codium --install-extension {} >> $(chezmoi source-path)/run_once_before_4-install-vscodium-extensions.sh
```

Review changes and commit

```sh
chezmoi git status

chezmoi git add .
chezmoi git commit
chezmoi git push
```

## Applications

This repo includes scripts to
[install](run_once_before_1-install-packages-darwin.sh.tmpl) as well as
[build](run_once_before_2-build-apps-darwin.sh.tmpl) all the apps that need to be.

I try to choose OSS apps over commercial ones unless the experience is too degraded or it prevents me from doing my work properly.

Here are the most notable ones:

| OSS                                                                                                                                                                                                                                           | Proprietary |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [Darktable](https://github.com/darktable-org/darktable)                                                                                                                                                                                       | Lightroom   |
| [Gimp](https://github.com/GNOME/gimp) & [Krita](https://github.com/KDE/krita)                                                                                                                                                                 | Photoshop   |
| [Inkscape](https://gitlab.com/inkscape/inkscape)                                                                                                                                                                                              | Illustrator |
| [Jitsi Meet](https://github.com/jitsi/jitsi-meet)                                                                                                                                                                                             | Zoom        |
| ~~[Kdenlive](https://kdenlive.org)~~ ([No m1 support](https://bugs.kde.org/show_bug.cgi?id=448443)) - Now using iMovie and evaluating [OpenShot](https://github.com/OpenShot/openshot-qt), [Shotcut](https://github.com/mltframework/shotcut) | Premiere    |
| [OnlyOffice](https://github.com/ONLYOFFICE/DesktopEditors)                                                                                                                                                                                    | Office      |
| [Penpot](https://github.com/penpot/penpot)                                                                                                                                                                                                    | Figma       |
| [VSCodium](https://github.com/VSCodium/vscodium)                                                                                                                                                                                              | VS Code     |

## Configuration

This repo includes a [script to configure](run_once_after_configure-apps.sh.tmpl) my Mac OS and several applications settings.

## Forking

If you want to fork this repo and modify it for your own personal/commercial usage, please do so freely, it is licensed accordingly (MIT).

Before you apply any settings, don't forget to:

- [Customize chezmoi settings](.chezmoi.toml.tmpl)
- Remove my encrypted files and eventually re-add your own. See which files are encrypted with `find $(chezmoi source-path) -type f -name "encrypted*.asc"`
