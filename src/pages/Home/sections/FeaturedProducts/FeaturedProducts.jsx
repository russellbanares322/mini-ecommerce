import { PageContainer } from "../../../../components";
import useFetchData from "../../../../hooks/useFetchData";
import { BASE_URL } from "../../../../constants/connection";
import FeaturedProductsCard from "./FeaturedProductsCard";
import { LuMoveRight } from "react-icons/lu";
import { Skeleton } from "@chakra-ui/react";

const FeaturedProducts = () => {
  const { data, isLoading } = useFetchData(`${BASE_URL}/products`);
  const slicedData = data?.slice(0, 3);
  return (
    <div>
      <PageContainer>
        <h1 className="section-title">Featured Products</h1>
        <p className="flex items-center gap-2 justify-end cursor-pointer hover:underline text-sm  md:text-lg">
          View More <LuMoveRight />
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-10 place-items-center w-full gap-3">
          {!isLoading &&
            slicedData?.map((product) => (
              <FeaturedProductsCard key={product.id} {...product} />
            ))}
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                height="600px"
                width="400px"
                borderRadius={10}
              />
            ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default FeaturedProducts;
