import { IpcIHData } from "@/helpers/model/types/ipc";

declare global {
  interface Window {
    getConfig: () => IpcIHData["GET_CONFIG"]["return"];
    setConfig: (
      ...args: IpcIHData["SET_CONFIG"]["args"]
    ) => IpcIHData["SET_CONFIG"]["return"];
    test: () => IpcIHData["HELLO"]["return"];
  }
}

export {};
