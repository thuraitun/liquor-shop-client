import { queryOptions } from "@tanstack/react-query";
import type { Product } from "../../type/products/type";
import { apiClient } from "../../utils/axios";

export const getProductById = async (id: string) => {
  return await apiClient
    .get<Product>(`/products/${id}/`)
    .then((res) => res.data);
};

export const makeGetProductById = (id: string) =>
  queryOptions({
    queryFn: () => getProductById(id),
    queryKey: ["productById", id],
  });
