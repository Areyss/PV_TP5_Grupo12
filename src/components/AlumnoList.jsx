import { useOutletContext, Link } from "react-router-dom";
import {
    Box,
    Heading,
    Text,
    Stack,
    Button,
    Flex,
    SimpleGrid,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode"
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { useAppColors } from "@/theme/colors";

const ListAlumno = () => {
    const { alumnos , setAlumnos} = useOutletContext();
    const alumnosVisibles = alumnos.filter(alumno => alumno.esta_cursando);
    const alumnosBorrados = alumnos.filter(alumno => !alumno.esta_cursando);

    const colors = useAppColors();

    return (
        <Box p={6}>
            <Flex justify="space-between" align="center" mb={6}>
            <Heading
                as="h2"
                size="3xl"
                color={colors.primary}
                mb={8}
            >
                Bienvenidos al Sistema de Gestión de Alumnos
            </Heading>
            {alumnosBorrados.length > 0 && (
                <Box mb={6}>
                    <Link to="/alumnos/papelera">
                        <Button
                            bg={colors.gray}
                            _hover={{ bg: useColorModeValue("gray.600", "gray.800") }}
                            color="white"
                        >
                            Ver Papelera 🗑️
                        </Button>
                    </Link>
                </Box>
            )}
            </Flex>
            {alumnosVisibles.length === 0 ? (
                <Text
                    fontSize="xl"
                    color={colors.textColor}
                >
                    No hay alumnos cargados.
                </Text>
            ) : (
                <SimpleGrid columns={{ xl: 3, md: 2 }} gap="40px">
                    {alumnosVisibles.map((alumno) => (
                        <Box
                            key={alumno.lu}
                            p={6}
                            borderWidth="1px"
                            borderRadius="md"
                            borderColor={colors.secondary}
                            bg={colors.bgPrimary}
                            boxShadow="md"
                            _hover={{ transform: "scale(1.01)", shadow: "xl" }}
                        >
                            <Heading as="h3" size="lg" mb={3}>
                                {alumno.nombre} {alumno.apellido}
                            </Heading>

                            <Stack spacing={1} mb={4}>
                                <Text>
                                    <strong>LU:</strong> {alumno.lu}
                                </Text>
                                <Text>
                                    <strong>Curso:</strong> {alumno.curso}
                                </Text>
                                <Text>
                                    <strong>Email:</strong> {alumno.email}
                                </Text>
                            </Stack>

                            <Flex gap={3} wrap="wrap">
                                <Link to={`/alumnos/${alumno.lu}`}>
                                    <Button
                                        size="sm"
                                        variant="solid"
                                    >
                                        Ver detalles
                                    </Button>
                                </Link>
                                <Link to={`/alumnos/editar/${alumno.lu}`}>
                                    <EditButton lu={alumno.lu} />
                                </Link>
                                <DeleteButton alumno={alumno} setAlumnos={setAlumnos}/>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
};

export default ListAlumno;
