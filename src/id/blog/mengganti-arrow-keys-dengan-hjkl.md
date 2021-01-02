---
title: Mengganti Arrow Keys dengan HJKL
translationKey: change-arrow-keys-with-hjkl
date: 2021-01-01T17:00:00Z
teaser: Buat capslock+hjkl sebagai pengganti arrow key
description: Navigasi lebih mudah dengan capslock+hjkl sebagai pengganti arrow key
  untuk pengguna vim.

---
Jika kalian pengguna vim, pasti pernah refleks menggunakan h,j,k,l untuk navigasi. Saya terkadang juga ingin bisa menggunakan hjkl untuk navigasi di luar vim. Syukurlah saya menemukan solusinya di internet.

Jadi yang akan kita lakukan adalah membuat <kbd>Caps Lock</kbd> + <kbd>h</kbd>/<kbd>j</kbd/<kbd>k</kbd>/<kbd>l</kbd> menggantikan arrow key. Kita juga akan membuat capslock sebagai <kbd>Esc</kbd>. Oh iya jika kalian masih membutuhkan capslock, kita juga akan membuat <kbd>RShift</kbd> dan <kbd>LShift</kbd>  sebagai capslock jika ditekan bersamaan.

# Memasang tools

Pertama pasang dulu `xmodmap`dan `xcape`.

Pada Debian, Ubuntu, dan turunannya

\`\`\`bash

sudo apt install xmodmap xcape

\`\`\`