import React, { Component, useEffect, useState } from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import Discusion from './Discusion';
import '../css/ForoDiscusiones.css';
import ModalNuevoContenido from './ModalNuevoContenido';

import { useContext } from "react";
import { AccountContext } from "./Login/AccountContext";

export default function ForoDetalles(props) {
    const { id } = useParams();
    const navigate = useNavigate(); // Para redireccionar
    
    // Declaramos las varibles de state
    const [discusiones, setDiscusiones] = useState([]);
    const [order, setOrder] = useState('newer');
    
    let { user: { loggedIn, username } } = useContext(AccountContext);
    
    // Escuchamos las variables del estado
    useEffect(() => {
        consultarDiscusiones();   
    }, [order]);

    // Función que obtiene la información de las discusiones del foro
    const consultarDiscusiones = async () => {
        let res = await fetch(`http://localhost:4000/foros/${id}/discusiones?order=${order}`);
        const data = await res.json();
        setDiscusiones(data || []);
    }

    // Función para manejar el cambio de select
    const handleChange = (event) => {
        setOrder(event.target.value);
    }

    // Función para abrir el modal de publicación
    const abrirModal = ()=> {
        // Get the modal
        var modal = document.getElementById("discusion-modal");
        modal.style.display = "block";
    }

    // Función para redirigir a la pantalla del foro
    const redireccionarAForo = () => {
        navigate("/foros/" + id);
    }
        return (
            <div className="wrapper-container-modal">
                <div className="discusiones-container">
                    <div className="acciones-seccion">
                        <button id="agregar-discusion" onClick={()=>{abrirModal()}}>AGREGAR DISCUSIÓN</button>
                        <button onClick={()=>{redireccionarAForo()}}>VER DETALLES FORO</button>
                    </div>
                    <div className="discusiones-seccion">
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
                    </div>
                    <div className="comentarios-seccion">
                        <h3>Comentarios destacados</h3>
                        <div className="comentario">
                            <div className="wrapper-foto-nombre">
                                <Link to="#" className="foto-usuario">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                                </Link>
                                <Link to="#" className="nombre-usuario">Ernesto de la Cruz</Link>
                            </div>

                            <p className="texto-comentario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga asdsssssss sssssssssss ssssssssss sssss ssssssssss...</p>
                            <div className="fotos-comentario">
                                <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                                <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/naruto.jpg"} alt="" className="foto-cliente" />
                            </div>
                            <div className="wrapper-votos-antiguedad">
                                <span className="comentario-votos">12 votos </span>
                                <span className="comentario-antiguedad">Hace 2 hr</span>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalNuevoContenido titulo="Nueva discusión en " placeholder="Escribe sobre un tema..."></ModalNuevoContenido>

            </div>
        )
}
