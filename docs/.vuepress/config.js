const moment = require('moment');

module.exports = {
  base: "/things/",
  title: "yunwei97的个人博客",
  description: "初见。",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: "yunwei97" }],
    ['meta', { name: 'keywords', content: "yunwei97,个人博客" }],
  ],
  plugins: {
      '@vuepress/last-updated':{
        transformer: (timestamp) => {
          moment.locale("zh-cn")
          return moment(timestamp).format("LLLL")
        }
      },
      '@vuepress/pwa':{
        serviceWorker: true,
        updatePopup: {
          message: "有数据更新啦粉肠！！",
          buttonText: "更我戳"
        }
      },
      '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
  
        // 其他的 Vssue 配置
        owner: 'yunwei97',
        repo: 'things',
        clientId: 'ce6bf72ee6a3fc5642cd',
        clientSecret: 'ddbfb8e70655cb9e0bcad5ed27072f3ca1c1c9fa',
        autoCreateIssue: true,
      },
  },
    themeConfig: {
    lastUpdated: '上次更新时间',
    logo: '/assets/img/rehero.gif',
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