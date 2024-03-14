import { Container } from "@chakra-ui/react";

const PageContainer = ({ children }) => {
  return (
    <Container className="py-3" maxW="1780px">
      {children}
    </Container>
  );
};

export default PageContainer;
