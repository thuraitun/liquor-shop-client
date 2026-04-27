import { apiClient } from "../../../../utils/axios";
import type { CreateBannerFormData } from "../schemas/create-banner.schema";

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
