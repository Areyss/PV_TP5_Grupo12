import { Link as RouterLink } from "react-router-dom";
import { Heading, Text, Box, VStack, List, HStack, Button } from "@chakra-ui/react";
import {
  useColorModeValue,
} from "@/components/ui/color-mode"
const Home = () => {
  return (
    <Box p={6} maxW="800px" mx="auto">
      <VStack spacing={5} align="stretch">
        <Heading as="h2" size="3xl" color= {useColorModeValue('#A0C878', '#720455')} mb={4}>
          Bienvenidos al Sistema de Gestión de Alumnos
        </Heading>

        <Text fontSize="lg">
          Esta aplicación permite administrar la información de los estudiantes de la
          Facultad de Ingeniería - UNJu.
        </Text>

        <Text fontSize="lg">
          Desde aquí podrás ver la lista de alumnos, agregar nuevos, modificar sus datos
          o consultar sus detalles.
        </Text>

        <HStack spacing={4} mt={4} mb={8}>
          <Button 
            as={RouterLink} 
            to="/alumnos" 
            bg={useColorModeValue('#A0C878', '#720455')} 
            size="lg"
          >
            Ver Lista de Alumnos
          </Button>
          <Button 
            as={RouterLink} 
            to="/nuevoAlumno" 
            colorScheme="teal" 
            variant="outline" 
            size="lg"
          >
            Agregar Alumno
          </Button>
        </HStack>

        <Heading as="h2" size="lg" color= {useColorModeValue('#A0C878', '#720455')} mb={4}>
          📰 Avisos recientes
        </Heading>
        
        <List.Root spacing={3} fontSize="md" pl={5}>
          <List.Item>📅 Se abre la inscripción a materias hasta el 30 de mayo.</List.Item>
          <List.Item>📢 Recordá mantener tus datos actualizados en el sistema.</List.Item>
          <List.Item>🎓 Entrega de certificados el viernes 7 de junio.</List.Item>
        </List.Root>
      </VStack>
    </Box>
  );
};

export default Home;