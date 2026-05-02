import { Modal } from "@mantine/core";
import type { Banner } from "../../../../type/banners/type";
import { BannerForm } from "./banner-form";
import { useQueryClient } from "@tanstack/react-query";
import type { CreateBannerFormData } from "../../../../schemas/banners/create-banner.schema";
import { makeUpdateBanner } from "../../../../api/banners/update-banner.api";
import { toast } from "../../../../utils/toast";
import { AxiosError } from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  banner: Banner | null;
};

export const EditBannerModal = ({ isOpen, onClose, banner }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = makeUpdateBanner();

  const onSubmit = (data: CreateBannerFormData) => {
    mutate(
      { id: banner?.id, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["banners"] });
          onClose();
          toast.success({ message: "Banner updated successfully" });
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            toast.error({ message: error.response?.data.message });
          } else {
            toast.error({ message: error.message });
          }
        },
      },
    );
  };
  return (
    <Modal title="Edit Banner" opened={isOpen} onClose={onClose} centered>
      <BannerForm onSubmit={onSubmit} onClose={onClose} banner={banner} />
    </Modal>
  );
};
