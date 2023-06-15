import { defineStore } from "pinia";
import { Config } from "../types/config";

export const useConfigStore = defineStore("useConfigStore", () => {
  const data = ref<Config>({});

  // action
  function setConfig(config: Config): void {
    data.value = config;
  }

  return {
    data,
    setConfig,
  };
});
