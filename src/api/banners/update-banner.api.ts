import { useMutation } from "@tanstack/react-query";
import type { CreateBannerFormData } from "../../schemas/banners/create-banner.schema";
import { apiClient } from "../../utils/axios";

export const updateBanner = async ({
  id,
  data,
}: {
  id: string;
  data: CreateBannerFormData;
}) => {
  return apiClient.put(`/banners/${id}/`, data).then((res) => res.data);
};

export const makeUpdateBanner = () => useMutation({ mutationFn: updateBanner });
