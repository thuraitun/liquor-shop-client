import { ActionIcon, Group, Tooltip } from "@mantine/core";
import type { Column } from "../../../../components/data-table";
import type { Banner } from "../../../../type/banners/type";
import { PencilLine, Trash2 } from "lucide-react";
import { dateFormat } from "../../../../utils/date-format";
import { Status } from "../../../../components/status";

type Props = {
  onEdit: (banner: Banner) => void;
  onDelete: (id: string) => void;
};

export const bannerColumns = ({
  onEdit,
  onDelete,
}: Props): Column<Banner>[] => [
  {
    key: "image_url",
    header: "Banner Image",
    render: (row) => (
      <img src={row.image_url} alt={row.image_url} width={100} height={100} />
    ),
  },
  {
    key: "is_active",
    header: "Status",
    render: (row) => <Status status={row.is_active} />,
  },
  {
    key: "created_at",
    header: "Created At",
    render: (row) => dateFormat(row.created_at),
  },
  {
    key: "updated_at",
    header: "Updated At",
    render: (row) => dateFormat(row.updated_at),
  },
  {
    key: "id",
    header: "Actions",
    render: (row) => {
      return (
        <Group gap="md" pr={"xs"}>
          <ActionIcon
            variant="transparent"
            c="blue"
            onClick={() => onEdit(row)}
          >
            <Tooltip label="Edit">
              <PencilLine />
            </Tooltip>
          </ActionIcon>
          <ActionIcon
            variant="transparent"
            c="#e95959"
            onClick={() => onDelete(row.id)}
          >
            <Tooltip label="Delete">
              <Trash2 />
            </Tooltip>
          </ActionIcon>
        </Group>
      );
    },
  },
];
