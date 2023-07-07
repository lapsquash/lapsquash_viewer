import { readFile, readdir, stat, writeFile } from "fs/promises";
import path from "path";
type NodeError = Error & NodeJS.ErrnoException;

export const isExistFile = (filePath: string) => {
  try {
    stat(filePath);
  } catch (e) {
    if (e instanceof Error) {
      const err = e as NodeError;
      if (err.code === "ENOENT") {
        console.log("file is not exists");
      }
    }
    return false;
  }
  return true;
};

export const makeFileIfNotExists = async (
  filePath: string,
  data: object
): Promise<void> => {
  if (!isExistFile(filePath)) {
    await write(filePath, data);
  }
};

export const write = async (filePath: string, data: object) => {
  try {
    await writeFile(filePath, JSON.stringify(data, null, 2), {
      encoding: "utf-8",
    });
  } catch (e) {
    console.log("write file failed: " + e);
    return false;
  }
  return true;
};

export const readJsonFile = async (filePath: string) => {
  let content;
  try {
    content = await readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    console.log("read file failed: " + e);
    return null;
  }
};

export const getJsonFileList = async (directoryPath: string) => {
  let list: string[];
  try {
    const logFileList = await readdir(directoryPath);
    list = logFileList.filter(async (file) => {
      const fileStat = await stat(path.join(directoryPath, file));
      return fileStat.isFile() && /.*\.json$/.test(file);
    });
  } catch (e) {
    console.log("directory load failed: " + e);
    return false;
  }
  return list;
};
