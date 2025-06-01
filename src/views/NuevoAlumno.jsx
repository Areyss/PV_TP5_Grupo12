import AlumnoForm from "../components/AlumnoForm";
import { useOutletContext, useParams } from "react-router-dom";

const NuevoAlumno = () => {
  const { alumnos, setAlumnos } = useOutletContext();

  const addAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };

  const updateAlumno = (alumnoActualizado) => {
    const nuevosAlumnos = alumnos.map(al =>
      Number(al.lu) === Number(alumnoActualizado.lu) ? alumnoActualizado : al
    );
    setAlumnos(nuevosAlumnos);
  };

  return (
    <div className="formulario-alumno">
      <AlumnoForm onAdd={addAlumno} onEdit={updateAlumno} />
    </div>
  );
};

export default NuevoAlumno;