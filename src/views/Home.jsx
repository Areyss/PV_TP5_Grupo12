import { Link as RouterLink } from "react-router-dom";
import { Heading, Text, Box, VStack, List, HStack, Button, Image, SimpleGrid, Accordion, Separator } from "@chakra-ui/react";
import { useAppColors } from "@/theme/colors";
const Home = () => {
  const colors = useAppColors();
  return (
    <Box p={6} maxW="80%" mx="auto" border="1px solid" borderRadius="lg" borderColor={colors.secondary} boxShadow="lg" bg={colors.bgPrimary}>
      <Box size="auto" bg="black" borderRadius="md" >
        <Image
        src="/unju_cover.jpg"
        alt="imagen de la Facultad"
        aspectRatio={16 / 6}
        mx="auto"
        mb={4}
        rounded={"md"}
        color="black"
        opacity={0.7}
      />
      </Box>
      
      <VStack spacing={5} align="stretch">
        <Heading as="h2" size="3xl" color={colors.primary} mb={4}>
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

        <Separator />

        <SimpleGrid columns={{ base: 1, md: 3 }} padding={6} mb={5}>
          <Box p={5} bg={colors.primary} borderRadius="md" shadow="md" textAlign="center" margin={3} display="flex" flexDirection="column" justifyContent="space-between" minH={140} _hover={{ transform: "scale(1.01)", shadow: "xl" }}>
            <Heading size="md" mb={2}>📋 Ver Alumnos</Heading>
            <Text fontSize="sm" mb={3}>Revisá la lista completa de estudiantes registrados.</Text>
            <Button as={RouterLink} to="/alumnos"  size="sm" mt="auto">Acceder</Button>
          </Box>
          <Box p={5} bg={colors.primary} borderRadius="md" shadow="md" textAlign="center" margin={3} display="flex" flexDirection="column" justifyContent="space-between" minH={140} _hover={{ transform: "scale(1.01)", shadow: "xl" }}>
            <Heading size="md" mb={2}>➕ Nuevo Alumno</Heading>
            <Text fontSize="sm" mb={3}>Cargá nuevos datos al sistema.</Text>
            <Button as={RouterLink} to="/nuevoAlumno"  size="sm" mt="auto" >Acceder</Button>
          </Box>
          <Box p={5} bg={colors.primary} borderRadius="md" shadow="md" textAlign="center" margin={3} display="flex" flexDirection="column" justifyContent="space-between" minH={140} _hover={{ transform: "scale(1.01)", shadow: "xl"}}>
            <Heading size="md" mb={2}>ℹ️ Acerca del Proyecto</Heading>
            <Text fontSize="sm" mb={3}>Conocé al equipo desarrollador y los objetivos.</Text>
            <Button as={RouterLink} to="/about"  size="sm" mt="auto" >Acceder</Button>
          </Box>
        </SimpleGrid>

        <Separator />
        <Heading size="2xl" mb={4} color={colors.primary}> Avisos Institucionales</Heading>

        <Accordion.Root collapsible mb={10} defaultValue={["item-1"]} multiple>
          <Accordion.Item key={1} value="item-1">
            <Accordion.ItemTrigger>
              <Box flex="1" textAlign="left">📅 Inscripción a materias</Box>
              <Accordion.ItemIndicator  />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent pb={4}>
              <Accordion.ItemBody>Las inscripciones están abiertas hasta el <strong>30 de mayo</strong>. Accedé desde el panel de estudiante.</Accordion.ItemBody>
              
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item key={2} value="item-2">
            <Accordion.ItemTrigger>
              <Box flex="1" textAlign="left">📢 Actualización de datos</Box>
              <Accordion.ItemIndicator  />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent pb={4}>
              <Accordion.ItemBody>Recordá mantener tus datos personales y de contacto actualizados en el sistema.</Accordion.ItemBody>
              
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item key={3} value="item-3">
            <Accordion.ItemTrigger>
              <Box flex="1" textAlign="left">🎓 Certificados</Box>
              <Accordion.ItemIndicator  />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent pb={4}>
              <Accordion.ItemBody>La entrega de certificados será el <strong>viernes 7 de junio</strong> en la Secretaría Académica.</Accordion.ItemBody>
              
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
        <Box p={4} borderLeft="4px solid" borderColor={colors.primary} bg={colors.secondary} mb={10}>
        <Text fontStyle="italic" fontSize="lg" textAlign="center">
          "Educamos hoy a los profesionales del mañana."
        </Text>
      </Box>
      <VStack spacing={1} fontSize="sm" textAlign="center" color="gray.600">
        <Text>📍 Facultad de Ingeniería – UNJu</Text>
        <Text>📞 (0381) 123-4567</Text>
        <Text>✉️ alumnos@fi.unju.edu.ar</Text>
        <Text>🕘 Horario de atención: 8 a 13 hs</Text>
      </VStack>
      </VStack>
    </Box>
  );
};

export default Home;