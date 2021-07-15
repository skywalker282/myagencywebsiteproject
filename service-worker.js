importScripts("sw-toolbox.js");

self.addEventListener("install", (event) => {
  console.log("Service worker installed with success ;)");
});

toolbox.router.get("/*", toolbox.fatest, {
  cache: {
    name: "static-files-cache",
    maxEntries: 500,
    maxAgeSeconds: 3600 * 672,
  },
});
