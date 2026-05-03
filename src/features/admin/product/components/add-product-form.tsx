import { useQueryClient } from "@tanstack/react-query";
import { makeCreateProduct } from "../../../../api/products/create-product.api";
import type { CreateProductFormData } from "../../../../schemas/products/create-product.schema";
import { toast } from "../../../../utils/toast";
import { AxiosError } from "axios";
import { Modal } from "@mantine/core";
import { ProductForm } from "./product-form";

export const AddProductModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = makeCreateProduct();

  const onSubmit = (data: CreateProductFormData) =>
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["products"] });
        onClose();
        toast.success({ message: "Product added successfully" });
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
    <Modal title="Add Product" size="lg" opened={isOpen} onClose={onClose} centered>
      <ProductForm
        onSubmit={onSubmit}
        onClose={onClose}
        isPending={isPending}
      />
    </Modal>
  );
};
