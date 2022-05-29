/* Importamos herramientas */
import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

/* Importamos componentes */
import Navigation from './components/Navigation';
import Home from './components/Home';
import Inicio from './components/Inicio';
import Registro from './components/Registro';
import Conocenos from './components/Conocenos';
import Foros from './components/Foros';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>

        <Routes> {/* Renderizamos componentes según las rutas */}
          <Route path="/" element={<Home/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/foros" element={<Foros/>}/>
          <Route path="/conocenos" element={<Conocenos/>}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
