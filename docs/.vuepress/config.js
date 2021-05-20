const headConfig = require('./configs/headConfig.js');
const pluginsConfig = require('./configs/pluginsConfig.js');
const themeConfig = require('./configs/themeConfig.js');

module.exports = {
  base: "/things/",
  title: "yunwei97的个人博客",
  description: "初见。",
  head: headConfig,
  plugins: pluginsConfig,
  themeConfig: themeConfig,
}