/* Importamos herramientas */
import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './components/Login/PrivateRoutes';
import UserContext from './components/Login/AccountContext';

/* Importamos componentes */
import Navigation from './components/Navigation';
import Home from './components/Home';
import Inicio from './components/Inicio';
import Registro from './components/Registro'
import RegistroCliente from './components/RegistroCliente';
import RegistroVendedor from './components/RegistroVendedor';
import Conocenos from './components/Conocenos';
import Foros from './components/Foros';
import Blog from './components/Blog';
import Productos from './components/Productos';
import ForoDetalles from './components/ForoDetalles';
import ForoDiscusiones from './components/ForoDiscusiones';
import DiscusionComentarios from './components/DiscusionComentarios';
import Recomendaciones from './components/Recomendaciones';
import Prerestaurar from './components/Prerestaurar';
import Restaurar from './components/Restaurar';
import Pago from './components/Pago';
import Carrito from './components/Carrito';
import Envio from './components/Envio';
import IndividualProduct from './components/IndividualProduct/IndividualProduct';
import Envio from './components/Envio.jsx';

function App() {
  return (
    <UserContext>
      <Router>
        <div>
          <Navigation />
          <Routes> {/* Renderizamos componentes según las rutas */}
            <Route path="/" element={<Home />} />
            {/*Dentro de esta ruta deben ir todas las pantallas que el usuario utilizará cuando haya iniciado sesión*/}
            {<Route element={<PrivateRoutes />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/Carrito" element={<Carrito />} />
              <Route path="/metodoPago" element={<Pago />} />
              <Route path="/Envio" element={<Envio />} />
            </Route>}
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/prerestore" element={<Prerestaurar />} />
            <Route path="/restore" element={<Restaurar />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/registroCliente" element={<RegistroCliente />} />
            <Route path="/registroVendedor" element={<RegistroVendedor />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/recomendaciones" element={<Recomendaciones />} />
            <Route path="/foros" element={<Foros />} />
            <Route exact path="/foros/:id" element={<ForoDetalles />} />
            <Route exact path="/foros/:id/discusiones/" element={<ForoDiscusiones />} />
            <Route exact path="/foros/:id/discusiones/:id" element={<DiscusionComentarios />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/productos" element={<Productos />} />
            <Route exact path="/productos/:id" element={<IndividualProduct />}/>
          </Routes>
        </div>

      </Router>
    </UserContext>
  );
}

export default App;
