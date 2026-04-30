import { Button } from "@mantine/core";
import { ConfirmModal } from "../../../../components/comfirm-modal";
import { makeDeleteBanner } from "../../../../api/banners/delete-banner.api";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "../../../../utils/toast";
import { AxiosError } from "axios";

export const DeleteBannerModal = ({ isOpen, onClose, id }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = makeDeleteBanner();

  const handleDeleteBanner = () =>
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["banners"],
        });
        toast.success({ message: "Banner deleted successfully" });
        onClose();
      },
      onError: (e) => {
        if (e instanceof AxiosError) {
          toast.error({ title: "Fail", message: e.response?.data.message });
        }
      },
    });

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton
      title="Do you want to delete this banner?"
      closeText="No"
      actionButton={() => (
        <Button onClick={handleDeleteBanner} loading={isPending}>
          Yes
        </Button>
      )}
    />
  );
};
