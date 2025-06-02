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
import { useColorModeValue } from "@/components/ui/color-mode";

const PapeleraAlumnos = () => {
    const { alumnos, setAlumnos } = useOutletContext();
    const alumnosBorrados = alumnos.filter(alumno => !alumno.esta_cursando);

    const handleRestaurar = (lu) => {
        setAlumnos(prevAlumnos =>
            prevAlumnos.map(alumno =>
                alumno.lu === lu ? { ...alumno, esta_cursando: true } : alumno
            )
        );
    };

    return (
        <Box p={6}>
            <Heading
                as="h2"
                size="2xl"
                color={useColorModeValue("gray.700", "gray.200")}
                mb={8}
            >
                Papelera de Alumnos
            </Heading>
            {alumnosBorrados.length === 0 ? (
                <Text fontSize="xl" color={useColorModeValue("gray.700", "gray.300")}>
                    No hay alumnos en la papelera.
                </Text>
            ) : (
                <SimpleGrid columns={{ xl: 3, md: 2 }} gap="40px">
                    {alumnosBorrados.map((alumno) => (
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
                                <Text><strong>LU:</strong> {alumno.lu}</Text>
                                <Text><strong>Curso:</strong> {alumno.curso}</Text>
                                <Text><strong>Email:</strong> {alumno.email}</Text>
                            </Stack>
                            <Flex gap={3}>
                                <Button
                                    size="sm"
                                    bg={useColorModeValue("blue.600", "blue.600")}
                                    _hover={{ bg: useColorModeValue("blue.700", "blue.700") }}
                                    color="white"
                                    onClick={() => handleRestaurar(alumno.lu)}
                                >
                                    Restaurar
                                </Button>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>
            )}
            <Box mt={8}>
                <Link to="/alumnos">
                    <Button colorScheme="gray">Volver</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default PapeleraAlumnos;