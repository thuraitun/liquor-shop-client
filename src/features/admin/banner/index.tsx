import { useSuspenseQuery } from "@tanstack/react-query";

import { Button } from "@mantine/core";
import { DataTable } from "../../../components/data-table";
import { bannerColumns } from "./components/banner-columns";
import { makeGetBanners } from "../../../api/banners/get-banners.api";
import { useDisclosure } from "@mantine/hooks";
import { AddBannerModal } from "./components/add-banner-modal";
import { useMemo, useState } from "react";
import type { Banner } from "../../../type/banners/type";
import { DeleteBannerModal } from "./components/delete-banner-modal";
import { EditBannerModal } from "./components/edit-banner-modal";
import { useBaseFilter } from "../../../hooks/use-base-filter";

export const AdminBanner = () => {
  const { searchParams } = useBaseFilter();
  const { data, isLoading } = useSuspenseQuery(makeGetBanners(searchParams));
  const [addModalOpened, { open: openAddModal, close: closeAddModal }] =
    useDisclosure(false);
  const [editModalOpened, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);
  const [
    deleteModalOpened,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);
  const [bannerId, setBannerId] = useState<string>("");
  const [banner, setBanner] = useState<Banner>({} as Banner);

  const onEdit = (banner: Banner) => {
    openEditModal();
    setBanner(banner);
  };

  const onDelete = (id: string) => {
    openDeleteModal();
    setBannerId(id);
  };

  const columns = useMemo(
    () => bannerColumns({ onEdit, onDelete }),
    [onEdit, onDelete],
  );

  return (
    <div className="my-6">
      <h1 className="text-lg text-center my-5 text-[#e95959] font-bold">
        Admin Banner
      </h1>

      <div className="flex justify-end my-5">
        <Button onClick={openAddModal}>Add Banner</Button>
      </div>

      <DataTable
        columns={columns}
        data={data?.results || []}
        isLoading={isLoading}
        total={data?.count || 0}
      />

      <AddBannerModal isOpen={addModalOpened} onClose={closeAddModal} />
      <DeleteBannerModal
        isOpen={deleteModalOpened}
        id={bannerId}
        onClose={closeDeleteModal}
      />
      <EditBannerModal
        isOpen={editModalOpened}
        banner={banner}
        onClose={closeEditModal}
      />
    </div>
  );
};
