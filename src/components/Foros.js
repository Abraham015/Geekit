import React, { Component } from 'react'
import '../css/foros.css';
import { Link, useNavigate, Redirect } from 'react-router-dom'
import Buscar from './Buscar';
import Discusion from './Discusion';
import { useContext } from "react";

import { AccountContext } from "./Login/AccountContext";
export default function ForoDetalles(props) {
    
    // Declaramos los arreglos de foro en el estado
    const [foros, setForos] = React.useState(
        []
        );

    const { user } = useContext(AccountContext);


    const consultarForosUsuario = async () => {
        let res = await fetch(`http://localhost:4000/cliente/${user.username}/foros`);
        res = await res.json();
        setForos(res.foros);
    }

    if (user.loggedIn === true) {
        consultarForosUsuario();
    }

    return (
        <div className="foros-containter">
            <div className="foros-seccion ">
                {user.loggedIn === true ?
                    <div className="tus-foros">
                        <h2 className="titulo-seccion">Tus foros</h2>
                        <div className="foros">
                            { // Mostramos cada foro del
                                foros.map(foroItem =>{
    return (
        <div className="foro-item" key={foroItem.idforo}>   
                                <div className="informacion-foro">
                                    <div className="nombre-foro">
                                        {foroItem.nombrefoto}                       
                                    </div>
                                    <div className="descripcion-foro">
                                        {foroItem.descripcion}
                                    </div>
                                    <div className="miembros-foro">{foroItem.n_miembros}</div>
                                </div>
                                <img className="foto-foro" src={foroItem.fotoportada} alt="" />
                            </div>
     )
                              }) 
                            }
                            
                        </div>
                    </div>
                    : <></>
                }
                <div className="explorar-foros">
                    <h2 className="titulo-seccion">Explorar foros</h2>
                    <Buscar></Buscar>
                    <div className="foros">
                        <div className="foro-item">
                            <div className="informacion-foro">
                                <div className="nombre-foro">
                                    El eterno resplandor de un mundo sin Naruto
                                </div>
                                <div className="descripcion-foro">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga asdsssssss sssssssssss ssssssssss sssss ssssssssss...
                                </div>
                                <div className="miembros-foro">355 miembros</div>
                            </div>
                            <img className="foto-foro" src={process.env.REACT_APP_BASE_URL_IMAGES + "/Naruto.jpg"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="foros-seccion">
                {user.loggedIn === true ?
                    <div className="discusiones">
                        <h2 className="titulo-seccion">Discusiones</h2>
                        <div className="orden-panel">
                            <label htmlFor='orden-discusiones'>Ordenar por: </label>
                            <select name="orden-discusiones" id="orden-discusiones">
                                <option value="0" selected>Más reciente</option>
                                <option value="1">Más relevante</option>
                            </select>
                        </div>
                        <Discusion></Discusion>
                        <Discusion></Discusion>
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
}