import React, { Component } from "react";
import { Link } from 'react-router-dom'

/* Importamos componentes de Home */
import Recomendaciones from "./Home/Recomendaciones";
import PopularesBusquedas from "./Home/PopularesBusquedas";
import PanelDiscusiones from "./Home/PanelDiscusiones";
import FormularioContacto from "./Home/FormularioContacto";
import { AccountContext } from "./Login/AccountContext";

export default class Home extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.REACT_APP_BASE_URL_IMAGES + "/Inicio.jpg"}
          className="imagen" alt=""
        />
        {/*Parte inferior de la imagen*/}{" "}
        <div className="row">
          <Recomendaciones />
          <PopularesBusquedas />
          <div className="column side">
            <div className="LogIn">
              <i className="fa-solid fa-cart-shopping" />
              <i className="fa-solid fa-arrow-right-to-bracket" />
              <p className="Log"><Link to="/inicio">Iniciar Sesión</Link></p>
              <p className="Log"><Link to="/registro">Registrarse</Link></p>
            </div>
            <br />
            <PanelDiscusiones />
          </div>{" "}
        </div>{" "}
        <br />
        <footer>
          <div>
            <FormularioContacto />
            <div> {/*Aqui va el logo de Geek it*/} </div>{" "}
          </div>{" "}
        </footer>{" "}
      </div>
    );
  }
}
