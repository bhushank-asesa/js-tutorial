# A Progressive Web Application (PWA) 

> It is a web app built using standard web technologies (HTML, CSS, JavaScript) but enhanced with modern features to behave like a native app — offline support, installability, and push notifications.

* Here’s a breakdown of how to build a basic PWA using JavaScript.

## Key Features of a PWA

* **Responsive** – Works on any device.

* **Offline-capable** – Works even without internet.

* **Installable** – Can be added to the home screen.

* **App-like** – Fullscreen, splash screen, etc.

* **Secure** – Served over HTTPS.

## Technologies Used

* HTML, CSS, JS

* Service Worker

* Manifest file

* HTTPS server (local or remote)

## Project Structure

```css
/pwa-example/ │ ├── index.html ├── app.js ├── style.css ├── manifest.json ├── service-worker.js └── icons/ └── icon-192.png └── icon-512.png
```

### index.html

```html
<! DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="manifest.json" />
        <link rel="stylesheet" href="style.css" />
        <title>My PWA</title>
    </head>

    <body>
        <h1>Hello, Progressive Web App!</h1>
        <script src="app.js"></script>
    </body>

    </html>
```

### ⚙️ manifest.json

```json
{
  "name": "My PWA App", 
  "short_name": "PWAApp", 
  "start_url": "./index.html", 
  "display": "standalone", 
  "background_color": "#ffffff", 
  "theme_color": "#317EFB", 
  "icons": [

    {
      "src": "icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }

  ]
}
```

### 📜 app.js – Registering Service Worker

```js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {

        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker registered:', reg))
            .catch(err => console.error('SW registration failed:', err));

    });
}
```

### service-worker.js – Basic Offline Cache

```js
const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = ['/', '/index.html', '/style.css', '/app.js'];

self.addEventListener('install', event => {
    event.waitUntil(

        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))

    );
});

self.addEventListener('fetch', event => {
    event.respondWith(

        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })

    );
});
```

### Serve Over HTTPS

* For testing locally:

* Use a tool like Live Server

* Or use localhost with http-server via Node.js:

```bash
npx http-server -p 8080
```

### Test Your PWA

* Open in Chrome.

* Use DevTools > Application tab.

* Check "Service Workers", "Manifest", and try offline mode.
