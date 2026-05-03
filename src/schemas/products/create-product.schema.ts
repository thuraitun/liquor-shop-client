import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Image is required"),
  price: z.string().min(0, "Price is required"),
  category_id: z.string().min(1, "Category is required"),
  is_active: z.boolean().default(true).optional(),
});

export type CreateProductFormData = z.infer<typeof createProductSchema>;
