import { HStack, Link, Box, Flex } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  useColorModeValue,
} from "@/components/ui/color-mode"
const NavBar = () => {
  const activeColor = useColorModeValue("teal.600", "teal.200");
  const hoverColor = useColorModeValue("teal.700", "teal.300");

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} px={4} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="center" maxW="1200px" mx="auto">
        <HStack as="nav" spacing={8}>
          <Link
            as={RouterLink}
            to="/"
            p={2}
            fontSize="lg"
            fontWeight="medium"
            _activeLink={{
              color: activeColor,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: hoverColor,
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
            _activeLink={{
              color: activeColor,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: hoverColor,
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
            _activeLink={{
              color: activeColor,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: hoverColor,
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
            _activeLink={{
              color: activeColor,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: hoverColor,
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