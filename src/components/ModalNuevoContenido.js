import React, { Component, useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import '../css/ModalNuevoContenido.css';

import { useContext } from "react";
import { AccountContext } from "./Login/AccountContext";

export default function ModalNuevoContenido(props){
    const navigate = useNavigate(); // Para redireccionar

    // Obtenemos el foro
    const { id} = useParams();
    const { user: { loggedIn, username } } = useContext(AccountContext);
    
    // Declaramos las varibles de state
    const [imagenes, setImagenes] = useState([]);

    const closeModal = () => {
        // Get the modal
        var modal = document.getElementById("discusion-modal");
        modal.style.display = "none";
    }
    const abrirSelectorArchivos = ()=> {
        document.getElementById('choose').click();
    }

    // Función que agrega los archivos seleccionados al state
    const handleFiles = (e) =>{
        // Recorremos cada file y lo agregamos a un arreglo
        let imagenesObj = [];        
            for(let i = 0; i < e.target.files.length; i++){
            imagenesObj.push(e.target.files[i]);
        }
        setImagenes(imagenesObj);
    }

    // Mandamos la nueva discusión al servidor
    const agregarDiscusion = async () => {
        let formData = new FormData();
        formData.append('contenido', document.querySelector("textarea").value);
        formData.append('idforo', id);
        formData.append('nickCliente', username);
        // Agregamos cada imagen al formData
        for(let i = 0; i < imagenes.length; i++){
            formData.append(`imagen-${i}`, imagenes[i]);
        }

        const res = await fetch(`http://localhost:4000/discusiones/`, {
            method: 'POST',
            body: formData
        });
        const data = await res.json();

        if(data.message == "OK"){
            document.querySelector("textarea").value = "";
            document.querySelector("input[type='file']").value="";
            closeModal();
            setImagenes([]);
            props.reload();
        }
    }

    // Función para redirigir a la pantalla del foro
    const redireccionarADiscusiones = () => {
        navigate("/foros/" + id + "/discusiones");
    }

    return (
        <div id="discusion-modal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 id="text-head">{props.titulo}<Link to="#">FullMetal Alchemist salvó mi vida</Link></h2>
                        <span id="close-span" className="close" onClick={closeModal}>×</span>
                    </div>
                    <div id="modal-body">
                        <textarea cols="30" rows="10" placeholder={props.placeholder} id="#contenido"></textarea>
                        <div className="imagenes-agregadas">
                            {
                                imagenes.map(imagen =>{
                                    return(<img src={URL.createObjectURL(imagen)} alt="" className="foto-cliente" key={imagen.name} />)
                                })
                            }
                        </div>
                    </div>
                    <div id="modal-footer">
                        {/* Input para los archivos donde solo se usará el boton de anadir imagen */}
                        <input type="file" hidden id="choose" accept="image/png, .jpeg, .jpg, image/gif" onChange={handleFiles} multiple={true}/>

                        <button className="anadir-imagen" onClick={abrirSelectorArchivos}>
                            <div className="icono">
                                <i className="fa-regular fa-image"></i>
                            </div>
                            <span>AÑADIR IMAGEN</span>
                        </button>
                        <div className="wrapper-reglas-agregar">
                            <button id='ver-reglas'>VER REGLAS</button>
                            <button id='agregar-discusion' onClick={agregarDiscusion}>AGREGAR DISCUSION</button>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}
