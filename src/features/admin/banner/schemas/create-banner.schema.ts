import { z } from "zod";

export const createBannerSchema = z.object({
  image_url: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Image is required"),
  is_active: z.boolean().optional(),
});

export type CreateBannerFormData = z.infer<typeof createBannerSchema>;
