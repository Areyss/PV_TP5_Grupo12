import AlumnoForm from "../components/AlumnoForm";
import { useOutletContext } from "react-router-dom";

const NuevoAlumno = () => {
    const {alumnos, setAlumnos} = useOutletContext();

    const addAlumno = (nuevoAlumno) => {
        setAlumnos([...alumnos, nuevoAlumno]);
    };

    return (
        <div className="formulario-alumno">
            <AlumnoForm onAdd={addAlumno}/>
        </div>
    );
};

export default NuevoAlumno;