const siteMetadata = {
  title: 'Charlie Duong',
  author: 'Charlie Duong',
  headerTitle: 'Charlie Duong',
  description: 'Welcome to my site!',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://cduong.dev',
  siteRepo: 'https://github.com/CDuong04',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'charles_duong@brown.edu',
  github: 'https://github.com/CDuong04',
  twitter: 'https://twitter.com/CDuong04',
  facebook: 'https://facebook.com/',
  linkedin: 'https://www.linkedin.com/in/cduong',
  spotify: 'https://open.spotify.com/user/flamingsnake123?si=e6894e1260034b51',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
