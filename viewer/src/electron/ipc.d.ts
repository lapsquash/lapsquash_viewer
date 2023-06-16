declare global {
  interface Window {
    openDialog: () => Promise<String>;
    readConfig: () => Promise<Config>;
    saveConfig: (config: Config) => Promise<void>;
  }
}

export {};
