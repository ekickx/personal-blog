---
title: Pertemanan Berakhir dengan Zplug, Zinit adalah Teman Baruku
translationKey: zinit-is-my-new-friend
date: 2020-12-28
teaser: Selamat tinggal zplug 👋️, aku sekarang bahagia dengan zinit.
description: Selamat tinggal zplug 👋️, aku sekarang bahagia dengan zinit.
permalink: id/blog/{{ translationKey }}.html
---
Setelah satu tahun memakai zplug, akhirnya saya berpindah ke zinit. Di desktop saya, zplug membutuhkan waktu 300-500 ms untuk memuat plugin, sedangkan zinit hanya membutuhkan waktu sekitar 120-220 ms saja. Alasan awal saya berpindah ke zinit karena kecepatannya tadi dalam memuat plugin. Tetapi kelebihan zinit bukan itu saja. Pada tulisan ini akan saya tunjukan fitur-fitur zinit dan cara memakainya.

# Memasang zsh
Jika kalian belum memasang zsh, kalian bisa memasangnya sesuai cara di distro masing-masing.

> Untuk Debian, Ubuntu, dan turunannya
```bash
sudo apt install zsh
```

Setelah itu ganti default shell ke zsh
```bash
sudo chsh -s "$(which zsh)" "${USER}"
```

Setelah anda login kembali shell akan berganti ke zsh

# Memasang zinit

Buat `~/.zshrc` dan salin ini ke `~/.zshrc` kalian.

```bash
### Added by Zinit's installer
if [[ ! -f $HOME/.zinit/bin/zinit.zsh ]]; then
    print -P "%F{33}▓▒░ %F{220}Installing %F{33}DHARMA%F{220} Initiative Plugin Manager (%F{33}zdharma/zinit%F{220})…%f"
    command mkdir -p "$HOME/.zinit" && command chmod g-rwX "$HOME/.zinit"
    command git clone https://github.com/zdharma/zinit "$HOME/.zinit/bin" && \
        print -P "%F{33}▓▒░ %F{34}Installation successful.%f%b" || \
        print -P "%F{160}▓▒░ The clone has failed.%f%b"
fi

source "$HOME/.zinit/bin/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit

# Load a few important annexes, without Turbo
# (this is currently required for annexes)
zinit light-mode for \
    zinit-zsh/z-a-rust \
    zinit-zsh/z-a-as-monitor \
    zinit-zsh/z-a-patch-dl \
    zinit-zsh/z-a-bin-gem-node

### End of Zinit's installer chunk
```

Lalu muat kembali zsh dengan perintah `zsh` pada terminal. Lalu tinggal tunggu zinit terpasang.

# Command zinit untuk memasang plugin
Untuk saya, ada empat _command_ zinit yang biasa saya gunakan memasang plugin zsh: `light`, `snippet`, `ice`, dan `for`. Kalian juga bisa melihat _command-command_ lengkapnya di {% external "repo", "https://github.com/zdharma/zinit" %} atau {% external "wikinya", "https://zdharma.org/zinit/wiki/" %}.

## Zinit light
Untuk memasang plugin zsh dari github, kalian bisa menggunakan `zinit light <username_github/repository>`.

```bash
zinit light denysdovhan/spaceship-prompt
```

## Zinit snippet
Jika `zinit light` digunakan untuk memasang plugin zsh dari repository github, `zinit snippet` berguna untuk mengambil satu file dari url tertentu maupun file lokal dari gawai kita.

Dari repo saya {% external "ini", "https://github.com/ekickx/term-n-shell" %}, saya punya folder zshrc.d yang saya gunakan untuk menyimpan alias dan configurasi plugin. Jika kalian ingin mengambil salah satu konfigurasi plugin saya, misalnya konfigurasi {% external "spaceship", "https://github.com/denysdovhan/spaceship-prompt" %} saya, maka _commandnya_ adalah

```bash
zinit snippet https://github.com/ekickx/term-n-shell/blob/master/zshrc.d/spaceship-config.zsh
```

Untuk file lokal, _command_-nya seperti ini

```bash
zinit snippet ~/.zshrc.d/spaceship-config.zsh
```

Kalian juga bisa mengambil file dari `oh-my-zsh`

```bash
zinit snippet OMZ::lib/history.zsh
```

`OMZ::lib` adalah _shorthand_ dari zinit untuk url: `https://github.com/ohmyzsh/ohmyzsh/tree/master/lib`.

## Zinit ice
Zinit `ice` berfungsi sebagai _command_ tambahan untuk _command_ selanjutnya. Menurut dokumentasinya, penamaan `ice` karena perumpamaanya seperti es batu sebagai tambahan untuk minuman. 

```bash
zinit ice wait lucid id-as="function.zsh"
zinit snippet https://github.com/ekickx/term-n-shell/blob/master/zshrc.d/function.zsh
```

`wait` berarti `zinit snippet` akan memuat setelah prompt selesai termuat. Dand defaultnya setelah plugin/snippet yang menggunakan `wait` termuat akan ada pesan bahwa plugin/snippet telah selesai dimuat, `lucid` akan menyembunyikan pesan tersebut. `id-as` berguna untuk menamai snippet tersebut.

## Zinit for
Zinit `for` berguna untuk memuat banyak plugin sekaligus. Argument di `ice` juga berfungsi pada `for`.

```bash
zinit wait="1" lucid light-mode for \
    zsh-users/zsh-autosuggestions \
    zdharma/history-search-multi-word 
```

Pada `for` kita mengganti `light` dengan `light-mode` untuk memuat plugin.

# Penutup

Jika kalian masih bingung bisa ditanyakan di kolom komentar. Oh ya kalian juga bisa melihat {% external "konfigurasi", "https://github.com/ekickx/term-n-shell/blob/master/zshrc" %} saya sebagai referensi.

