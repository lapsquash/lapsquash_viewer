import { shell } from "electron";

export const runAuthRedirect = async (): Promise<void> => {
  const config = useRuntimeConfig().public;
  const queries = {
    client_id: config.clientId,
    response_type: "code",
    redirect_uri: config.redirectUri,
    response_mode: "query",
    scope: "Sites.ReadWrite.All",
  };
  const query = new URLSearchParams(queries).toString();
  const url = [
    "https://login.microsoftonline.com/",
    config.tenantId,
    "/oauth2/v2.0/authorize?",
    query,
  ];
  await shell.openExternal(url.join(""));
};
