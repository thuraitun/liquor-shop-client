import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../utils/axios";
import type { CreateProductFormData } from "../../schemas/products/create-product.schema";

export const createProduct = async (data: CreateProductFormData) => {
  const formData = new FormData();

  formData.append("image", data.image);
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", String(data.price));
  formData.append("category_id", data.category_id);

  const res = await apiClient.post("/products/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const makeCreateProduct = () =>
  useMutation({ mutationFn: createProduct });
