import React, { Component } from 'react'
import { /*useParams,*/ Link } from "react-router-dom";
import '../css/ModalNuevoContenido.css';

export default class ModalNuevoContenido extends Component {
    /*constructor(props){
        super(props);
    }*/
    closeModal() {
        // Get the modal
        var modal = document.getElementById("discusion-modal");
        modal.style.display = "none";
    }
    abrirSelectorArchivos() {
        document.getElementById('choose').click();
    }

    render() {
        return (
            <div id="discusion-modal" className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 id="text-head">{this.props.titulo}<Link to="#">FullMetal Alchemist salvó mi vida</Link></h2>
                            <span id="close-span" className="close" onClick={this.closeModal}>×</span>
                        </div>
                        <div id="modal-body">
                            <textarea cols="30" rows="10" placeholder={this.props.placeholder}></textarea>
                            <div className="imagenes-agregadas">
                                <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/naruto.jpg"} alt="" className="foto-cliente" />
                                <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                            </div>
                        </div>
                        <div id="modal-footer">
                            {/* Input para los archivos donde solo se usará el boton de anadir imagen */}
                            <input type="file" hidden id="choose" accept="image/png, .jpeg, .jpg, image/gif"/>

                            <button className="anadir-imagen" onClick={this.abrirSelectorArchivos}>
                                <div className="icono">
                                    <i className="fa-regular fa-image"></i>
                                </div>
                                <span>AÑADIR IMAGEN</span>
                            </button>
                            <div className="wrapper-reglas-agregar">
                                <button id='ver-reglas'>VER REGLAS</button>
                                <button id='agregar-discusion'>AGREGAR DISCUSION</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
