import { z } from "zod";
import { defaultSearchParamsSchema } from "../../utils/search-util-schema";

export const getProductQuerySchema = defaultSearchParamsSchema.extend({
  is_active: z.boolean().optional(),
  name: z.string().optional(),
});

export type GetProductQuery = z.infer<typeof getProductQuerySchema>;
