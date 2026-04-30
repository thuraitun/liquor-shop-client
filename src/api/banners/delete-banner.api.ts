import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../utils/axios";

export const deleteBanner = async (id: string) => {
  return await apiClient.delete(`/banners/${id}`).then((res) => res.data);
};

export const makeDeleteBanner = () => useMutation({ mutationFn: deleteBanner });
