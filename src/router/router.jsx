import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../views/Home';
import DetalleAlumno from "../views/DetalleAlumno";
import ErrorPage from "../views/ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {index: true, element: <Home/>},
            // {path: 'alumnos/', element: </>},
            // {path: 'alumnos/:id/editar', element: </>}, 
            {path: 'alumnos/:id', element: <DetalleAlumno/>},
            // {path: 'agregarAlumno/', element: </>}
            {path: '*', element: <ErrorPage/>}
        ]
    }
]);