// note: ここで `@` import を行わない！！！
import { BrowserWindow, app } from "electron";
import {
  VUEJS_DEVTOOLS,
  default as installExtension,
} from "electron-devtools-installer";
import path from "path";
import { ipcMainSend } from "../helpers/model/ipc";
import { registerIpc } from "./helper/ipc";

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js
// │ ├─┬ preload
// │ │ └── index.js
// │ ├─┬ renderer
// │ │ └── index.html

process.env["ROOT"] = path.join(__dirname, "..");
process.env["DIST"] = path.join(process.env["ROOT"], "dist-electron");
process.env["VITE_PUBLIC"] = process.env["VITE_DEV_SERVER_URL"]
  ? path.join(process.env["ROOT"], "public")
  : path.join(process.env["ROOT"], ".output/public");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

let win: BrowserWindow;
const preload = path.join(process.env["DIST"], "preload.js");

registerIpc();

/**
 * send `LOAD_URL` to renderer process
 * @param routePath `/first/second` format
 */
const routeFromRoutePath = (routePath: string) => {
  ipcMainSend(win, "LOAD_URL", routePath);
};

// deep linking. `lapsq://` protocol
if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient("lapsq", process.execPath, [
      path.resolve(process.argv[1]!),
    ]);
  }
} else {
  app.setAsDefaultProtocolClient("lapsq");
}

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) app.quit();

app.on("second-instance", (_, commandLine, ___) => {
  // Someone tried to run a second instance, we should focus our window.
  if (win) {
    if (win.isMinimized()) win.restore();
    win.focus();
  }

  const url = commandLine.at(-1)!;
  console.log(`Received a request to open the URL: ${url}`);
  const routePath = url.replace(/lapsq:\/\//, "/");
  routeFromRoutePath(routePath);
});

// TODO: impl `open-url` event handler
app.on("open-url", (_, __) => undefined);

app.whenReady().then(() => {
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

  if (process.env["VITE_DEV_SERVER_URL"]) {
    win.loadURL(process.env["VITE_DEV_SERVER_URL"]);
    win.webContents.openDevTools();

    installExtension(VUEJS_DEVTOOLS)
      .then((name) => console.log(name))
      .catch((err) => console.log(err));
  } else {
    win.loadFile(path.join(process.env["VITE_PUBLIC"]!, "index.html"));
  }
});
