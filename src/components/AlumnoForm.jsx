import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AlumnoForm({onAdd}) {
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

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
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

                <br />

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
                </label><br />

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
                </label><br />

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
                </label><br />

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
                </label><br />

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
                </label><br />

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
                </label><br />

                <button type="submit">Agregar Alumno</button>
            </form>
        </div>
    );
}

export default AlumnoForm;
