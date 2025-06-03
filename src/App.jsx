import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Box, Flex, Heading, Text, Container, Center, Image } from '@chakra-ui/react';
import { ColorModeButton } from "@/components/ui/color-mode"

import NavBar from './components/NavBar';
import alumnosPorDefecto from './data/alumnos.json';

import './style/estiloBasico.css'
import { useAppColors } from './theme/colors';
const App = () => {
  const [alumnos, setAlumnos] = useState(alumnosPorDefecto);
  const colors = useAppColors();

  return (
    <Flex minH="100vh" direction="column">
      <Box as="header" bg={colors.primary} color="white" py={4} boxShadow="md">
        <Container maxW="container.xl">
          
          <Flex justifyContent='space-between'>
            <Center>
              <Image
                  src="/logo-fi.png"
                  alt="Logo de la Facultad"
                  maxWidth="auto"
                  maxHeight="70px"
                  mx="auto"
                  mr={5}
                />
              <Heading as="h1" size="3xl" mb={2} color={colors.textPrimary}>
                Facultad de Ingeniería - UNJu
              </Heading>
            </Center>
            <Flex align='center' gap="4">
              <NavBar />
              <ColorModeButton maxW='1' color={colors.accent} />
            </Flex>          
          </Flex>         
        </Container>
      </Box>

      <Box as="main" flex={1} py={5} bgColor={colors.bg}>
        <Container maxW="container.xl">
          <Outlet context={{ alumnos, setAlumnos }} />
        </Container>
      </Box>

      <Box as="footer" bg={colors.footerBg} mt="auto" py={4}>
        <Container maxW="container.xl" textAlign="center">
          <Text fontSize="sm" color={colors.textSecondary}>
            © 2025 Facultad de Ingeniería - UNJu
          </Text>
          <Text fontSize="sm" opacity={0.8} color={colors.textSecondary}>
            Desarrollado por Grupo 12
          </Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;