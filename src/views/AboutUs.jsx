import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";
import team from "@/data/team.json";
import { useAppColors } from "@/theme/colors";

const AboutUs = () => {
  const colors = useAppColors();

  return (
    <Box bg={colors.bg} maxW="80%" mx="auto" minH="100vh" py={12} border="1px solid" borderRadius="lg" borderColor={colors.secondary}>
      <Container maxW="2xl">
        <Stack spacing={8} align="center" textAlign="center">
          <Heading fontSize="4xl" fontWeight="bold" margin={5}>
            Sobre nosotros
          </Heading>
          {team.map((miembro, id) => (
            <Box
              key={id}
              bg={colors.bgPrimary}
              boxShadow="lg"
              rounded="2xl"
              p={8}
              w="full"
              transition="all 0.3s"
              _hover={{ transform: "scale(1.01)", shadow: "xl" }}
            >
              <Stack spacing={5}>
                <Heading size="lg" color={colors.primary} fontWeight={"bold"}>
                  {miembro.nombre}
                </Heading>
                <Text fontSize="md" color={colors.textColor} textAlign={"justify"}>
                  {miembro.descripcion}
                </Text>
                <Box textAlign="left">
                  <Text mb={2}><strong>Funcionalidades implementadas:</strong></Text>
                  {miembro.tareas.map((tarea, i) => (
                    <Text key={i}>{tarea}</Text>
                  ))}
                </Box>
              </Stack>
            </Box>
          ))}
          <Box
            bg={colors.bgPrimary}
            boxShadow="md"
            rounded="xl"
            p={2}
            w="full"
            textAlign="center"
          >
            <Text fontSize="sm" color={colors.textColor}>
              Tecnologías usadas: React, Chakra UI, JavaScript y mucho café ☕
            </Text>
            <Text fontSize="sm" color={colors.textColor}>
              Contactenos: correo@gmail.com
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;