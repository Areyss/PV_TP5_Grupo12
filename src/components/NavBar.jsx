import { HStack, Link, Box, Flex } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  useColorModeValue,
} from "@/components/ui/color-mode"
const NavBar = () => {
  const navBg = useColorModeValue('#A0C878', '#720455');
  const activeColor = useColorModeValue('#DDEB9D', '#030637');
  const hoverColor = useColorModeValue('#DDEB9D', '#030637');
  const textColor = useColorModeValue('white', '#E9ECEF');
  return (
    <Box bg={navBg} px={4}>
      <Flex h={16} alignItems="center" justifyContent="center" maxW="1200px" mx="auto">
        <HStack as="nav" spacing={8} color={textColor}>
          <Link
            as={RouterLink}
            to="/"
            p={3}
            fontSize="lg"
            fontWeight="medium"
            focusRingWidth="0px"
            color={textColor}
            _activeLink={{
              color: activeColor,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: hoverColor,
              // bg: activeColor,
            }}
            _focus={{ 
              color: activeColor,
              borderBottom: "2px solid",      
            }}
          >
            Inicio
          </Link>
          <Link
            as={RouterLink}
            to="/alumnos"
            p={2}
            fontSize="lg"
            fontWeight="medium"
            focusRingWidth="0px"
            color={textColor}
            _activeLink={{
              color: activeColor,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: hoverColor,
            }}
            _focus={{ 
              color: activeColor,
              borderBottom: "2px solid",      
            }}
          >
            Lista de Alumnos
          </Link>
          <Link
            as={RouterLink}
            to="/nuevoAlumno"
            p={2}
            fontSize="lg"
            fontWeight="medium"
            focusRingWidth="0px"
            color={textColor}
            _activeLink={{
              color: activeColor,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: hoverColor,
            }}
            _focus={{ 
              color: activeColor,
              borderBottom: "2px solid",      
            }}
          >
            Nuevo Alumno
          </Link>
          <Link
            as={RouterLink}
            to="/about"
            p={2}
            fontSize="lg"
            fontWeight="medium"
            focusRingWidth="0px"
            color={textColor}
            _activeLink={{
              color: activeColor,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: hoverColor,
            }}
            _focus={{ 
              color: activeColor,
              borderBottom: "2px solid",      
            }}
          >
            Acerca de
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;