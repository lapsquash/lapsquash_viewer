import { inferAsyncReturnType } from "@trpc/server";
import { defineStore } from "pinia";
import { analyzer } from "../service/client";
import { useConfigStore } from "./config";

const apiGetMe = (credential: string) =>
  analyzer.protected(credential).me.info.query();
type Info = inferAsyncReturnType<typeof apiGetMe>;

export const useUserStore = defineStore("user", () => {
  // state
  const info = ref<Info>();

  // Actions
  const init = async () => {
    const credential = (await useConfigStore()).data.value.credential;
    if (!credential) {
      throw new Error("credential is not set");
    }

    info.value = await apiGetMe(credential);
  };

  return {
    info,
    init,
  };
});
