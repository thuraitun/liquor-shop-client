import { useQueryClient } from "@tanstack/react-query";
import { toast } from "../../../../utils/toast";
import { makeDeleteCategory } from "../../../../api/categories/delete-category.api";
import { AxiosError } from "axios";
import { ConfirmModal } from "../../../../components/comfirm-modal";
import { Button } from "@mantine/core";

type DeleteCategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

export const DeleteCategoryModal = ({
  isOpen,
  onClose,
  id,
}: DeleteCategoryModalProps) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = makeDeleteCategory();

  const handleDeleteCategory = () =>
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["categories"],
        });
        toast.success({ message: "Category deleted successfully" });
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
      title="Do you want to delete this category?"
      closeText="No"
      actionButton={() => (
        <Button onClick={handleDeleteCategory} loading={isPending}>
          Yes
        </Button>
      )}
    />
  );
};
