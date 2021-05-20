module.exports = {
    base: "/things/",
    title: "yunwei97的个人博客",
    description: "初见。",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico'}],
        ['meta', { name: 'author', content: "yunwei97"}],
        ['meta', { name: 'keywords', content: "yunwei97,个人博客"}]
    ],
    themeConfig: {
      lastUpdated: 'Last Updated',
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Miemie', link: '/Miemie/' },
        { text: 'External', link: 'https://baidu.com' },
      ],
      sidebar: [
          '',
          'Miemie/'
      ]
    }
  }