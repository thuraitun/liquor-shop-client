import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../utils/axios";

export const deleteCategory = async (id: string) => {
  return await apiClient.delete(`/categories/${id}/`).then((res) => res.data);
};

export const makeDeleteCategory = () =>
  useMutation({ mutationFn: deleteCategory });
