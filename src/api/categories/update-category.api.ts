import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../utils/axios";
import type { CreateCategoryFormData } from "../../schemas/categories/create-category.schema";

export const updateCategory = async ({
  id,
  data,
}: {
  id: string;
  data: CreateCategoryFormData;
}) => {
  const formData = new FormData();
  formData.append("id", data.image);
  formData.append("name", data.name);
  formData.append("description", data.description);

  return apiClient
    .put(`/categories/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};

export const makeUpdateCategory = () =>
  useMutation({ mutationFn: updateCategory });
