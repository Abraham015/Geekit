import { VStack,FormControl } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import "../css/Home.css";

/* Importamos componentes de Home */
import Recomendaciones from "./Home/Recomendaciones";
import PopularesBusquedas from "./Home/PopularesBusquedas";
import PanelDiscusiones from "./Home/PanelDiscusiones";
import FormularioContacto from "./Home/FormularioContacto";
import { AccountContext } from "./Login/AccountContext";

const Home = () => {
  const {user}=useContext(AccountContext);
  return <VStack as="form">
    <FormControl>
      <img
        src={process.env.REACT_APP_BASE_URL_IMAGES + "/Inicio.jpg"}
        className="imagen" alt=""
      />
    </FormControl>
    <FormControl className="row">
      <Recomendaciones />
      <PopularesBusquedas />
      <FormControl className="column side">
        <FormControl className="LogIn">
          {user.loggedIn === true ?
            <>
              <i className="fa-solid fa-cart-shopping" />
              <p className="Log"><Link to="/">Cerrar Sesión</Link></p>
            </>
            :
            <>
              <i className="fa-solid fa-cart-shopping" />
              <i className="fa-solid fa-arrow-right-to-bracket" />
              <p className="Log"><Link to="/inicio">Iniciar Sesión</Link></p>
              <p className="Log"><Link to="/registro">Registrarse</Link></p>
            </>
          }
        </FormControl>
        <br />
        <PanelDiscusiones />
      </FormControl>
    </FormControl>
    <FormControl className="pie">
      <footer>
          <div>
            <FormularioContacto />
            <div> {/*Aqui va el logo de Geek it*/} </div>{" "}
          </div>{" "}
        </footer>{" "}
    </FormControl>
  </VStack>;
}

export default Home;
