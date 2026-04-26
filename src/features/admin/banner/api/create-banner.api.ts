import { apiClient } from "../../../../utils/axios";
import type { CreateBannerFormData } from "../schemas/create-banner.schema";

export const createBanner = async (data: CreateBannerFormData) => {
  const formData = new FormData();

  formData.append("image_url", data.image_url);

  if (data.is_active !== undefined) {
    formData.append("is_active", String(data.is_active));
  }

  const res = await apiClient.post("/banners/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
