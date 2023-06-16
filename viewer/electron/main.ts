import { app, BrowserWindow, dialog, ipcMain } from "electron";
import {
  default as installExtension,
  VUEJS_DEVTOOLS,
} from "electron-devtools-installer";
import path from "path";

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js
// │ ├─┬ preload
// │ │ └── index.js
// │ ├─┬ renderer
// │ │ └── index.html

process.env.ROOT = path.join(__dirname, "..");
process.env.DIST = path.join(process.env.ROOT, "dist-electron");
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? path.join(process.env.ROOT, "public")
  : path.join(process.env.ROOT, ".output/public");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

let win: BrowserWindow;
const preload = path.join(process.env.DIST, "preload.js");

function bootstrap() {
  win = new BrowserWindow({
    frame: false,
    titleBarStyle: "hidden",
    titleBarOverlay: true,
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();

    installExtension(VUEJS_DEVTOOLS)
      .then((name) => console.log(name))
      .catch((err) => console.log(err));
  } else {
    win.loadFile(path.join(process.env.VITE_PUBLIC!, "index.html"));
  }
}

app.whenReady().then(bootstrap);

ipcMain.handle("open-dialog", async (_e, _arg) => {
  return dialog
    .showOpenDialog(win, {
      properties: ["openFile"],
    })
    .then((result) => {
      if (result.canceled) return "";
      return result.filePaths[0];
    });
});
