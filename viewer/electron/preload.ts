import { ipcRenderer } from "electron";

console.log("---- electron/preload.ts ----");
window.openDialog = async () => await ipcRenderer.invoke("open-dialog");
