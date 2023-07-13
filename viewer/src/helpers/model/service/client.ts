import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "@analyzer";

export const analyzer = {
  public: createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: useRuntimeConfig().public.relayServerUrl,
      }),
    ],
  }),
  protected: (credential: string) =>
    createTRPCProxyClient<AppRouter>({
      links: [
        httpBatchLink({
          url: useRuntimeConfig().public.relayServerUrl,
          headers: {
            authorization: `Bearer ${credential}`,
          },
        }),
      ],
    }),
};
