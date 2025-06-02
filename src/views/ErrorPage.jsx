import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorModeValue } from "@/components/ui/color-mode";

const ErrorPage = () => {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("red.600", "red.600");

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      px={4}
    >
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="4xl" color={headingColor}>
          🚫 Error 404
        </Heading>
        <Text fontSize="xl" color={textColor}>
          La página que buscas no existe o fue removida.
        </Text>
        <Text fontSize="lg" color={textColor}>
          🔍 Verifica la URL o regresa al inicio.
        </Text>
        <Link to="/">
          <Button colorScheme="teal" leftIcon={<span>🏠</span>}>
            Volver al inicio
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
