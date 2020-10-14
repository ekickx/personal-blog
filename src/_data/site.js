/**
  This file can be accessed using: {{ site.title }}
*/

const year = new Date().getFullYear();

module.exports = {
  annee: `${year}`,
  allowDarkMode: true,
  lang: "en", // for html tag
  title: "Ghani's blog",
  description: "My personal blog about Linux, Gnome, Gtk, etc",
  url: "https://ekickx.codes", // don't end with a slash /
  brandName: "Ghani Rafif", // for copyright and legal page

  author: {
    name: "Ghani Rafif", // for posts meta and Open Graph meta (FB and Twitter)
    email: "ghani@ekickx.codes", // used in legal page
    github: "https://github.com/ekickx", // used in footer
    twitter: "https://twitter.com/ekickx", // used in footer
  },

  meta_data: {
    theme_color: "#ffffff", // used in Chrome, Firefox OS and Opera
    default_social_image: "/assets/img/featured_image.png", // for Open Graph meta
    locale: "en_US", // for Open Graph meta
    twitter_username: "@ekickx", // for Twitter Open Graph meta
  },
};
