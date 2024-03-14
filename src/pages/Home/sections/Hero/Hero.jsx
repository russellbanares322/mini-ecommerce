import { Button, Image } from "@chakra-ui/react";
import heroImg from "../../../../assets/hero-img.svg";
import { LuMoveRight } from "react-icons/lu";
import { PageContainer } from "../../../../components";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="py-10 bg-whitesmoke">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3">
          <div>
            <p className="text-dark-green text-4xl md:text-7xl font-semibold mt-5 md:mt-20">
              Explore, shop,
            </p>
            <p className="text-dark-green text-4xl md:text-7xl font-semibold">
              repeat again.
            </p>
            <p className="mt-5 font-medium">
              The most famous e-commerce shop in town
              <span className="text-dark-green text-lg">.</span>
            </p>
            <Button
              className="mt-6"
              colorScheme="teal"
              variant="solid"
              rightIcon={<LuMoveRight />}
              onClick={() => navigate("/products")}
            >
              Shop Now
            </Button>
          </div>
          <Image className="hidden md:block" src={heroImg} alt="Hero image" />
        </div>
      </PageContainer>
    </div>
  );
};

export default Hero;
