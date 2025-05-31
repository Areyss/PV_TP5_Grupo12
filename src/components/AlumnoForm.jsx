import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Input,
    Button,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode"

function AlumnoForm({ onAdd }) {
    const navigate = useNavigate();

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
        onAdd(alumno);
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

                    <Button type="submit"  color="white" bg={useColorModeValue("blue.600", "blue.600")} mt={4}>
                        Agregar Alumno
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}


export default AlumnoForm;
