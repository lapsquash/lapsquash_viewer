import {
  BrowserWindow,
  IpcMainInvokeEvent,
  IpcRenderer,
  IpcRendererEvent,
  ipcMain,
  ipcRenderer,
} from "electron";
import { Config } from "./types/config";

// ref: https://github.com/VOICEVOX/voicevox/blob/ca0b06497df7e2d5156384848a353b910aa9f86f/src/electron/ipc.ts

// invoke, handle
export function ipcMainHandle<T extends keyof IpcIHData>(
  channel: T,
  listener: (
    event: IpcMainInvokeEvent,
    ...args: IpcIHData[T]["args"]
  ) => IpcIHData[T]["return"]
): void;

export function ipcMainHandle(
  channel: string,
  listener: (event: IpcMainInvokeEvent, ...args: unknown[]) => unknown
): void {
  console.log(`ipcMainHandle: ${channel}`);
  ipcMain.handle(channel, listener);
}

// send, on
export function ipcMainSend<T extends keyof IpcSOData>(
  win: BrowserWindow,
  channel: T,
  ...args: IpcSOData[T]["args"]
): void;

export function ipcMainSend(
  win: BrowserWindow,
  channel: string,
  ...args: unknown[]
): void {
  console.log(`ipcMainSend: ${channel} args: ${args}`);
  win.webContents.send(channel, ...args);
}

export function ipcRendererOn<T extends keyof IpcSOData>(
  channel: T,
  listener: (event: IpcRendererEvent, ...args: IpcSOData[T]["args"]) => void
): IpcRenderer;

export function ipcRendererOn(
  channel: string,
  listener: (event: IpcRendererEvent, ...args: unknown[]) => void
) {
  console.log(`ipcRendererOn: ${channel}`);
  return ipcRenderer.on(channel, listener);
}

// invoke, handle
export type IpcIHData = {
  GET_CONFIG: {
    args: [];
    return: Promise<Config>;
  };

  UPDATE_CONFIG: {
    args: [Config];
    return: Promise<void>;
  };
};

// send, on
export type IpcSOData = {
  LOAD_URL: {
    args: [string];
    return: void;
  };
};
