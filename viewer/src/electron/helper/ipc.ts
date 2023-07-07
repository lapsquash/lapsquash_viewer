import { mkdir, readFile, writeFile } from "fs/promises";
import { ipcMainHandle } from "../../helpers/model/ipc";
import { Config, configSchema } from "../../helpers/model/types/config";

const configDir = `${process.env["APPDATA"]}/lapsquash/viewer`;
const configPath = `${process.env["APPDATA"]}/lapsquash/viewer/config.json`;

ipcMainHandle("UPDATE_CONFIG", async (_, arg: Config): Promise<void> => {
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

export const registerIpc = (): void => {};
