import { queryOptions } from "@tanstack/react-query";
import { apiClient } from "../../../utils/axios";
import type { Banner } from "../type";

export const getBanners = async () => {
  return await apiClient
    .get<Banner[]>("/banners/")
    .then((res) => res.data);
};

export const makeGetBanners = () =>
  queryOptions({
    queryKey: ["banners"],
    queryFn: getBanners,
  });
