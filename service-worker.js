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
    "revision": "48d0bf5eb5bd00e55b8330a3450e09cb"
  },
  {
    "url": "api/cli.html",
    "revision": "7133635ccea5c73b02d042aded21b1b4"
  },
  {
    "url": "api/node.html",
    "revision": "5e69602a6b0fb5367baeceb5c9a3c416"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.630a7442.css",
    "revision": "097ff49b16449a409b3b7eb1ec18f948"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c04c2237.js",
    "revision": "8fcac7166633602aab19961d566c9382"
  },
  {
    "url": "assets/js/11.92b4b61f.js",
    "revision": "164f9acd3f207cb8fe5427aa10248803"
  },
  {
    "url": "assets/js/12.d0bda8cd.js",
    "revision": "802901801e9bba979faa2239ca8c22cb"
  },
  {
    "url": "assets/js/13.15f0b979.js",
    "revision": "74f72ae5b43060120f0ed917924f0c71"
  },
  {
    "url": "assets/js/14.74eb780b.js",
    "revision": "03ae6d69e029a1a2578a06202ecaab7d"
  },
  {
    "url": "assets/js/15.ec2b55e6.js",
    "revision": "52bc8e3eb813790c47dc7abce65edaf6"
  },
  {
    "url": "assets/js/16.7f731cbf.js",
    "revision": "b4c380fc4c050519463d92f0425e0473"
  },
  {
    "url": "assets/js/17.9153bbc3.js",
    "revision": "6f054f99e267007d64a9e302c01026f6"
  },
  {
    "url": "assets/js/18.6ec5a49e.js",
    "revision": "3780a367f47a0f56ec28f906718d742c"
  },
  {
    "url": "assets/js/19.b3150a46.js",
    "revision": "7855029160287a2d2e5c99b1467ac0fb"
  },
  {
    "url": "assets/js/20.a4c8a1d4.js",
    "revision": "571a0a9df5294c039cdd3c1e8a1b7ce5"
  },
  {
    "url": "assets/js/21.ccc2322e.js",
    "revision": "c9f46e568935fd209da6a83953fd52c4"
  },
  {
    "url": "assets/js/22.e7e1acc1.js",
    "revision": "93b46e6790c2cd6bf32a6fb7bfcf21c5"
  },
  {
    "url": "assets/js/23.7f4cf763.js",
    "revision": "5eecc5f8fda435d43dfcf69b0e2fccd3"
  },
  {
    "url": "assets/js/24.023c57d4.js",
    "revision": "e07a5b460dc95896dde44463016fc27b"
  },
  {
    "url": "assets/js/25.13f66375.js",
    "revision": "6480b6e8e9360ea18de5b9efa9ee6355"
  },
  {
    "url": "assets/js/26.e1c2d7ea.js",
    "revision": "1bdb33a7a71e125822bff62c92a2f4b9"
  },
  {
    "url": "assets/js/27.854924ca.js",
    "revision": "20949b4115a5967facf0701c6dc3fc66"
  },
  {
    "url": "assets/js/28.c6b3fbb3.js",
    "revision": "50ab45b337407557248c0cc49a5be5e5"
  },
  {
    "url": "assets/js/29.82e2beae.js",
    "revision": "d142a1238ee02a421427171a37c40a49"
  },
  {
    "url": "assets/js/3.b3c6a6e9.js",
    "revision": "5c5440eddb61415cd1944b85f37f5acd"
  },
  {
    "url": "assets/js/30.10f2e423.js",
    "revision": "7e25d47eb7b83ae255c0c58512a6763d"
  },
  {
    "url": "assets/js/31.48aee1fc.js",
    "revision": "35a9ae73ce0bd74bfd41d7bffc3e4c35"
  },
  {
    "url": "assets/js/32.c1160c86.js",
    "revision": "09574b3586e867035890bd9a87fa6463"
  },
  {
    "url": "assets/js/33.698ea226.js",
    "revision": "e86358b4725ec2d5e8083d8d76ef6fb7"
  },
  {
    "url": "assets/js/34.753e9eb7.js",
    "revision": "25675d59fee35735c3f3ee7c0f7ee99c"
  },
  {
    "url": "assets/js/35.a278c2ae.js",
    "revision": "31db6afff6280a42def015664f1a7338"
  },
  {
    "url": "assets/js/36.b1a7e3fc.js",
    "revision": "95fb54706d9d2b80006943e8919e23c0"
  },
  {
    "url": "assets/js/37.05161397.js",
    "revision": "c97ffeec018a2780e11922e627da5fd7"
  },
  {
    "url": "assets/js/38.fe5b1492.js",
    "revision": "bc41f809b4993c0c42e0a73aedf9d495"
  },
  {
    "url": "assets/js/39.de2d1f80.js",
    "revision": "d47051c9c813ff9637bc2fd8211f5ca3"
  },
  {
    "url": "assets/js/4.1f7a188e.js",
    "revision": "9cc15eae25a03ba9333f077cdbb9b995"
  },
  {
    "url": "assets/js/40.f3befb0a.js",
    "revision": "9f2e392cbb0bd755dd9c17640be28cb5"
  },
  {
    "url": "assets/js/41.1565c439.js",
    "revision": "8fbde32b50cf9c0355d2c1abf12e28c5"
  },
  {
    "url": "assets/js/42.558a6577.js",
    "revision": "ce6d73685e896cdae736e650fae4763d"
  },
  {
    "url": "assets/js/43.62fde637.js",
    "revision": "691b0036940de4a28adc857975619b70"
  },
  {
    "url": "assets/js/44.c0fc289d.js",
    "revision": "87508fe7e813bb9c685e9ba617fe9434"
  },
  {
    "url": "assets/js/45.256e7a05.js",
    "revision": "599516395aed9f458fab8ffb49fc794e"
  },
  {
    "url": "assets/js/46.98407635.js",
    "revision": "64dd6991d2fbea90d9d4d402e2007362"
  },
  {
    "url": "assets/js/47.4afb9b29.js",
    "revision": "d316d14a988ccf643ea8b7fe50398437"
  },
  {
    "url": "assets/js/48.ea82a9e8.js",
    "revision": "7c506839120e81853118bd0867f858d9"
  },
  {
    "url": "assets/js/49.82dda07d.js",
    "revision": "9de4447b2c7dec293db9d793a23e08e7"
  },
  {
    "url": "assets/js/5.8f2ce821.js",
    "revision": "94deaaec96e472e7da8f6a2b00739634"
  },
  {
    "url": "assets/js/50.da6de409.js",
    "revision": "cfdb4d14e453cbfeee214526216aa407"
  },
  {
    "url": "assets/js/51.808577cb.js",
    "revision": "c76f4a35fa51a7ccd849ce17d146509f"
  },
  {
    "url": "assets/js/52.ff8db69d.js",
    "revision": "2e41f252a56ee23211f010e837d6933a"
  },
  {
    "url": "assets/js/53.93268bed.js",
    "revision": "e42df418598ddb2df0e553da3e761f77"
  },
  {
    "url": "assets/js/54.8cbb0ccb.js",
    "revision": "4e8db32c7b0440e24fc8138a542ef0ea"
  },
  {
    "url": "assets/js/55.2ab91365.js",
    "revision": "b7ca38162bbcd1068c03c596fd23835c"
  },
  {
    "url": "assets/js/56.3e42c6dd.js",
    "revision": "4d8588c23ecb3201a41dc9d44b6da4d1"
  },
  {
    "url": "assets/js/57.e6ffa270.js",
    "revision": "3e343e7d769ed25220e195c146f7dc29"
  },
  {
    "url": "assets/js/6.419c40af.js",
    "revision": "f243ea3a24b47faf51f948f9f8c0475d"
  },
  {
    "url": "assets/js/7.2052c33a.js",
    "revision": "a84331cfca05fc445d40d2438460c3a6"
  },
  {
    "url": "assets/js/8.1a6c59b5.js",
    "revision": "b1365b04a4a65eab73e7c3eab9fa39ca"
  },
  {
    "url": "assets/js/9.206e20fc.js",
    "revision": "8d76557cc762a0bc50f17c93bf02dcd6"
  },
  {
    "url": "assets/js/app.29a90900.js",
    "revision": "45b936ef171255cdd3d86e77541cf358"
  },
  {
    "url": "assets/js/vendors~notification.7d1ac707.js",
    "revision": "9ea6d6b649f9ccad1ed3ddd79bfa2645"
  },
  {
    "url": "config/index.html",
    "revision": "ef6258f610517cd6b9a29939f8c7bd8b"
  },
  {
    "url": "faq/index.html",
    "revision": "160598a98019e3e52e2e8170982086aa"
  },
  {
    "url": "guide/assets.html",
    "revision": "a76daf21d6ae14562424c269988d5bb7"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "a7320dcd312f7363118f2d94bbb528f5"
  },
  {
    "url": "guide/deploy.html",
    "revision": "24cbed8edfb084dfe9d7ceb59378a641"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "ddc4c6415e6bfe98858e34a2cba65c88"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "d41dd427595e794f48bd80c457bbfde0"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "cf0b7fca88f656e62eed45a8efeaa677"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "13cd3019627075894df098d820b80e1f"
  },
  {
    "url": "guide/i18n.html",
    "revision": "3ec1d16f04978d934d41c563f640cb90"
  },
  {
    "url": "guide/index.html",
    "revision": "de7be34b88a140f461d9cfe4fa646526"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "4dd24dd85361960fc2bc9f7bcd33604c"
  },
  {
    "url": "guide/markdown.html",
    "revision": "07167d0aee86fb1e579282aa64e76efc"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "4f4518c97061769ec125188fbe7e18ec"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "95975586d42709265fed49cc2f2444d6"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "cd10f5948ebf2f5e75d87209113fb31b"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "1fe65b78b2da4a4b8a3d0058637ee376"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "21d8a8586f12056ad7ddc887457bf1a2"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "2fd77f8b92e98a833464a04d58d3d570"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "aa86658b52c6646803cfef6bd5064bd3"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "3c170494ebaef0023439cbcffb498a88"
  },
  {
    "url": "plugin/index.html",
    "revision": "204723205cabb1c0fd225b069b36a1f1"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "96939f0ebe598eb6fe66982d31f87f8c"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "430eacec3982e4f8cbe4995da75c1768"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "1f11e938b2ce6d6ecc1e4de099a7879e"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "ac9ebbb312c6e0b44bbadd8368be86a6"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "4ab67beb1b916e15932b9195675cb44f"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "cc2f35bdef34bd4e6f880af95f49c2e9"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "115713366e9d02616eb9c8c3bb43ffac"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "2da89344afd2615f71119e998bcaad96"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "83d0880c501f10e6103795edb368900e"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "7c1a0d39b4399a9a1d68d4c12e54f320"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "3e222fc2662d881d31000bf150bcb41c"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "b75d35cf990df8fd9c208b5a2c634f01"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "0c06c695c9be47881a1d395d2ef68bf1"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "2ba42262c048cbcb78586613582cee63"
  },
  {
    "url": "theme/index.html",
    "revision": "91af56f563dba8243703c6b0eea837dc"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "7868e9b79d8d0e7c952c0d2cae3842d2"
  },
  {
    "url": "theme/option-api.html",
    "revision": "5cd5009a4859b8aca6b12a617e7ef505"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "d61aa429ff475c6f8e2a2cb082a77886"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "00617ae19f065f468e85cacb840fbb72"
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
