import { ipcRenderer } from "electron";

console.log("---- electron/preload.ts ----");
window.openDialog = async () => await ipcRenderer.invoke("open-dialog");
window.readConfig = async () => await ipcRenderer.invoke("read-config");
window.saveConfig = async () => await ipcRenderer.invoke("save-config");
