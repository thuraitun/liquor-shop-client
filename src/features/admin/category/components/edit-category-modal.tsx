import { Modal } from "@mantine/core";
import { makeUpdateCategory } from "../../../../api/categories/update-category.api";
import { toast } from "../../../../utils/toast";
import { CategoryForm } from "./category-form";
import type { Category } from "../../../../type/categories/type";
import { useQueryClient } from "@tanstack/react-query";
import type { CreateCategoryFormData } from "../../../../schemas/categories/create-category.schema";
import { AxiosError } from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
};

export const EditCategoryModal = ({ isOpen, onClose, category }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = makeUpdateCategory();

  const onSubmit = (data: CreateCategoryFormData) => {
    mutate(
      { id: category?.id, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["categories"] });
          onClose();
          toast.success({ message: "Category updated successfully" });
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
    <Modal title="Edit Category" opened={isOpen} onClose={onClose} centered>
      <CategoryForm onSubmit={onSubmit} onClose={onClose} category={category} />
    </Modal>
  );
};
