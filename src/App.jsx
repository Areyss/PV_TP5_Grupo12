import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Box, Flex, Heading, Text, Container, Center } from '@chakra-ui/react';
import {  useColorModeValue } from "@/components/ui/color-mode"
import { ColorModeButton } from "@/components/ui/color-mode"

import NavBar from './components/NavBar';
import alumnosPorDefecto from './data/alumnos.json';

import './style/estiloBasico.css'
const App = () => {
  const [alumnos, setAlumnos] = useState(alumnosPorDefecto);
  const headerBg = useColorModeValue('#A0C878', '#720455');
  const footerBg = useColorModeValue('#E9ECEF', '#1A1A1A');
  const textPrimary = useColorModeValue('#00000', '#E9ECEF');
  const textSecondary = useColorModeValue('#ADB5BD', '#ADB5BD');
  return (
    <Flex minH="100vh" direction="column" bg={useColorModeValue('#F8F9FA', '#121212')}>
      <Box as="header" bg={headerBg} color="white" py={4} boxShadow="md">
        <Container maxW="container.xl">
          <Flex justifyContent='space-between'>
            <Center>
              <Heading as="h1" size="3xl" mb={2} color={textPrimary}>
                Facultad de Ingeniería - UNJu
              </Heading>
            </Center>
            <Flex align='center' gap="4">
              <NavBar />
              <ColorModeButton maxW='1' bg={headerBg} />
            </Flex>          
          </Flex>         
        </Container>
      </Box>

      <Box as="main" flex={1} py={8}>
        <Container maxW="container.xl">
          <Outlet context={{ alumnos, setAlumnos }} />
        </Container>
      </Box>

      <Box as="footer" bg={footerBg} mt="auto" py={4}>
        <Container maxW="container.xl" textAlign="center">
          <Text fontSize="sm" color={textSecondary}>
            © 2025 Facultad de Ingeniería - UNJu
          </Text>
          <Text fontSize="sm" opacity={0.8} color={textSecondary}>
            Desarrollado por Grupo 12
          </Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;