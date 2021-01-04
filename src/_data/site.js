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

  // for rss feed
  feedTitle: "RSS feed for ekickx's blog post",
  feedSubtitle: "Ekickx's personal pages",
  feedUrl: "/feed.xml",

  // for Open Graph meta
  title: "Ghani's blog",
  url: "https://ekickx.codes", 

  language: [
    {
      label: "en",
      locale: "en_US", 
      description: "My personal blog about Linux, Gnome, Gtk, etc",
    },
    {
      label: "id",
      locale: "id_ID",
      description: "Blog pribadi tentang Linux, Gnome, Gtk, dll",
    },
  ]
};
