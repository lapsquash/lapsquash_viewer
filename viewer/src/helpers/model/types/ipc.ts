import { Config } from "./config";

export type IpcIHData = {
  GET_CONFIG: {
    args: [];
    return: Promise<Config>;
  };

  SET_CONFIG: {
    args: [Config];
    return: Promise<void>;
  };

  TEST: {
    args: [];
    return: void;
  };
};
