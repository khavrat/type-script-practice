import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

interface ModalProps {
  children: React.ReactNode,
  title: string
}

export const ModalView = ({children, title}:ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}
          </ModalBody>

          <ModalFooter>
            <Button  mr={3} onClick={onClose}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
