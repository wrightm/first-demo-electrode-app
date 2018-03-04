module.exports = {
  cache: {
    cacheId: "my-first-electrode-app",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "my-first-electrode-app",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
