import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../utils/axios";
import type { CreateCategoryFormData } from "../../schemas/categories/create-category.schema";

export const createCategory = async (data: CreateCategoryFormData) => {
  const formData = new FormData();

  formData.append("image", data.image);
  formData.append("name", data.name);
  formData.append("description", data.description);

  const res = await apiClient.post("/categories/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const makeCreateCategory = () =>
  useMutation({ mutationFn: createCategory });
