import { IpcIHData } from "@/helpers/model/types/ipc";
import { ipcRenderer } from "electron";

function ipcRendererInvoke<T extends keyof IpcIHData>(
  channel: T,
  ...args: IpcIHData[T]["args"]
): IpcIHData[T]["return"] {
  console.log(`ipcRendererInvoke: ${channel}`);
  return ipcRenderer.invoke(channel, ...args);
}

window.setConfig = async (config) =>
  await ipcRendererInvoke("SET_CONFIG", config);
window.getConfig = async () => await ipcRendererInvoke("GET_CONFIG");
