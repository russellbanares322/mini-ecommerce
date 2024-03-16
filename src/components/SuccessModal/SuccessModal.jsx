import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { GoCheckCircleFill } from "react-icons/go";

const SuccessModal = ({ showSuccessModal, handleHideSuccessModal }) => {
  useEffect(() => {
    const successModalTimeout = setTimeout(() => {
      handleHideSuccessModal();
    }, 2000);

    return () => clearTimeout(successModalTimeout);
  }, [showSuccessModal]);
  return (
    <Modal isOpen={showSuccessModal} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody className="flex flex-col items-center justify-center my-11 gap-2">
          <GoCheckCircleFill className="text-green-600" size={80} />
          <p className="text-3xl">Thank your for your purchase</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
