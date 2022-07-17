'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "180761c91e2eec4636256322341744fe",
"assets/assets/images/1bae0e43f3ce877559675f43cb2e1098fb8db524.png": "53b2f8761c8482ae284c51dfddffcdc6",
"assets/assets/images/21877573036c4d0ba6c780eab2a00047": "fd6bcfd00f81d0de28792387323ef9ef",
"assets/assets/images/28dd304b8e846c7a3da40aad43b53143998a58b5.png": "6f0ca6f3adfbb0c027d05c1b1f26d934",
"assets/assets/images/2902de8c497bfeed96f392d8ccf7b1633745b5cb.png": "188fa9ec331c9a6d62ac90cf91108d49",
"assets/assets/images/2b7eae9047b4fa95b71f17bdebc0371ca488f595.png": "5ae985da4f0e01eb9697986ab7c61dd1",
"assets/assets/images/2c0126ef63e54f6e855129b58cd69caa": "77c995b9a7690d86719fdc8b2ff641e5",
"assets/assets/images/3d76d296fa93ad37f498559509e578546aabc056.png": "220a120d08891789826c054029fe65a2",
"assets/assets/images/3ed0e70f9fd909a54939cffb88a581ad242a07ad.png": "d2060e7b3d0b697d11225885926c24d6",
"assets/assets/images/3f3d8e1324a0b7ea4f9529c5e20ca9039d0f29aa.png": "fd6bcfd00f81d0de28792387323ef9ef",
"assets/assets/images/4118d0bd3209ea7448dc96d00d9c2416ad04a180.png": "e63969005edca4f3493a065d747c36cb",
"assets/assets/images/41577659fbbcc66cf470e16ebf6aa777dd2a3f62.png": "e66499c9070e7c1c0006f513e8c08e00",
"assets/assets/images/475f9ceb379dc75c575ec979606e670109dcb86f.png": "bf43dbadad60a8d9c7ea6a4d1bfa1259",
"assets/assets/images/512e87949f05b6129f3aa890d5632bcaa7faa1d5.png": "0c4f0f248281ef2ffb51188acf358342",
"assets/assets/images/5dc7416194965cc5a6c686bd6dbff910c09c845d.png": "77c995b9a7690d86719fdc8b2ff641e5",
"assets/assets/images/5e23b99d9b3ee8908e8ab5d02ac1d8308a013cdb.png": "ad33a2c1fd79c5bb23bc113f2c0f8a40",
"assets/assets/images/7a7666b9bf8984e03a5298eb66a5d598dc0cc0d1.png": "74ec1577b9877e189f556380bffcd146",
"assets/assets/images/7b6e6ccfb837407fa8db73f7704a4a2c": "e064a0e286f366385c5662b31cae0b7b",
"assets/assets/images/8e94f9f11297493688eca6b196302e09": "6f0ca6f3adfbb0c027d05c1b1f26d934",
"assets/assets/images/9c41b359452e81bba6240b95cc06df83c02886a3.png": "fd17053bcd8d718ffac35912c93331ea",
"assets/assets/images/9f539444a490f80aad7fb6f53c8dc3d863c5e2bd.png": "9a88db66bb8dabeb23e8e9b92429261a",
"assets/assets/images/a21e87d9010c64d795c19e123e616f6311c0b3e7.png": "57e6984c5d73cf5eaab5c18e779f4260",
"assets/assets/images/a7cdda22facfb070c3c0323dac7b301ed0844bc6.png": "e064a0e286f366385c5662b31cae0b7b",
"assets/assets/images/aafa613d71d7316fe7484b5db20351a2027ea5d5.png": "d65a3547734133e71d6f21a94c140d1a",
"assets/assets/images/af744d4eeffb50dde364b954faed09df2199fca3.png": "74853f38d457723dadb4de8e15fb92f9",
"assets/assets/images/b86fb5b39ed34ca49ed3275cc450b9a4": "74853f38d457723dadb4de8e15fb92f9",
"assets/assets/images/b873e89d2ab86ab88178bc4908f7a74af398fcdf.png": "d5fc0940fb7e69c9e46246d94bca2252",
"assets/assets/images/c9b768c9866a4577ab1cb48d51de3aabfb90988b.png": "57648264838b55ef09d17f808917dc85",
"assets/assets/images/cc140cc15668acf87c7185d35be1fea8b1da95fd.png": "6178202f1ca4dd9a7837ee83eff01d46",
"assets/assets/images/cc4a5bce893077c9942ca74a30a0b9fbe1bd308a.png": "dfefe295f1c5ae3cf6e0d926ac537e83",
"assets/assets/images/cd6584f6702d429835720cd261b497fc4f154e56.png": "fcb916ac040a7373b5f671e58736a7dc",
"assets/assets/images/e86b1a58edac4decef7d3331c8b7169d259e4e8b.png": "4701f0ce7f30018b8e116bc29f118dac",
"assets/assets/images/f0345535c70c3cc36739b088fbdf71e09d86fc73.png": "5c9bdaad459342b7554e112de457febb",
"assets/assets/images/f2638ef1075d038dd8e8d9398ba1b421f7e89411.png": "a8033f2f9edc8d753fa7c43bda97a8d5",
"assets/assets/images/fd5cfc035aaa35727e00d14fa239fad66f96ac50.png": "708700aa3ab6079bb213de7b460331e6",
"assets/assets/images/index.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "a317dc7d78774c294022a3e104ea7c59",
"assets/fonts/Manrope-500.ttf": "6196e0dab83345b15290ee22620358c1",
"assets/fonts/Manrope-700.ttf": "656753569aef606dd528cc6bdf672cdc",
"assets/fonts/Manrope-800.ttf": "47e356f61dca7aa2dfba5593e000c4f1",
"assets/fonts/Manrope-regular.ttf": "0b726174d2b7e161b9e5e8125bf7751a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3bfbbf42ade2b9a23687e5b5ab9440f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "766c8cc582887d79fd06bb0d7caf09e0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2597d4cfaf17d7f55d0fe75a0570753b",
"/": "2597d4cfaf17d7f55d0fe75a0570753b",
"main.dart.js": "e45f7f7d364023cde093a67eec2b9b16",
"manifest.json": "290285abf1b02519753940a8a015426e",
"version.json": "c72dd9007e6fa6ce5029cbe514299506"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
