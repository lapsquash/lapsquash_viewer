import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  modules: ["nuxt-electron"],
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: "electron/main.ts",
      },
      {
        entry: "electron/preload.ts",
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload();
        },
      },
    ],
    renderer: {},
  },
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins?.push(vuetify());
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: ["@/assets/main.scss"],
  runtimeConfig: {
    public: {
      tenantId: "",
      clientId: "",
      redirectUri: "",
      relayServerUrl: "",
    },
  },
  rootDir: "src/",
});
