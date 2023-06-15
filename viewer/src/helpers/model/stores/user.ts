import { inferAsyncReturnType } from "@trpc/server";
import { defineStore } from "pinia";
import { analyzer } from "../service/client";

export const useUserStore = defineStore("user", () => {
  //
  const meInfoResponse = () => analyzer.protected("").me.info.query();

  // state
  const meInfo = ref<inferAsyncReturnType<typeof meInfoResponse>>();

  // actions
  async function getMeInfo(): Promise<void> {
    meInfo.value = await meInfoResponse();
  }

  return {
    meInfo,
    getMeInfo,
  };
});
