import { Container, Text, VStack, Image, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to Water Bottle World</Heading>
        <Text fontSize="lg" textAlign="center">Discover the best water bottles to keep you hydrated throughout the day.</Text>
        <Box>
          <Image src="/images/water-bottle-1.jpg" alt="Sleek Stainless Steel Water Bottle" boxSize="300px" objectFit="cover" mb={4} />
          <Image src="/images/water-bottle-2.jpg" alt="Transparent Plastic Water Bottle" boxSize="300px" objectFit="cover" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;