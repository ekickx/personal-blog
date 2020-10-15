/**
  This file can be accessed using: {{ site.title }}
*/

const year = new Date().getFullYear();

module.exports = {
  annee: `${year}`,
  allowDarkMode: true,
  theme_color: "#ffffff", // used in Chrome, Firefox OS and Opera
  default_social_image: "/assets/img/featured_image.png", // for Open Graph meta

  // Author Info
  author_name: "Ghani Rafif", 
  email: "ghani.rafif.2112@gmail.com", 
  github: "https://github.com/ekickx",
  twitter: "https://twitter.com/ekickx", 
  twitter_username: "@ekickx", // for Twitter Open Graph meta

  // for Open Graph meta
  title: "Ghani's blog",
  url: "https://ekickx.codes", 

  en: {
    description: "My personal blog about Linux, Gnome, Gtk, etc",
    locale: "en_US", 
  },

  id: {
    description: "Blog pribadi tentang Linux, Gnome, Gtk, dll",
    locale: "id_ID",
  }
};
