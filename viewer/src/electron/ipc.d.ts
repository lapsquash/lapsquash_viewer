import { IpcIHData } from "@/helpers/model/types/ipc";

declare global {
  interface Window {
    getConfig: () => IpcIHData["GET_CONFIG"]["return"];
    updateConfig: (
      ...args: IpcIHData["UPDATE_CONFIG"]["args"]
    ) => IpcIHData["UPDATE_CONFIG"]["return"];
  }
}

export {};
