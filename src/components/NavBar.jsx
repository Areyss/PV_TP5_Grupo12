import { HStack, Link, Box, Flex } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { useAppColors } from "@/theme/colors";
const NavBar = () => {
  const colors = useAppColors();

  return (
    <Box bg={colors.primary} px={4}>
      <Flex h={16} alignItems="center" justifyContent="center" maxW="1200px" mx="auto">
        <HStack as="nav" spacing={8} color={colors.textPrimary}>
          <Link
            as={RouterLink}
            to="/"
            p={3}
            fontSize="lg"
            fontWeight="medium"
            focusRingWidth="0px"
            color={colors.textPrimary}
            _activeLink={{
              color: colors.accent,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: colors.accent,
              // bg: colors.accent,
            }}
            _focus={{ 
              color: colors.accent,
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
            color={colors.textPrimary}
            _activeLink={{
              color: colors.accent,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: colors.accent,
            }}
            _focus={{ 
              color: colors.accent,
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
            color={colors.textPrimary}
            _activeLink={{
              color: colors.accent,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: colors.accent,
            }}
            _focus={{ 
              color: colors.accent,
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
            color={colors.textPrimary}
            _activeLink={{
              color: colors.accent,
              borderBottom: "2px solid",
            }}
            _hover={{
              textDecoration: "none",
              color: colors.accent,
            }}
            _focus={{ 
              color: colors.accent,
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