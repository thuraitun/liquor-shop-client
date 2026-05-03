import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../utils/axios";
import type { CreateProductFormData } from "../../schemas/products/create-product.schema";

export const updateProduct = async ({
  id,
  data,
}: {
  id: string;
  data: CreateProductFormData;
}) => {
  const formData = new FormData();
  formData.append("image", data.image);
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", String(data.price));
  formData.append("category_id", data.category_id);

  return apiClient
    .put(`/products/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};

export const makeUpdateProduct = () =>
  useMutation({ mutationFn: updateProduct });
