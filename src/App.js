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
import Blog from './components/Blog';
import Productos from './components/Productos';
import ForoDetalles from './components/ForoDetalles';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>

        <Routes> {/* Renderizamos componentes según las rutas */}
          <Route path="/" element={<Home/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/foros" element={<Foros/>}/>
          <Route exact path="/foro/:id" element={<ForoDetalles/>}/> 
          <Route path="/conocenos" element={<Conocenos/>}/>
          <Route path="/productos" element={<Productos/>}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
