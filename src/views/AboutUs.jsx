import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

const AboutUs = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const accentColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box bg={bg} minH="100vh" py={12}>
      <Container maxW="2xl">
        <Stack spacing={8} align="center" textAlign="center">
          <Heading fontSize="4xl" fontWeight="bold" margin={5}>
            Sobre nosotros
          </Heading>
          <Box
            bg={cardBg}
            boxShadow="lg"
            rounded="2xl"
            p={8}
            w="full"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.01)", shadow: "xl" }}
          >
            <Stack spacing={5}>
              <Heading size="lg" color={accentColor}>
                Joel Brian Garcia 🧑🏻‍💻
              </Heading>

              <Text fontSize="md" color={textColor}>
                Estudiante de la carrera <strong>Analista Programador Universitario</strong> apasionado por crear soluciones tecnológicas a problemas cotidianos. Este sistema de gestión de alumnos fue desarrollado utilizando lo aprendido en la cursada.
              </Text>

              <Box textAlign="left">
                <Text mb={2}><strong>Funcionalidades implementadas:</strong></Text>
                <Text>. 📋 Listado de estudiantes</Text>
                <Text>. ➕ Formularios para agregar/editar alumnos</Text>
                <Text>. 🖊 Formularios para editar alumnos</Text>
              </Box>

            </Stack>
          </Box>

          <Box
            bg={cardBg}
            boxShadow="lg"
            rounded="2xl"
            p={8}
            w="full"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.01)", shadow: "xl" }}
          >
            <Stack spacing={5}>
              <Heading size="lg" color={accentColor}>
                Nombre
              </Heading>

              <Text fontSize="md" color={textColor}>
                Descripcion
              </Text>

              <Box textAlign="left">
                Tareas
              </Box>
            </Stack>
          </Box>

          <Box
            bg={cardBg}
            boxShadow="md"
            rounded="xl"
            p={2}
            w="full"
            textAlign="center"
          >
            <Text fontSize="sm" color={textColor}>
              Tecnologías usadas: React, Chakra UI, JavaScript y mucho café ☕
            </Text>
            <Text fontSize="sm" color={textColor}>
              Contactenos: correo@gmail.com
            </Text>
          </Box>
        </Stack>
      </Container>

    </Box>
  );
};

export default AboutUs;