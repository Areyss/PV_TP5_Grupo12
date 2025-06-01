import { useState, useEffect } from 'react';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import { Box, Button, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode"

function AlumnoForm({ onAdd, onEdit }) {
    const { alumnos } = useOutletContext();

    const navigate = useNavigate();
    const { lu } = useParams();

    const [alumno, setAlumno] = useState({
        lu: '',
        nombre: '',
        apellido: '',
        curso: '',
        email: '',
        domicilio: '',
        telefono: '',
        esta_cursando: true
    });

    useEffect(() => {
        if (lu && alumnos) {
            const existente = alumnos.find(a => Number(a.lu) === Number(lu));
            if (existente) setAlumno(existente);
        }
    }, [lu, alumnos]);

    const handleChange = (e) => {
        const field = e.target;
        const fieldValue = field.value;
        const spanTag = field.nextElementSibling;

        if (fieldValue === "") {
            spanTag.innerText = "Este campo es obligatorio";
        } else {
            spanTag.innerText = "";
        }

        setAlumno(prevAlumn => ({
            ...prevAlumn,
            [field.name]: fieldValue
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const camposObligatorios = ['lu', 'nombre', 'apellido', 'curso', 'email', 'domicilio', 'telefono'];
        if (camposObligatorios.some(campo => alumno[campo].trim() === '')) {
            alert('Por favor, completá todos los campos.');
            return;
        }

        if (!lu && alumnos.find(a => Number(a.lu) === Number(alumno.lu))) {
            alert("Ya existe un alumno con ese LU.");
            return;
        }

        if (lu) {
            onEdit(alumno); // actualiza
        } else {
            onAdd(alumno); // agrega nuevo
        }

        setAlumno({
            lu: '',
            nombre: '',
            apellido: '',
            curso: '',
            email: '',
            domicilio: '',
            telefono: '',
            esta_cursando: true
        });

        navigate('/alumnos');
    };
    const inputBg = useColorModeValue("gray.50", "gray.700");
    const inputBorder = useColorModeValue("gray.300", "gray.600");
    const errorColor = "red.500";

    return (
        <Box className='form-container' maxW="xl" mx="auto">
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <Box>
                        <label>
                            LU:
                            <input
                                type="number"
                                name="lu"
                                placeholder="LU"
                                value={alumno.lu}
                                onChange={handleChange}
                                disabled={lu}
                            />
                            <span className='error-span'></span>
                        </label>
                    </Box>

                    <Box>
                        <label>
                            Nombre:
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                value={alumno.nombre}
                                onChange={handleChange}
                            />
                            <span className='error-span'></span>
                        </label>
                    </Box>

                    <Box>
                        <label>
                            Apellido:
                            <input
                                type="text"
                                name="apellido"
                                placeholder="Apellido"
                                value={alumno.apellido}
                                onChange={handleChange}
                            />
                            <span className='error-span'></span>
                        </label>
                    </Box>

                    <Box>
                        <label>
                            Curso:
                            <input
                                type="text"
                                name="curso"
                                placeholder="Curso"
                                value={alumno.curso}
                                onChange={handleChange}
                            />
                            <span className='error-span'></span>
                        </label>
                    </Box>

                    <Box>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={alumno.email}
                                onChange={handleChange}
                            />
                            <span className='error-span'></span>
                        </label>
                    </Box>

                    <Box>
                        <label>
                            Domicilio:
                            <input
                                type="text"
                                name="domicilio"
                                placeholder="Domicilio"
                                value={alumno.domicilio}
                                onChange={handleChange}
                            />
                            <span className='error-span'></span>
                        </label>
                    </Box>

                    <Box>
                        <label>
                            Teléfono:
                            <input
                                type="number"
                                name="telefono"
                                placeholder="Teléfono"
                                value={alumno.telefono}
                                onChange={handleChange}
                            />
                            <span className='error-span'></span>
                        </label>
                    </Box>

                    <Button
                        type="submit"
                        color="white"
                        bg={useColorModeValue("blue.600", "blue.600")}
                        _hover={{ bg: useColorModeValue("blue.700", "blue.700") }}
                    >
                        {lu ? "Guardar Cambios" : "Agregar Alumno"}
                    </Button>

                    {lu && (
                        <Button
                            type="button"
                            color="white"
                            onClick={() => navigate("/alumnos")}
                            bg={useColorModeValue("red.600", "red.600")}
                            _hover={{ bg: useColorModeValue("red.700", "red.700") }}
                        >
                            Cancelar
                        </Button>
                    )}
                </Stack>
            </form>
        </Box>
    );
}


export default AlumnoForm;
