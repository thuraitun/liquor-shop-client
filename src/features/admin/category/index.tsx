import { useSuspenseQuery } from "@tanstack/react-query";
import { useBaseFilter } from "../../../hooks/use-base-filter";
import { makeGetCategories } from "../../../api/categories/get-banner.api";
import { useDisclosure } from "@mantine/hooks";
import { useMemo, useState } from "react";
import type { Category } from "../../../type/categories/type";
import { Button } from "@mantine/core";
import { DataTable } from "../../../components/data-table";
import { categoryColumns } from "./components/category-columns";
import { AddCategoryModal } from "./components/add-category-modal";
import { DeleteCategoryModal } from "./components/delete-category-modal";
import { EditCategoryModal } from "./components/edit-category-modal";

export const AdminCategory = () => {
  const { searchParams } = useBaseFilter();
  const { data, isLoading } = useSuspenseQuery(makeGetCategories(searchParams));
  const [addModalOpened, { open: openAddModal, close: closeAddModal }] =
    useDisclosure(false);
  const [editModalOpened, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);
  const [
    deleteModalOpened,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);
  const [categoryId, setCategoryId] = useState<string>("");
  const [category, setCategory] = useState<Category>({} as Category);

  const onEdit = (category: Category) => {
    openEditModal();
    setCategory(category);
  };

  const onDelete = (id: string) => {
    openDeleteModal();
    setCategoryId(id);
  };

  const columns = useMemo(
    () => categoryColumns({ onEdit, onDelete }),
    [onEdit, onDelete],
  );

  return (
    <div className="my-6">
      <h1 className="text-lg text-center my-5 text-[#e95959] font-bold">
        Category
      </h1>

      <div className="flex justify-end my-5">
        <Button onClick={openAddModal}>Add Category</Button>
      </div>

      <DataTable
        columns={columns}
        data={data?.results || []}
        isLoading={isLoading}
        total={data?.count || 0}
      />

      <AddCategoryModal isOpen={addModalOpened} onClose={closeAddModal} />
      <DeleteCategoryModal
        isOpen={deleteModalOpened}
        id={categoryId}
        onClose={closeDeleteModal}
      />
      <EditCategoryModal
        isOpen={editModalOpened}
        category={category}
        onClose={closeEditModal}
      />
    </div>
  );
};
