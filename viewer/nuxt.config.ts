import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
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
  rootDir: "./src",
  nitro: {
    output: {
      publicDir: path.join(__dirname, "dist"),
    },
  },
});
