import { PageContainer } from "../../components";

const About = () => {
  return (
    <div className="bg-whitesmoke min-h-screen h-full w-full">
      <PageContainer>
        <div>
          <h1 className="text-dark-green font-semibold text-center mt-10 text-3xl">
            About Us
          </h1>
          <div>
            <p className="text-center mt-10">
              Welcome to <strong>Mini-Ecommerce</strong>, where shopping meets
              convenience and quality. Established with a vision to
              revolutionize the online shopping experience, we pride ourselves
              on being a trusted destination for millions of customers
              worldwide. With a diverse range of products spanning from
              electronics to fashion, home essentials to wellness, we strive to
              cater to every need and desire. Our commitment to excellence
              extends beyond just offering a vast selection; it's about ensuring
              seamless transactions, reliable customer service, and a platform
              that prioritizes user satisfaction above all else.
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default About;
