import { useMutation } from "@tanstack/react-query";
import type { CreateBannerFormData } from "../../schemas/banners/create-banner.schema";
import { apiClient } from "../../utils/axios";

export const createBanner = async (data: CreateBannerFormData) => {
  const formData = new FormData();

  formData.append("image", data.image);

  const res = await apiClient.post("/banners/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const makeCreateBanner = () => useMutation({ mutationFn: createBanner });
