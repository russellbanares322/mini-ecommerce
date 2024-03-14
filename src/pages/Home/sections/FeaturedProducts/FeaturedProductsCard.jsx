import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { truncateString } from "../../../../utils/truncateString";
import { useContext } from "react";
import CartContext from "../../../../context/CartContext";
import { LiaCartPlusSolid } from "react-icons/lia";
import { CgClose } from "react-icons/cg";

const FeaturedProductsCard = ({
  id,
  title,
  image,
  price,
  category,
  description,
  rating,
}) => {
  const { addProductToCart, isProductAlreadyAdded, removeProductInCart } =
    useContext(CartContext);
  const productAlreadySaved = isProductAlreadyAdded(id);

  const productToBeAdded = {
    id,
    title,
    image,
    price,
    category,
    description,
    rating,
  };

  return (
    <Card width={400} height={650} variant="elevated">
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          height={80}
          width={1770}
          objectFit="contain"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{truncateString(description)}</Text>
          <Text color="blue.900" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            onClick={() =>
              productAlreadySaved
                ? removeProductInCart(id)
                : addProductToCart(productToBeAdded)
            }
            colorScheme={productAlreadySaved ? "red" : "green"}
            leftIcon={
              productAlreadySaved ? (
                <CgClose size={25} />
              ) : (
                <LiaCartPlusSolid size={25} />
              )
            }
          >
            {productAlreadySaved ? "Remove from cart" : "Add to cart"}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default FeaturedProductsCard;
