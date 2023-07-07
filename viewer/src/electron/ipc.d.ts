import { IpcIHData, IpcSOData } from "@/helpers/model/ipc";

declare global {
  interface Window {
    getConfig: () => IpcIHData["GET_CONFIG"]["return"];

    updateConfig: (
      ...args: IpcIHData["UPDATE_CONFIG"]["args"]
    ) => IpcIHData["UPDATE_CONFIG"]["return"];

    // ref: https://github.com/VOICEVOX/voicevox/blob/f5ad963c3046f00b4eabd8b8e8babb5078f476c0/src/electron/preload.ts#L149
    onReceivedIPCMsg<T extends keyof IpcSOData>(
      channel: T,
      listener: (event: unknown, ...args: IpcSOData[T]["args"]) => void
    ): void;
  }
}

export {};
