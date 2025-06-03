import { useParams, useOutletContext } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Stack,
  Badge,
  Button,
  VStack,
  Card, 
  Avatar,
  Flex,
  Center
} from '@chakra-ui/react';
import BackButton from '@/components/BackButton';
import DeleteButton from '@/components/DeleteButton';
import { useAppColors } from '@/theme/colors';

const DetalleAlumno = () => {
  const { lu } = useParams();
  const { alumnos, setAlumnos } = useOutletContext();
  const colors = useAppColors();

  const alumno = alumnos.find((a) => a.lu === lu);

  if (!alumno) {
    return (
      <Box p={8}>
        <Heading size="md" color="red.500">
          Alumno no encontrado
        </Heading>
        <Text mt={4}>LU: {lu}</Text>
      </Box>
    );
  }

  return (
    <Center>
      <Card.Root p={10} width="65%" alignSelf="center">
        <Card.Header pb={4} borderBottom="2px solid" color={colors.primary}>
          <Heading size="3xl" >
            Detalles del Alumno
          </Heading>
        </Card.Header>

        <Card.Body align="start" p="0" mt="10" mb="10">
          <Flex justify="space-between" align="center" >
            <Stack alignItems="center"  width="40%">
              <Avatar.Root size="2xl" shape="rounded">
                {/* <Avatar.Image src="https://picsum.photos/200/300" /> */}
                <Avatar.Fallback name={`${alumno.nombre} ${alumno.apellido}`} />
              </Avatar.Root>
              <Card.Title mt="5">
                <Text fontWeight="bold" textStyle="3xl" color={colors.primary}>
                  {alumno.nombre} {alumno.apellido}
                </Text>                
              </Card.Title>
            </Stack>

            <VStack align="start" gap="4" borderLeft={`2px solid ${colors.primary}`} pl="20px" width="60%" >
              <Text fontWeight="normal" textStyle="lg">
                <strong>LU:</strong> {alumno.lu}
              </Text>
              <Text fontWeight="normal" textStyle="lg">
                <strong>Curso:</strong> {alumno.curso}
              </Text>
              <Text fontWeight="normal" textStyle="lg">
                <strong>Email:</strong> {alumno.email}
              </Text>
              <Text fontWeight="normal" textStyle="lg">
                <strong>Domicilio:</strong> {alumno.domicilio}
              </Text>
              <Text fontWeight="normal" textStyle="lg">
                <strong>Teléfono:</strong> {alumno.telefono}
              </Text>
              <Text fontWeight="normal" textStyle="lg">
                <strong>Estado:</strong>{' '}
                {alumno.esta_cursando ? (
                  <Badge colorPalette="green">Cursando</Badge>
                ) : (
                  <Badge colorPalette="red">No cursando</Badge>
                )}
              </Text>
            </VStack>
          </Flex>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button >Editar</Button>
          <DeleteButton alumno={alumno} setAlumnos={setAlumnos}/>
          <BackButton />
        </Card.Footer>
      </Card.Root>
    </Center>
  );
};

export default DetalleAlumno;
