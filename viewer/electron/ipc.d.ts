declare global {
  interface Window {
    openDialog: () => Promise<String>;
  }
}

export {};
