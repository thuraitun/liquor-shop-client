import { useQueryClient } from "@tanstack/react-query";
import { ConfirmModal } from "../../../../components/comfirm-modal";
import { Button } from "@mantine/core";
import { toast } from "../../../../utils/toast";
import { AxiosError } from "axios";
import { makeDeleteProduct } from "../../../../api/products/delete-product.api";

type DeleteProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

export const DeleteProductModal = ({
  isOpen,
  onClose,
  id,
}: DeleteProductModalProps) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = makeDeleteProduct();

  const handleDeleteProduct = () => 
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["products"],
        });
        toast.success({ message: "Product deleted successfully" });
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
      title="Do you want to delete this product?"
      closeText="No"
      actionButton={() => (
        <Button onClick={handleDeleteProduct} loading={isPending}>
          Yes
        </Button>
      )}
    />
  );
};
