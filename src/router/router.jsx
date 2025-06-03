import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../views/Home';
import DetalleAlumno from "../views/DetalleAlumno";
import NuevoAlumno from "../views/NuevoAlumno";
import ErrorPage from "../views/ErrorPage";
import ListAlumno from "../components/AlumnoList";
import AboutUs from "@/views/AboutUs";
import PapeleraAlumnos from "@/views/PapeleraAlumnos";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {index: true, element: <Home/>},
            {path: 'alumnos/', element: <ListAlumno/>},
            {path: 'alumnos/editar/:lu', element: <NuevoAlumno/>}, 
            {path: 'alumnos/:lu', element: <DetalleAlumno/>},
            {path: 'nuevoAlumno/', element: <NuevoAlumno />},
            {path: 'alumnos/papelera', element: <PapeleraAlumnos/>},
            {path: 'about', element: <AboutUs />},
            {path: '*', element: <ErrorPage/>}
        ]
    }
]);