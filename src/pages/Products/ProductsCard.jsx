import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { LiaCartPlusSolid } from "react-icons/lia";
import { CgClose } from "react-icons/cg";

const ProductsCard = ({
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
    <Card className="relative" width={400} height={600} variant="elevated">
      <CardBody>
        <Image
          src={image}
          alt="Product Image"
          borderRadius="lg"
          height={120}
          width={1290}
          objectFit="contain"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color="blue.900" fontSize="medium">
            Ratings: {rating?.rate}
          </Text>
          <div className=" h-28 overflow-y-scroll">
            <Text>{description}</Text>
          </div>
          <Text color="blue.900" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
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
      </CardFooter>
      <Badge className="absolute top-2 right-0" colorScheme="green">
        {category}
      </Badge>
    </Card>
  );
};

export default ProductsCard;
