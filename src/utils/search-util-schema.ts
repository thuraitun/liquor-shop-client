import { z } from "zod";

export const defaultSearchParamsSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().nonnegative().default(10),
  start: z.coerce.date().optional(),
  end: z.coerce.date().optional(),
  search: z.string().optional(),
  skip: z.coerce.number().int().nonnegative().default(0),
});
