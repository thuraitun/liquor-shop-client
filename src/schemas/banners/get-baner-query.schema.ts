import { z } from "zod";
import { defaultSearchParamsSchema } from "../../utils/search-util-schema";

export const getBannerQuerySchema = defaultSearchParamsSchema.extend(
  z.object({
    is_active: z.boolean().optional(),
  }),
);

export type GetBannerQuery = z.infer<typeof getBannerQuerySchema>;
