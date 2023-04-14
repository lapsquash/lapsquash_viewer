import { app, BrowserWindow } from "electron";
app.whenReady().then(() => {
  new BrowserWindow({ frame: false }).loadURL(
    process.env["VITE_DEV_SERVER_URL"]!
  );
});
