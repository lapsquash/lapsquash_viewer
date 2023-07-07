import { Config, configSchema } from "@/helpers/model/types/config";
import { IpcIHData } from "@/helpers/model/types/ipc";
import { BrowserWindow, IpcMainInvokeEvent, app, ipcMain } from "electron";
import {
  VUEJS_DEVTOOLS,
  default as installExtension,
} from "electron-devtools-installer";
import { mkdir, readFile, writeFile } from "fs/promises";
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

function ipcMainHandle<T extends keyof IpcIHData>(
  channel: T,
  listener: (
    event: IpcMainInvokeEvent,
    ...args: IpcIHData[T]["args"]
  ) => IpcIHData[T]["return"] | Promise<IpcIHData[T]["return"]>
): void {
  console.log(`${channel} handled`);
  ipcMain.handle(channel, listener);
}

/*
  以下, ipcMainHandleの呼び出し
*/

const configDir = `${process.env["APPDATA"]}/lapsquash/viewer`;
const configPath = `${process.env["APPDATA"]}/lapsquash/viewer/config.json`;

ipcMainHandle("SET_CONFIG", async (_, arg: Config): Promise<void> => {
  configSchema.parse(arg);
  await mkdir(configDir, { recursive: true });
  await writeFile(configPath, JSON.stringify(arg));
});

ipcMainHandle("GET_CONFIG", async () => {
  let data: string = "";
  try {
    data = await readFile(configPath, "utf-8");
  } catch (err: unknown) {
    const _err = err as Error & NodeJS.ErrnoException;
    if (_err.code === "ENOENT") {
      console.warn("Config file not found");

      await mkdir(configDir, { recursive: true });
      await writeFile(configPath, "{}");
    }
  }

  return configSchema.parse(JSON.parse(data));
});

ipcMain.handle("TEST", async () => {
  console.log("test invoked!");
});
