# My .files

My dotfiles, managed by [chezmoi](https://github.com/twpayne/chezmoi).

[If you want to fork it for your own usage](#forking)

## Setup a new mac

```sh
sh -c "$(curl -fsLS chezmoi.io/get)" -- init --apply politician
```

- Open Alfred, click _Request Permissions_ in _General_

Once everything is setup, reboot!

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
chezmoi cd
git add .
git commit
```

## Applications

This repo includes scripts to
[install](run_once_before_1-install-packages-darwin.sh.tmpl) as well as
[build](run_once_before_2-build-apps-darwin.sh.tmpl) all the apps I need to
work.

I try to choose OSS apps over commercial ones unless the experience is too degraded or it prevents me from doing my work properly.

Here are the most notable ones:

| OSS | Proprietary |
|---|---|
| [Darktable](https://github.com/darktable-org/darktable) | Lightroom |
| [Gimp](https://github.com/GNOME/gimp) & [Krita](https://github.com/KDE/krita) | Photoshop |
| [Inkscape](https://gitlab.com/inkscape/inkscape) | Illustrator |
| [Jitsi Meet](https://github.com/jitsi/jitsi-meet) | Zoom |
| ~~[Kdenlive](https://kdenlive.org)~~ ([No m1 support](https://bugs.kde.org/show_bug.cgi?id=448443)) - Now using iMovie and evaluating [OpenShot](https://github.com/OpenShot/openshot-qt), [Shotcut](https://github.com/mltframework/shotcut) | Premiere |
| [OnlyOffice](https://github.com/ONLYOFFICE/DesktopEditors) | Office |
| [Penpot](https://github.com/penpot/penpot) | Figma |
| [VSCodium](https://github.com/VSCodium/vscodium) | VS Code |

## Configuration

This repo includes a [script to configure](run_once_after_configure-apps.sh.tmpl) my Mac OS and several applications settings.

## Forking

If you want to fork this repo and modify it for your own personal/commercial usage, please do so freely, it is licensed accordingly (MIT).

Before you apply any settings, don't forget to:

- [Change the settings for chezmoi](.chezmoi.toml.tmpl)
- Remove my encrypted files and eventually re-add your own. See which files are encrypted  with `find $(chezmoi source-path) -type f -name "encrypted*.asc"`
