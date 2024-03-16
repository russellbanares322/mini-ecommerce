import { createContext, useState } from "react";
import { useToastNotification } from "../hooks";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [addedProducts, setAddedProducts] = useState([]);
  const [showShoppingCartModal, setShowShoppingCartModal] = useState(false);
  const { showToastNotification } = useToastNotification();
  const totalAddedProducts = addedProducts.length;
  const totalCheckoutPrice = addedProducts?.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const addProductToCart = (product) => {
    setAddedProducts([...addedProducts, product]);
    showToastNotification(`Added ${product.title} to cart`, "success");
  };

  const removeProductInCart = (selectedProductId) => {
    const filteredAddedProducts = addedProducts.filter(
      (product) => product.id !== selectedProductId
    );

    setAddedProducts(filteredAddedProducts);
    showToastNotification("Removed product", "success");
    if (totalAddedProducts === 1) {
      handleHideShoppingCartModal();
    }
  };

  const isProductAlreadyAdded = (productId) => {
    const productAlreadySaved = addedProducts.find(
      (product) => product.id === productId
    );

    if (productAlreadySaved) {
      return true;
    }

    return false;
  };

  const removeAllAddedProductInCart = () => {
    setAddedProducts([]);
  };

  const handleShowShoppingCartModal = () => {
    if (totalAddedProducts !== 0) {
      setShowShoppingCartModal(true);
    }
  };

  const handleHideShoppingCartModal = () => {
    setShowShoppingCartModal(false);
  };

  return (
    <CartContext.Provider
      value={{
        addedProducts,
        addProductToCart,
        removeProductInCart,
        totalAddedProducts,
        totalCheckoutPrice,
        isProductAlreadyAdded,
        showShoppingCartModal,
        handleShowShoppingCartModal,
        handleHideShoppingCartModal,
        removeAllAddedProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
