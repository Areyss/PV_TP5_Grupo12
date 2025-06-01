
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import { useColorModeValue } from "@/components/ui/color-mode"
const DeleteButton = ({ alumno, setAlumnos}) => {
    const handleEliminar = (lu) => {

        setAlumnos(prevAlumnos =>
            prevAlumnos.map(alumno =>
                alumno.lu === lu ? { ...alumno, esta_cursando: false } : alumno
            )
        );

    };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
            size="sm"
            bg={useColorModeValue("red.600", "red.600")}
            _hover={{ bg: useColorModeValue("red.700", "red.700") }}
            color="white"
        >
            Eliminar
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Confirme que quiere eliminar</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                ¿Estás seguro que quiere eliminar a {alumno.nombre} {alumno.apellido}?
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancelar</Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button 
                as = "button"
                onClick={() => handleEliminar(alumno.lu)}> Eliminar </Button>
              </Dialog.ActionTrigger>
              
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
export default DeleteButton