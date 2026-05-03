import { queryOptions } from "@tanstack/react-query";
import { apiClient } from "../../utils/axios";
import type { GetCategoryQuery } from "../../schemas/categories/get-category.schema";
import type { Category } from "../../type/categories/type";

export const getCategories = async (query?: GetCategoryQuery) => {
  return await apiClient
    .get<{ results: Category[]; count: number }>(`/categories/`, { params: query })
    .then((res) => res.data);
};

export const makeGetCategories = (query?: GetCategoryQuery) =>  
  queryOptions({
    queryFn: () => getCategories(query),
    queryKey: ["categories", query],
  });
