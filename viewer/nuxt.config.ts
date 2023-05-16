import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins?.push(vuetify());
    },
  },
  modules: ["nuxt-electron"],
  electron: {
    renderer: {},
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
});
