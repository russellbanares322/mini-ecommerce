import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import CartContext from "../../context/CartContext";

const ShoppingCartCard = ({ id, title, image, price }) => {
  const { removeProductInCart } = useContext(CartContext);

  return (
    <Card
      className="mb-4"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="contain"
        width={200}
        height={200}
        src={image}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text className="py-3 font-medium">${price}</Text>
        </CardBody>
        <CardFooter className="ml-auto">
          <Button
            onClick={() => removeProductInCart(id)}
            colorScheme="red"
            leftIcon={<CgClose size={25} />}
          >
            Remove from cart
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ShoppingCartCard;
