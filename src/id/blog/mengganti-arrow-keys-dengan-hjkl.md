---
title: Mengganti Arrow Keys dengan HJKL
translationKey: change-arrow-keys-with-hjkl
date: 2021-01-01T17:00:00Z
teaser: Buat capslock+hjkl sebagai pengganti arrow key
description: Navigasi lebih mudah dengan capslock+hjkl sebagai pengganti arrow key
  untuk pengguna vim.

---
Jika kalian pengguna vim, pasti pernah refleks menggunakan h,j,k,l untuk navigasi. Saya terkadang juga ingin bisa menggunakan hjkl untuk navigasi di luar vim. Syukurlah saya menemukan solusinya di internet.

Jadi yang akan kita lakukan adalah membuat <kbd>Caps Lock</kbd> + <kbd>h</kbd>/<kbd>j</kbd>/<kbd>k</kbd>/<kbd>l</kbd> menggantikan arrow key. Kita juga akan membuat capslock sebagai <kbd>Esc</kbd>. Oh iya jika kalian masih membutuhkan capslock, kita juga akan membuat <kbd>RShift</kbd> dan <kbd>LShift</kbd>  sebagai capslock jika ditekan bersamaan.

# Memasang tools

Pertama pasang dulu `xmodmap` dan `xcape`.

Pada Debian, Ubuntu, dan turunannya:

``` bash
sudo apt install xmodmap xcape
```

# Arrow key

Buat file `.xmodmap` pada `$HOME`.

``` bash
touch ~/.xmodmap
```

Lalu salin baris ini pada file tersebut

``` bash
! Set capslock as Mode_switch
remove Lock = Caps_Lock
keycode 66 = Mode_switch

! Set Mode_switch + h/j/k/l 
keysym h = h H Left
keysym j = j J Down
keysym k = k K Up
keysym l = l L Right 
```

Jadi yang dilakukan baris tersebut adalah:

1. Menghapus fungsi capslock
2. Lalu menjadikan Capslock (Keycode 66) sebagai <kbd>Mode_switch</kbd>
3. Lalu menjadikan <kbd>Mode_switch</kbd> + <kbd>hjkl</kbd> sebagai arrow key. Jadi `keysym h = h H Left` berarti, jika <kbd>h</kbd> ditekan menjadi `h`, <kbd>Shift</kbd> + <kbd>h</kbd> menjadi `H`, dan <kbd>Mode_switch</kbd> + <kbd>h</kbd> menjadi <kbd>Left arrow</kbd>.

# Capslock

Untuk mengubah <kbd>RShift</kbd> + <kbd>LShift</kbd> menjadi <kbd>Caps Lock</kbd>, salin baris ini pada file `~/.xmodmap` juga:

``` bash
keysym Shift_R = Shift_R Caps_Lock Shift_R
keysym Shift_L = Shift_L Caps_Lock Shift_L
```

Setelah itu simpan dan jalankan perintah berikut untuk mengaktifkan perubahannya

``` bash
xmodmap ~/.xmodmap
```

Jika kalian ingin mengembalikan pengaturan key kalian seperti semula, jalankan perintah ini:

``` bash
setxkbmap -layout us
```

# Esc

Sekarang kita akan menggunakan `xcape` untuk membuat <kbd>Mode_switch</kbd> menjadi <kbd>Esc</kbd> jika ditekan sekali. Kita melakukannya dengan perintah ini:

``` bash
xcape -e 'Mode_switch=Escape'
```

# Membuat autostart

Terakhir kita memmbutuhkan autostart agar setiap kali kita login, perubahannya bisa berefek. Kalian salin baris berikut ini dan simpan di `~/.config/autostart/keys.desktop`.

``` bash
[Desktop Entry]
Encoding=UTF-8
Version=0.9.4
Type=Application
Name=Xmodmap
Comment=Modify key
Exec=bash -c "sleep 20; xmodmap ~/.xmodmap && xcape -e 'Mode_switch=Escape'"
StartupNotify=false
Terminal=false
Hidden=false
```

# Penutup

Itulah tadi artikel singkat saya. Terimakasih telah membaca.

***

## Referensi

* [acestronautical's dotfiles](https://github.com/acestronautical/dotfiles/blob/master/xmodmap/.xmodmap "Acestrona's dotfile")
