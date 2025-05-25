import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import { useState } from 'react';

import alumnosPorDefecto from './data/alumnos.json';
import './style/estiloBasico.css'
const App = () => {
  const [alumnos, setAlumnos] = useState(alumnosPorDefecto);

  return (
    <div className='container'>
      <header>
        <h1>Facultad de Ingeniería - UNJu</h1>
        <p>Gestión Académica de Alumnos</p>
        <NavBar />
      </header>
      <main>
        <Outlet context={{alumnos}}/>
      </main>
      <footer>
        <p>© 2025 Facultad de Ingeniería - UNJu</p>
        <p>Desarrollado por Grupo 12</p>
      </footer>
    </div>
  );
};

export default App;
