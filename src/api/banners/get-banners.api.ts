import { queryOptions } from "@tanstack/react-query";
import type { GetBannerQuery } from "../../schemas/banners/get-baner-query.schema";
import { apiClient } from "../../utils/axios";
import type { Banner } from "../../type/banners/type";

export const getBanners = async (query?: GetBannerQuery) => {
  return await apiClient
    .get<{ results: Banner[] }>(`/banners/`, { params: query })
    .then((res) => res.data.results);
};

export const makeGetBanners = (query?: GetBannerQuery) =>
  queryOptions({
    queryFn: () => getBanners(query),
    queryKey: ["banners", query],
  });
