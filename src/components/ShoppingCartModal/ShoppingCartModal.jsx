import React, { useContext, useState } from "react";
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
import SuccessModal from "../SuccessModal/SuccessModal";

const ShoppingCartModal = () => {
  const {
    addedProducts,
    showShoppingCartModal,
    handleHideShoppingCartModal,
    totalAddedProducts,
    removeAllAddedProductInCart,
    totalCheckoutPrice,
  } = useContext(CartContext);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleShowSuccessModal = () => {
    setShowSuccessModal(true);
    handleHideShoppingCartModal();
    removeAllAddedProductInCart();
  };

  const handleHideSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
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
            <p>
              Total Price: <strong>${totalCheckoutPrice}</strong>
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleShowSuccessModal} colorScheme="green">
              Checkout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <SuccessModal
        showSuccessModal={showSuccessModal}
        handleHideSuccessModal={handleHideSuccessModal}
      />
    </>
  );
};

export default ShoppingCartModal;
