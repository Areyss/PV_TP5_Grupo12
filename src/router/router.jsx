import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../views/Home';
import DetalleAlumno from "../views/DetalleAlumno";
import NuevoAlumno from "../views/NuevoAlumno";
import ErrorPage from "../views/ErrorPage";
import ListAlumno from "../components/AlumnoList";
import AlumnoForm from "@/components/AlumnoForm";

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
            // {path: 'about', element: </>},
            {path: '*', element: <ErrorPage/>}
        ]
    }
]);