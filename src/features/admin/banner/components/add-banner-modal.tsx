import { Modal } from "@mantine/core";
import { BannerForm } from "./banner-form";
import { makeCreateBanner } from "../../../../api/banners/create-banner.api";
import type { CreateBannerFormData } from "../../../../schemas/banners/create-banner.schema";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "../../../../utils/toast";
import { AxiosError } from "axios";

export const AddBannerModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = makeCreateBanner();

  const onSubmit = (data: CreateBannerFormData) =>
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["banners"] });
        onClose();
        toast.success({ message: "Banner added successfully" });
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error({ message: error.response?.data.message });
        } else {
          toast.error({ message: error.message });
        }
      },
    });
  return (
    <Modal title="Add Banner" opened={isOpen} onClose={onClose} centered>
      <BannerForm onSubmit={onSubmit} onClose={onClose} isPending={isPending} />
    </Modal>
  );
};
