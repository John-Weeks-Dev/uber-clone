const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // pwa: {
  //   name: 'My App',
  //   themeColor: '#1a1a1a',
  //   msTileColor: '#1a1a1a',
  //   appleMobileWebAppCapable: 'yes',
  //   appleMobileWebAppStatusBarStyle: 'black',

  //   // configure the workbox plugin
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     // swSrc is required in InjectManifest mode.
  //     // swSrc: 'dev/sw.js',
  //     // ...other Workbox options...
  //   }
  // }
})
