import { Link } from "react-router-dom";
const NavBar = () =>{
    return(
        <nav>
            <Link to='/'> Inicio </Link>
            <Link to='/alumnos'> Lista de Alumnos </Link>
            <Link to='/nuevoAlumno'> Nuevo Alumno </Link>
            <Link to='/about'> Acerca de </Link>
        </nav>
    )
}

export default NavBar;