// note: ここで `@` import を行わない！！！
import { ipcRenderer } from "electron";
import { IpcIHData, ipcRendererOn } from "../helpers/model/ipc";

function ipcRendererInvoke<T extends keyof IpcIHData>(
  channel: T,
  ...args: IpcIHData[T]["args"]
): IpcIHData[T]["return"] {
  console.log(`ipcRendererInvoke: ${channel}`);
  return ipcRenderer.invoke(channel, ...args);
}

window.updateConfig = async (config) =>
  await ipcRendererInvoke("UPDATE_CONFIG", config);

window.getConfig = async () => await ipcRendererInvoke("GET_CONFIG");

window.onReceivedIPCMsg = (channel, callback) => {
  console.log(`onReceivedIPCMsg: ${channel}`);
  return ipcRendererOn(channel, callback);
};
