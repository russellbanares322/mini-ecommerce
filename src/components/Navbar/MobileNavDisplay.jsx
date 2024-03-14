import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { navbarItems } from "../../data/navbarItems";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";

const MobileNavDisplay = ({ btnRef, isOpen, onClose, getActiveNavItem }) => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(null);
  const { handleShowShoppingCartModal, totalAddedProducts } =
    useContext(CartContext);

  const handleGetScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // This will make sure that mobile nav will auto close when it reaches medium screen device
  useEffect(() => {
    window.addEventListener("resize", handleGetScreenWidth);

    if (screenWidth >= 768) {
      onClose();
    }
    return () => window.removeEventListener("resize", handleGetScreenWidth);
  }, [screenWidth]);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody className="mt-10">
          <ul className="flex items-start gap-6 flex-col">
            {navbarItems.map((item) => (
              <li
                className={`cursor-pointer font-medium hover:text-dark-green duration-150 ease-in-out ${
                  getActiveNavItem(item.path) ? "text-green-600" : "text-black"
                }`}
                key={item.key}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </li>
            ))}
            <Tooltip label="Your shopping bag">
              <li className="relative">
                <IconButton
                  onClick={handleShowShoppingCartModal}
                  aria-label="Shopping bag"
                  icon={<HiOutlineShoppingBag size={25} />}
                />
                {totalAddedProducts !== 0 && (
                  <p className="absolute -top-1 -right-3 bg-green-400 text-white rounded-full px-2 text-sm">
                    {totalAddedProducts}
                  </p>
                )}
              </li>
            </Tooltip>
          </ul>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavDisplay;
