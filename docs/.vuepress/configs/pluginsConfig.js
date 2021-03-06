const moment = require('moment');
const secret = require('./configs/secret.js');

module.exports = {
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
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
      autoCreateIssue: true,
    },
    '@vuepress/back-to-top':true,
}