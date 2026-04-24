import { queryOptions } from "@tanstack/react-query";
import { apiClient } from "../../../utils/axios";

export const getCategories = async () => {
  return await apiClient.get("/products").then((res) => res.data);
};

export const makeGetCategories = () =>
  queryOptions({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
