import { Config } from "./config";

export type IpcIHData = {
  GET_CONFIG: {
    args: [];
    return: Promise<Config>;
  };

  UPDATE_CONFIG: {
    args: [Config];
    return: Promise<void>;
  };
};
