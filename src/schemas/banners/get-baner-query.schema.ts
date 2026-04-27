import { z } from "zod";

export const getBannerQuerySchema = z.object({
  is_active: z.boolean().optional(),
  page: z.number().default(1).optional(),
  page_size: z.number().default(10).optional(),
});

export type GetBannerQuery = z.infer<typeof getBannerQuerySchema>;
