/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0e9df38d17c7429a2f7ff80d7a12d4be"
  },
  {
    "url": "assets/css/0.styles.e12179aa.css",
    "revision": "a0a4a0171e820b23e5fa33c75a34e773"
  },
  {
    "url": "assets/img/chijiang.png",
    "revision": "d0b0bc446155c50b7548687cde0fd772"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "3949c8aab3cac4314c29c2c96c62c7f0"
  },
  {
    "url": "assets/img/rehero.gif",
    "revision": "9ed30d8042a0a48ae10260d7d8fb5462"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.12fa5453.js",
    "revision": "8643687e3651c06fcc8a7dba07c389bb"
  },
  {
    "url": "assets/js/11.3e30a522.js",
    "revision": "e76572b7c5963e2f3e35fec19b2e2088"
  },
  {
    "url": "assets/js/12.a11b2e8a.js",
    "revision": "07b24648c884ad47ee94f755e901bf11"
  },
  {
    "url": "assets/js/2.60d2f863.js",
    "revision": "83e2883c57fecea88618e0260762f62c"
  },
  {
    "url": "assets/js/3.32ea1cf6.js",
    "revision": "0d0fecb8b2e29f289f873b8e45afef1d"
  },
  {
    "url": "assets/js/4.f2217cc4.js",
    "revision": "c50a84fbe475a57078ce4210a3ed63ea"
  },
  {
    "url": "assets/js/5.63882f0e.js",
    "revision": "260119fa4f0d665c08d05d1e79f85efe"
  },
  {
    "url": "assets/js/6.699c1e9a.js",
    "revision": "44963c21181062b6acb2fd5e8d966023"
  },
  {
    "url": "assets/js/7.0cb76dcb.js",
    "revision": "ce9423aebde2e031a16e566fa4397692"
  },
  {
    "url": "assets/js/8.9bf60558.js",
    "revision": "1684aa77f4ed34055cbb9a4454faa108"
  },
  {
    "url": "assets/js/9.3ce03fb2.js",
    "revision": "9480d329aaf1af5787f1584460cc40db"
  },
  {
    "url": "assets/js/app.6f7067f0.js",
    "revision": "ce3067e587ae00337d4dea23e1d45abc"
  },
  {
    "url": "hero.gif",
    "revision": "50fd24794656be3f9af63dbc9172ebb0"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "e4e3778ce123c9f18e15e4325f694e11"
  },
  {
    "url": "Miemie/index.html",
    "revision": "ce9e8dfec66d30cb5d4028e3fd6ef8e3"
  },
  {
    "url": "shijian.html",
    "revision": "ebb6c91a54a59b12b4f8fc05b6fb6e79"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
