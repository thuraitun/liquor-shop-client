import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../utils/axios";

export const deleteProduct = async (id: string) => {
  return await apiClient.delete(`/products/${id}/`).then((res) => res.data);
};

export const makeDeleteProduct = () =>
  useMutation({ mutationFn: deleteProduct });
