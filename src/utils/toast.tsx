import { notifications } from "@mantine/notifications";
// import { NotificationPosition } from "node_modules/@mantine/notifications/lib/notifications.store";
import type { NotificationProps } from "@mantine/core";
import type { ReactNode } from "react";

type Options = {
  title?: string;
  message: ReactNode;
  className?: string;
  loading?: boolean;
  color?: string;
  onOpen?: () => void;
  onClose?: () => void;
  autoCloseAfter?: number;
  withCloseButton?: boolean;
  id?: string;
  icon?: NotificationProps["icon"];
  position?: string;
};

export const toast = {
  show({ position = "top-right", withCloseButton = true, ...rest }: Options) {
    notifications.show({
      //   position: position as NotificationPosition,
      withCloseButton,
      ...rest,
    });
  },
  success(opt: Options) {
    this.show({
      color: "green",
      ...opt,
    });
  },

  error(opt: Options) {
    this.show({
      color: "red",
      ...opt,
    });
  },
};
