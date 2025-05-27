import { Link } from "react-router-dom";
const Home = () =>{
    return(
        <div>
            <h2>Bienvenidos al Sistema de Gestión de Alumnos</h2>
            <p>
                Esta aplicación permite administrar la información de los estudiantes de la
                Facultad de Ingeniería - UNJu.
            </p>
            <p>
                Desde aquí podrás ver la lista de alumnos, agregar nuevos, modificar sus datos
                o consultar sus detalles.
            </p>

            <div>
                <Link to="/alumnos" >Ver Lista de Alumnos</Link>
                <Link to="/nuevoAlumno" >Agregar Alumno</Link>
            </div>
            <h3>📰 Avisos recientes</h3>
            <ul>
                <li>📅 Se abre la inscripción a materias hasta el 30 de mayo.</li>
                <li>📢 Recordá mantener tus datos actualizados en el sistema.</li>
                <li>🎓 Entrega de certificados el viernes 7 de junio.</li>
            </ul>
        </div>
    )
}

export default Home;