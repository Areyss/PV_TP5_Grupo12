import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../views/Home';
import DetalleAlumno from "../views/DetalleAlumno";
import ErrorPage from "../views/ErrorPage";
import ListAlumno from "../components/ListAlumno";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {index: true, element: <Home/>},
            {path: 'alumnos/', element: <ListAlumno/>},
            // {path: 'alumnos/:id/editar', element: </>}, 
            {path: 'alumnos/:id', element: <DetalleAlumno/>},
            // {path: 'nuevoAlumno/', element: </>},
            // {path: 'about', element: </>},
            {path: '*', element: <ErrorPage/>}
        ]
    }
]);