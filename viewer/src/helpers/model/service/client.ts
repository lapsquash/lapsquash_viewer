import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "@analyzer";

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8787/trpc",
    }),
  ],
});
