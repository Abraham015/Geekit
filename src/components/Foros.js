import React, { Component, useEffect, useState } from 'react'
import '../css/foros.css';
import { Link, useNavigate} from 'react-router-dom'
import Buscar from './Buscar';
import Discusion from './Discusion';
import { useContext } from "react";

import { AccountContext } from "./Login/AccountContext";
export default function ForoDetalles(props) {
    const navigate = useNavigate(); // Para redireccionar

    // Declaramos las varibles de state
    const [foros, setForos] = useState([]);
    const [forosBusqueda, setForosBusqueda] = useState([]);
    const [discusiones, setDiscusiones] = useState([]);
    const [order, setOrder] = useState('newer');
    
    const { user } = useContext(AccountContext);

    // Escuchamos las variables del estado
    useEffect(() => {
        consultarDiscusionesUsuario();   
    }, [order]);

    useEffect(() => {
        if (user.loggedIn === true) {
            consultarForosUsuario();
        }
    }, [user]);


    // Función que obtiene la información de los foros del propio usuario
    const consultarForosUsuario = async () => {
        let res = await fetch(`http://localhost:4000/cliente/${user.username}/foros`);
        res = await res.json();
        setForos(res.foros);
        setForosBusqueda(res.foros);
    }

    // Función que obtiene la información de las discusiones de los foros del usuario
    const consultarDiscusionesUsuario = async () => {
                let res = await fetch(`http://localhost:4000/cliente/${user.username}/discusiones?order=${order}`);
                res = await res.json();
        setDiscusiones(res.discusiones);
    }
    
    // Función que redirecciona a los detalles de un foro
    const redireccionarAForo = (foroItem) => {
        navigate("/foros/" + foroItem.idforo);
    }

    // Función para manejar el cambio de select
    const handleChange = (event) => {
        setOrder(event.target.value);
    }

    function handleSearch(forosArreglo) {
        setForosBusqueda(forosArreglo);
    }
    return (
        <div className="foros-containter"   >
            <div className="foros-seccion ">
                {user.loggedIn === true ?
                    <div className="tus-foros">
                        <h2 className="titulo-seccion">Tus foros</h2>
                        <div className="foros">
                            { // Mostramos cada foro del usuario
                                foros.map(foroItem =>{
                                return (
                                    <div className="foro-item" onClick={() => {redireccionarAForo(foroItem)}} key={foroItem.idforo}>   
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
                    <Buscar handleSearch={handleSearch} type="foros" user={user}></Buscar>
                    <div className="foros">
                    { // Mostramos cada foro de la búsqueda
                                forosBusqueda.map(foroItem =>{
                                return (
                                    <div className="foro-item" onClick={() => {redireccionarAForo(foroItem)}} key={foroItem.idforo}>   
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
            </div>
            <div className="foros-seccion">
                {user.loggedIn === true ?
                    <div className="discusiones">
                        <h2 className="titulo-seccion">Discusiones</h2>
                        <div className="orden-panel">
                            <label htmlFor='orden-discusiones'>Ordenar por: </label>
                            <select name="orden-discusiones" id="orden-discusiones" onChange={handleChange}>
                                <option value="newer">Más reciente</option>
                                <option value="relevance">Más relevante</option>
                            </select>
                        </div>
                        { // Mostramos cada discusión
                            discusiones.map(discusionItem =>{
                            return (
                                <Discusion propiedades={discusionItem} key={discusionItem.iddiscusion}></Discusion> 
                            )   
                            }) 
                        }
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
}