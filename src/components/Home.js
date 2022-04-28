import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

/* Importamos componentes de Home */
import Recomendaciones from './Home/Recomendaciones';
import PopularesBusquedas from './Home/PopularesBusquedas';
import PanelDiscusiones from './Home/PanelDiscusiones';
import FormularioContacto from './Home/FormularioContacto';

export default class Home extends Component {
    render() {
        return (
            <div>
                <img src={process.env.REACT_APP_BASE_URL_IMAGES + '/InicioGeekit.png'} className="imagen" />

                {/*Parte inferior de la imagen*/}
                <div className="row">

                    <Recomendaciones />

                    <PopularesBusquedas />
                    <div className="column side">
                        <div className="LogIn">
                            <i className="fa-solid fa-cart-shopping" />
                            <i className="fa-solid fa-arrow-right-to-bracket" />
                            <p className="Log">Iniciar Sesión</p>
                        </div>
                        <br />
                        <PanelDiscusiones />
                    </div>
                </div>
                <br />
                <footer>
                    <div>
                        <FormularioContacto/>
                        <div>
                            {/*Aqui va el logo de Geek it*/}
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
