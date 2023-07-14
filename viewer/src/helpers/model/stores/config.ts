import { defineStore } from "pinia";
import { Config } from "../types/config";

export const useConfigStore = defineStore("config", () => {
  const data = ref<Config>({
    credential: "",
  });

  // hook
  watch(
    () => data.value,
    (value) => {
      console.log("config updated");
      window.updateConfig(value ?? {});
    }
  );

  // action
  function updateConfig(config: Config): void {
    data.value = config;
  }

  return {
    data,
    updateConfig,
  };
});
