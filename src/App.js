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
import ForoDiscusiones from './components/ForoDiscusiones';
import DiscusionComentarios from './components/DiscusionComentarios';
import Recomendaciones from './components/Recomendaciones';
import PrivateRoutes from './components/Login/PrivateRoutes';
import UserContext from './components/Login/AccountContext';

function App() {
  return (
    <UserContext>
    <Router>
      <div>
        <Navigation/>

        <Routes> {/* Renderizamos componentes según las rutas */}
          <Route path="/" element={<Home/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route path="/Home" element={<Home/>}/>
          </Route>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/recomendaciones" element={<Recomendaciones/>}/>
          <Route path="/foros" element={<Foros/>}/>
          <Route exact path="/foros/:id" element={<ForoDetalles/>}/> 
          <Route exact path="/foros/:id/discusiones/" element={<ForoDiscusiones/>}/> 
          <Route exact path="/foros/:id/discusiones/:id" element={<DiscusionComentarios/>}/> 
          <Route path="/conocenos" element={<Conocenos/>}/>
          <Route path="/productos" element={<Productos/>}/>
        </Routes>
      </div>

    </Router>
    </UserContext>
  );
}

export default App;
