import { Button, IconButton, Tooltip, useDisclosure } from "@chakra-ui/react";
import { navbarItems } from "../../data/navbarItems";
import PageContainer from "../PageContainer/PageContainer";
import { HiOutlineShoppingBag, HiMenu } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { RiVipCrownFill } from "react-icons/ri";
import { useContext, useRef } from "react";
import MobileNavDisplay from "./MobileNavDisplay";
import CartContext from "../../context/CartContext";
import ShoppingCartModal from "../ShoppingCartModal/ShoppingCartModal";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuBtnRef = useRef();
  const { totalAddedProducts, handleShowShoppingCartModal } =
    useContext(CartContext);

  const {
    isOpen: isMobileNavOpen,
    onOpen: onMobileNavOpen,
    onClose: onMobileNavClose,
  } = useDisclosure();

  const getActiveNavItem = (navItemPath) => {
    const isNavItemActive = location.pathname === navItemPath;

    if (isNavItemActive) {
      return true;
    }
    return false;
  };

  return (
    <nav>
      <PageContainer>
        <div className="flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-1 cursor-pointer"
          >
            <RiVipCrownFill className="text-dark-green" size={20} />
            <h1 className="font-bold text-lg text-dark-green">
              Mini-Ecommerce
            </h1>
          </div>
          {/* Desktop view */}
          <ul className="hidden md:flex items-center gap-6">
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
              <li className="ml-3 relative">
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
          {/* Mobile view */}
          <div className="block md:hidden">
            <Button ref={menuBtnRef} onClick={onMobileNavOpen} variant="ghost">
              <HiMenu size={25} />
            </Button>
          </div>
        </div>
        <MobileNavDisplay
          isOpen={isMobileNavOpen}
          onClose={onMobileNavClose}
          btnRef={menuBtnRef}
          getActiveNavItem={getActiveNavItem}
        />
        <ShoppingCartModal />
      </PageContainer>
    </nav>
  );
};

export default Navbar;
