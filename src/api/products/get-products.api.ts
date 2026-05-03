import { queryOptions } from "@tanstack/react-query";
import { apiClient } from "../../utils/axios";
import type { Product } from "../../type/products/type";
import type { GetProductQuery } from "../../schemas/products/get-products.schema";

export const getProducts = async (query?: GetProductQuery) => {
  return await apiClient
    .get<{ results: Product[]; count: number }>(`/products/`, { params: query })
    .then((res) => res.data);
};

export const makeGetProducts = (query?: GetProductQuery) =>  
  queryOptions({
    queryFn: () => getProducts(query),
    queryKey: ["products", query],
  });
