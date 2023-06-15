import { z } from "zod";

export const configSchema = z.object({
  credential: z.string().optional(),
});

export type Config = z.infer<typeof configSchema>;
