import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Box, Flex, Heading, Text, Container } from '@chakra-ui/react';
import {  useColorModeValue } from "@/components/ui/color-mode"

import NavBar from './components/NavBar';
import alumnosPorDefecto from './data/alumnos.json';

import './style/estiloBasico.css'
const App = () => {
  const [alumnos, setAlumnos] = useState(alumnosPorDefecto);
  const headerBg = useColorModeValue('gray.600', 'gray.800');
  const footerBg = useColorModeValue('gray.100', 'gray.800');

  return (
    <Flex minH="100vh" direction="column">
      <Box as="header" bg={headerBg} color="white" py={4} boxShadow="md">
        <Container maxW="container.xl">
          <Flex justifyContent='space-between'>
            <Heading as="h1" size="3xl" mb={2}>
            Facultad de Ingeniería - UNJu
            </Heading>
            <Text fontSize="lg" opacity={0.9}>
              Gestión Académica de Alumnos
            </Text>
          </Flex>
          
          <NavBar />
        </Container>
      </Box>

      <Box as="main" flex={1} py={8}>
        <Container maxW="container.xl">
          <Outlet context={{ alumnos, setAlumnos }} />
        </Container>
      </Box>

      <Box as="footer" bg={footerBg} mt="auto" py={4}>
        <Container maxW="container.xl" textAlign="center">
          <Text fontSize="sm">
            © 2025 Facultad de Ingeniería - UNJu
          </Text>
          <Text fontSize="sm" opacity={0.8}>
            Desarrollado por Grupo 12
          </Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;