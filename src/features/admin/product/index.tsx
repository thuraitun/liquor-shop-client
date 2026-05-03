import { useSuspenseQuery } from "@tanstack/react-query";
import { useBaseFilter } from "../../../hooks/use-base-filter";
import { makeGetProducts } from "../../../api/products/get-products.api";
import { useDisclosure } from "@mantine/hooks";
import { useMemo, useState } from "react";
import type { Product } from "../../../type/products/type";
import { productColumns } from "./components/product-columns";
import { Button } from "@mantine/core";
import { DataTable } from "../../../components/data-table";
import { AddProductModal } from "./components/add-product-form";
import { DeleteProductModal } from "./components/delete-product-modal";
import { EditProductModal } from "./components/edit-product-modal";

export const AdminProduct = () => {
  const { searchParams } = useBaseFilter();
  const { data, isLoading } = useSuspenseQuery(makeGetProducts(searchParams));
  const [addModalOpened, { open: openAddModal, close: closeAddModal }] =
    useDisclosure(false);
  const [editModalOpened, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);
  const [
    deleteModalOpened,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);
  const [productId, setProductId] = useState<string>("");
  const [product, setProduct] = useState<Product>({} as Product);

  const onEdit = (product: Product) => {
    openEditModal();
    setProduct(product);
  };

  const onDelete = (id: string) => {
    openDeleteModal();
    setProductId(id);
  };

  const columns = useMemo(
    () => productColumns({ onEdit, onDelete }),
    [onEdit, onDelete],
  );

  return (
    <div className="my-6">
      <h1 className="text-lg text-center my-5 text-[#e95959] font-bold">
        Product
      </h1>

      <div className="flex justify-end my-5">
        <Button onClick={openAddModal}>Add Product</Button>
      </div>

      <DataTable
        columns={columns}
        data={data?.results || []}
        isLoading={isLoading}
        total={data?.count || 0}
      />

      <AddProductModal isOpen={addModalOpened} onClose={closeAddModal} />
      <DeleteProductModal
        isOpen={deleteModalOpened}
        id={productId}
        onClose={closeDeleteModal}
      />
      <EditProductModal
        isOpen={editModalOpened}
        product={product}
        onClose={closeEditModal}
      />
    </div>
  );
};