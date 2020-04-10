if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("assets/scripts/sw_cached_pages.js")
      .then((reg) => console.log(`Service Worker Registered : ` + reg))
      .catch((err) => console.log(err));
  });
}
