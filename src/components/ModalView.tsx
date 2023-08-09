import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export interface ModalProps {
  openButtonName: string;
  children: React.ReactNode;
  title: string;
  onCloseBySubmit?: () => void;
}

export const ModalView = ({
  openButtonName,
  onCloseBySubmit,
  children,
  title,
}: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    onClose();
    if (onCloseBySubmit) onCloseBySubmit();
  };

  return (
    <>
      <Button onClick={onOpen}>{openButtonName}</Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {React.cloneElement(children as React.ReactElement, {
              onCloseBySubmit: onClose,
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
