if (!self.define) {
  let e,
    s = {};
  const i = (i, a) => (
    (i = new URL(i + '.js', a).href),
    s[i] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => i(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (n(...e), t));
  };
}
define(['./workbox-6e8befe7'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/GGxKVBumG6FAZ7EkZPWH6/_buildManifest.js',
          revision: '535c7b84672cc101d453b7e4573da30e',
        },
        {
          url: '/_next/static/GGxKVBumG6FAZ7EkZPWH6/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/228.51843d726fd799af.js',
          revision: '51843d726fd799af',
        },
        {
          url: '/_next/static/chunks/276-e6f7b31514645887.js',
          revision: 'e6f7b31514645887',
        },
        {
          url: '/_next/static/chunks/387.eb9f2b7d1b1cf272.js',
          revision: 'eb9f2b7d1b1cf272',
        },
        {
          url: '/_next/static/chunks/759.3b866f380431f262.js',
          revision: '3b866f380431f262',
        },
        {
          url: '/_next/static/chunks/808.05d90aa153b6e11a.js',
          revision: '05d90aa153b6e11a',
        },
        {
          url: '/_next/static/chunks/framework-2c79e2a64abdb08b.js',
          revision: '2c79e2a64abdb08b',
        },
        {
          url: '/_next/static/chunks/main-129e5da6b2161174.js',
          revision: '129e5da6b2161174',
        },
        {
          url: '/_next/static/chunks/pages/_app-f7d22d6361610185.js',
          revision: 'f7d22d6361610185',
        },
        {
          url: '/_next/static/chunks/pages/_error-8353112a01355ec2.js',
          revision: '8353112a01355ec2',
        },
        {
          url: '/_next/static/chunks/pages/index-09ea7ad32d96b78e.js',
          revision: '09ea7ad32d96b78e',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-bd8603b2bad77934.js',
          revision: 'bd8603b2bad77934',
        },
        {
          url: '/_next/static/css/2a77ab5be4a6d1b3.css',
          revision: '2a77ab5be4a6d1b3',
        },
        {
          url: '/_next/static/css/42031c31cc33f3b0.css',
          revision: '42031c31cc33f3b0',
        },
        {
          url: '/_next/static/css/6e96af47fe3d10eb.css',
          revision: '6e96af47fe3d10eb',
        },
        {
          url: '/_next/static/css/e9ac369afde945e2.css',
          revision: 'e9ac369afde945e2',
        },
        {
          url: '/_next/static/media/PublicSans-Variable-Italic.c8744400.woff2',
          revision: 'c8744400',
        },
        {
          url: '/_next/static/media/PublicSans-Variable.d4550aa9.woff2',
          revision: 'd4550aa9',
        },
        { url: '/favicon.ico', revision: '07859e7e55808dbe435187876d83f0db' },
        {
          url: '/fonts/PublicSans-Variable-Italic.woff2',
          revision: '91d30d31c4222f727c92b8d473d7ab15',
        },
        {
          url: '/fonts/PublicSans-Variable.woff2',
          revision: '7825aad1e5cf771dc7c8140c2f8e056a',
        },
        {
          url: '/icons/android-chrome-96x96.png',
          revision: '16e266818d1a502918e280cf299e913c',
        },
        {
          url: '/icons/apple-touch-icon.png',
          revision: 'cd318b4f1da88c17a141baf2df5f7fd4',
        },
        {
          url: '/icons/favicon-16x16.png',
          revision: '293dec539ab90d31a041bd34d33c6aff',
        },
        {
          url: '/icons/favicon-32x32.png',
          revision: '8c8321a91245ad14e5f14f4d9188c0f2',
        },
        {
          url: '/icons/favicon.ico',
          revision: '07859e7e55808dbe435187876d83f0db',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: '4c0b6f0c4f511868aa9af16448a58de6',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: '165126cf793d221c33ed846378a4be7b',
        },
        {
          url: '/icons/icon-96x96.png',
          revision: '1e2bf278fc8cac2339493f34dfb93321',
        },
        {
          url: '/icons/mstile-150x150.png',
          revision: 'e64a63b78980229a13995383552eeaa4',
        },
        {
          url: '/images/empty-products-min.png',
          revision: 'a5c570097cae082a0bc32ad33fbba8d5',
        },
        {
          url: '/images/logo-ecommers.png',
          revision: '0756d50f5a8797e43153e101e31bc44b',
        },
        { url: '/manifest.json', revision: '1f069464158599997a8d44b838a02aa9' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: i,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:woff2)$/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
      new e.CacheFirst({
        cacheName: 'images',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https?.*/,
      new e.StaleWhileRevalidate({
        cacheName: 'offline',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 200 }),
          new e.CacheableResponsePlugin({ statuses: [0, 200] }),
        ],
      }),
      'GET'
    );
});
