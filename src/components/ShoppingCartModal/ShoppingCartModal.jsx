import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import ShoppingCartCard from "./ShoppingCartCard";

const ShoppingCartModal = () => {
  const {
    addedProducts,
    showShoppingCartModal,
    handleHideShoppingCartModal,
    totalAddedProducts,
  } = useContext(CartContext);

  return (
    <Modal
      isOpen={showShoppingCartModal}
      onClose={handleHideShoppingCartModal}
      isCentered
      size="xl"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Total added product - {totalAddedProducts}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {addedProducts.map((product) => (
            <ShoppingCartCard key={product.id} {...product} />
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ShoppingCartModal;
