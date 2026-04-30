import { Button, Flex, Modal as MantineModal, Text } from "@mantine/core";
import type { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  showCloseButton?: boolean;
  closeText?: string;
  actionButton: () => ReactNode;
};

export const ConfirmModal = ({
  isOpen,
  onClose,
  title,
  showCloseButton,
  closeText,
  actionButton,
}: Props) => {
  return (
    <MantineModal.Root opened={isOpen} onClose={onClose} centered>
      <MantineModal.Overlay backgroundOpacity={0.4} />
      <MantineModal.Content>
        <MantineModal.Body>
          <Text ta="center" size="base" className="my-10">
            {title}
          </Text>
          <Flex gap="md" justify="center">
            {showCloseButton && (
              <Button variant="outline" onClick={onClose}>
                {closeText}
              </Button>
            )}
            {actionButton()}
          </Flex>
        </MantineModal.Body>
      </MantineModal.Content>
    </MantineModal.Root>
  );
};
