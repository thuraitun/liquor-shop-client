import { useQueryClient } from "@tanstack/react-query";
import type { CreateCategoryFormData } from "../../../../schemas/categories/create-category.schema";
import { toast } from "../../../../utils/toast";
import { AxiosError } from "axios";
import { Modal } from "@mantine/core";
import { CategoryForm } from "./category-form";
import { makeCreateCategory } from "../../../../api/categories/create-category.api";

export const AddCategoryModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = makeCreateCategory();

  const onSubmit = (data: CreateCategoryFormData) =>
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        onClose();
        toast.success({ message: "Category added successfully" });
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
    <Modal title="Add Category" opened={isOpen} onClose={onClose} centered>
      <CategoryForm
        onSubmit={onSubmit}
        onClose={onClose}
        isPending={isPending}
      />
    </Modal>
  );
};
