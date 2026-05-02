import { z } from "zod";
import { defaultSearchParamsSchema } from "../../utils/search-util-schema";

export const getCategoryQuerySchema = defaultSearchParamsSchema.extend({
  is_active: z.boolean().optional(),
  name: z.string().optional(),
});

export type GetCategoryQuery = z.infer<typeof getCategoryQuerySchema>;
