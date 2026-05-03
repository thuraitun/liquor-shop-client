import { useQueryClient } from "@tanstack/react-query";
import type { Product } from "../../../../type/products/type";
import { Modal } from "@mantine/core";
import { makeUpdateProduct } from "../../../../api/products/update-product.api";
import type { CreateProductFormData } from "../../../../schemas/products/create-product.schema";
import { toast } from "../../../../utils/toast";
import { AxiosError } from "axios";
import { ProductForm } from "./product-form";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
};

export const EditProductModal = ({ isOpen, onClose, product }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = makeUpdateProduct();

  const onSubmit = (data: CreateProductFormData) => {
    mutate(
      { id: product?.id, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["products"] });
          onClose();
          toast.success({ message: "Product updated successfully" });
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
    <Modal title="Edit Product" opened={isOpen} onClose={onClose} centered>
      <ProductForm onSubmit={onSubmit} onClose={onClose} product={product} />
    </Modal>
  );
};
