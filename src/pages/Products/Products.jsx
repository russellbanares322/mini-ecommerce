import { PageContainer } from "../../components";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../constants/connection";
import ProductsCard from "./ProductsCard";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";

const Products = () => {
  const { data, isLoading } = useFetchData(`${BASE_URL}/products`);
  const slicedData = data?.slice(0, 8);

  return (
    <div className="bg-whitesmoke min-h-screen h-full w-full pb-5">
      <PageContainer>
        <h1 className="text-dark-green font-semibold text-center mt-10 text-3xl">
          All Products
        </h1>
        <SimpleGrid
          mt={10}
          spacing={4}
          placeItems="center"
          templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        >
          {!isLoading &&
            slicedData?.map((product) => (
              <ProductsCard key={product.id} {...product} />
            ))}
          {isLoading &&
            Array.from({ length: 8 }).map((_, index) => (
              <Skeleton
                key={index}
                height="500px"
                width="400px"
                borderRadius={10}
              />
            ))}
        </SimpleGrid>
      </PageContainer>
    </div>
  );
};

export default Products;
