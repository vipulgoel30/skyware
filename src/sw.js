/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute, setDefaultHandler } from 'workbox-routing'
import { CacheFirst, NetworkFirst } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'

clientsClaim() // This should be at the top of the service worker
self.skipWaiting()

const revision = `${Date.now()}`
const urlsToCache = (self.__WB_MANIFEST || []).concat([
    { url: '/', revision },
    { url: '/blogs', revision },
    { url: '/careers', revision },
    { url: '/team', revision }
]).filter(({ url }) => url !== '/manifest.json')
precacheAndRoute(urlsToCache)

setDefaultHandler(new CacheFirst())

registerRoute(({ url }) => url.pathname === '/manifest.json', new NetworkFirst({
    cacheName: 'manifest',
    plugins: [new CacheableResponsePlugin({ statuses: [200] })]
}))

registerRoute(({ request }) => request.destination === 'image', new CacheFirst({
    cacheName: 'images',
    plugins: [new CacheableResponsePlugin({ statuses: [200] })]
}))