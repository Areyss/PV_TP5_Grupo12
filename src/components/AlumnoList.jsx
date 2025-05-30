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

const ListAlumno = () => {
    const { alumnos } = useOutletContext();

    return (
        <Box p={6}>
            <Heading
                as="h2"
                size="3xl"
                color={useColorModeValue("#A0C878", "#720455")}
                mb={8}
            >
                Bienvenidos al Sistema de Gestión de Alumnos
            </Heading>

            {alumnos.length === 0 ? (
                <Text
                    fontSize="xl"
                    color={useColorModeValue("gray.700", "gray.300")}
                >
                    No hay alumnos cargados.
                </Text>
            ) : (
                <SimpleGrid columns={{ xl: 3, md: 2 }} gap="40px">
                    {alumnos.map((alumno) => (
                        <Box
                            key={alumno.lu}
                            p={6}
                            borderWidth="1px"
                            borderRadius="md"
                            borderColor={useColorModeValue("gray.300", "gray.600")}
                            bg={useColorModeValue("gray.100", "gray.700")}
                            boxShadow="md"
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
                                        bg={useColorModeValue("green.600", "green.600")}
                                        _hover={{ bg: useColorModeValue("green.700", "green.700") }}
                                        color="white"
                                        size="sm"
                                    >
                                        Ver detalles
                                    </Button>
                                </Link>
                                <Link to={`/alumnos/editar/${alumno.lu}`}>
                                    <Button
                                        size="sm"
                                        bg="yellow.400"
                                        _hover={{ bg: "yellow.600" }}
                                        color="white"
                                    >
                                        Editar
                                    </Button>
                                </Link>
                                <Button
                                    size="sm"
                                    bg={useColorModeValue("red.600", "red.600")}
                                    _hover={{ bg: useColorModeValue("red.700", "red.700") }}
                                    color="white"
                                >
                                    Eliminar
                                </Button>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
};

export default ListAlumno;
