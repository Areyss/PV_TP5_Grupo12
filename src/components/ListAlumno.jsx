import { useOutletContext } from "react-router-dom";
const ListAlumno = () => {
    const { alumnos } = useOutletContext();
    return (
        <div className="card-grid">
            {alumnos.length === 0 ? (
                <p>No hay alumnos cargados.</p>
            ) : (
                alumnos.map((alumno, i) => (
                    <div className="card-container" key={i}>
                        <h3>{alumno.nombre} {alumno.apellido}</h3>
                        <p><strong>LU:</strong> {alumno.lu}</p>
                        <p><strong>Curso:</strong> {alumno.curso}</p>
                        <p><strong>Email:</strong> {alumno.email}</p>
                        <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
                        <p><strong>Teléfono:</strong> {alumno.telefono}</p>
                        <p>
                            <strong>Estado:</strong>{" "}
                            {alumno.esta_cursando ? "Cursando actualmente" : "No cursando"}
                        </p>
                        <div className="buttons-container">
                            <button>Ver detalles</button>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </div>

                    </div>
                ))
            )}
        </div>
    );
};

export default ListAlumno;