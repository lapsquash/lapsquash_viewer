import { BrowserWindow, app, dialog, ipcMain } from "electron";
import {
  VUEJS_DEVTOOLS,
  default as installExtension,
} from "electron-devtools-installer";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { Config, configSchema } from "../helpers/model/types/config";

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

  if (process.env["VITE_DEV_SERVER_URL"]) {
    win.loadURL(process.env["VITE_DEV_SERVER_URL"]);
    win.webContents.openDevTools();

    installExtension(VUEJS_DEVTOOLS)
      .then((name) => console.log(name))
      .catch((err) => console.log(err));
  } else {
    win.loadFile(path.join(process.env["VITE_PUBLIC"]!, "index.html"));
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

const configDir = `${process.env["APPDATA"]}/lapsquash/viewer`;
const configPath = `${process.env["APPDATA"]}/lapsquash/viewer/config.json`;

ipcMain.handle("save-config", async (e, arg: Config): Promise<void> => {
  configSchema.parse(arg);
  await mkdir(configDir, { recursive: true });
  await writeFile(configPath, JSON.stringify(arg));
});

ipcMain.handle("read-config", async (e, _arg): Promise<Config> => {
  console.log(configDir);
  const data = await readFile(configPath, "utf-8");
  return configSchema.parse(JSON.parse(data));
});
