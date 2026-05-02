import { Badge } from "@mantine/core";

export const Status = ({ status }: { status: boolean }) => {
  return status ? (
    <Badge color="blue">Active</Badge>
  ) : (
    <Badge color="red">Inactive</Badge>
  );
};
