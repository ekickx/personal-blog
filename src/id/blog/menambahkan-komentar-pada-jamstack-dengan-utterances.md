---
title: Cara Menambahkan Fitur Komentar pada JAMstack dengan Utterances
translationKey: create-comment-for-jamstack-with-utterances
date: 2020-10-19
permalink: id/blog/{{ translationKey }}.html
---
Akhir-akhir ini jamstack mulai populer digunakan untuk membuat website, terutama blog pribadi. Saya juga termasuk yang ikut memakai metode jamstack untuk membuat blog ini. Saat membuat blog ini, saya ingin ada fitur komentar agar bisa mendapatkan umpan balik dari pengunjung blog saya. Awalnya saya ingin menggunakan layanan disqus tapi karena beberapa alasan, seperti {% external "ini", "https://love2dev.com/blog/why-i-am-ditching-disqus-and-you-should-too/" %} dan juga {% external "ini", "https://chrislema.com/killed-disqus-commenting/" %}, akhirnya saya memutuskan mencari alternatifnya. Dan saya menemukan yang cocok dan mudah digunakan, yaitu {% external "utterances", "https://utteranc.es/" %}.

Utterances adalah layanan yang memanfaatkan Github API. Jadi nantinya, bot utterances akan mencari `issue` di `repository` github kita yang berhubungan dengan halaman yang sedang dibuka berdasarkan `title`, `url`, atau aspek lainnya. Jika terdapat `issue` yang memenuhi kriteria tersebut, utterances akan memuat komentar dari `issue` tersebut. Jika tidak ada `issue` yang cocok, bot utterances akan membuatnya.

# Cara menggunakan

Pertama kalian sedikan dulu `repository` yang akan digunakan untuk menampung `issue`. Kalian bisa menggunakan `repository` yang sama maupun berbeda dengan yang kalian gunakan untuk website jamstack kalian. Kalau saya menggunakan `repository` yang sama dan bisa dilihat di {% external "sini", "https://github.com/ekickx/personal-blog/issues?q=is%3Aissue+is%3Aopen+label%3A%22blog+comment%22" %}.

Seteleah itu kalian pasang {% external "utterances app", "https://github.com/apps/utterances" %} agar bot utterances bisa mendapatkan akses ke `repository` kalian. Lalu pilih `repository` yang tadi kalian siapkan. Oh iya jika kalian ingin menambahkan `repository` lain untuk menyimpan `issue`, kalian bisa mengaturnya sewaktu-waktu.

Lalu pergi ke halaman {% external "ini", "https://utteranc.es/" %} untuk mengonfigurasi utterances. Di bagian **Repository**, kalian isikan `username` github kalian dan `repository` yang kalian akan pakai. Kemudian, bagian **Blog Post ↔️ Issue Mapping** adalah _pattern_ `issue` yang akan digunakan bot `utterances`. Untuk saya sendiri, saya memilih **Issue title contains page pathname** karena judul blog saya bisa saya sulih sewaktu-waktu dan url bisa berganti jika saya sudah tidak bisa bayar domain hehehe.

![Screenshot utterances's Blog Post ↔️ Issue Mapping](/assets/img/Screenshot_2020-10-19-utterances-issue.png)

Selanjutnya, Kalian bisa memberikan label untuk `issue` yang nanti akan dibuat oleh `utterances`. Dan untuk tema, silahkan pilih sesuka kalian. Langkah terakhir, kalian tinggal salin `script` yang sudah dihasilkan dan tempel di bagian mana komentar kalian ingin dimunculkan. Kalian bisa juga melihat {% external "kode  saya", "https://github.com/ekickx/personal-blog/blob/master/src/_includes/layouts/post.njk" %} untuk referensi.

![Screenshot utterances's Enable Scipt](/assets/img/Screenshot_2020-10-19-utterances-script.png)

# Penutup

Itu dia artikel singkat dari saya. Jika kalian masih ada yang bingung atau ingin memberikan saran maupun kritik, silahkan sampaikan di kolom komentar. Terimakasih.



