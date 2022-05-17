/* Importamos herramientas */
import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

/* Importamos componentes */
import Navigation from './components/Navigation';
import Home from './components/Home';
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
      <div className="contenedor">
        <Navigation/>

        <Routes> {/* Renderizamos componentes según las rutas */}
          <Route path="/" element={<Home/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
