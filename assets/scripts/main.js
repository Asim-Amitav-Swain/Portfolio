if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw_cached_pages.js", {scope : '/'})
      .then((reg) => console.log(`Service Worker Registered : ` + reg))
      .catch((err) => console.log(err));
  });
}