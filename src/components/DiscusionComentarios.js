import React, { Component } from 'react'
import { useParams, Link } from "react-router-dom";
import Discusion from './Discusion';
import '../css/DiscusionComentario.css';
import ModalNuevoContenido from './ModalNuevoContenido';

export default function ForoDetalles(props) {
    const { id } = useParams();

    const abrirModalComentario = () => {
        // Get the modal
        var modal = document.getElementById("discusion-modal");
        modal.style.display = "block";
    }
    const abrirModal = () => {
        // Get the modal
        var modal = document.getElementById("discusion-modal");
        modal.style.display = "block";
    }
    return (
        <div className="discusion-container">
            <div className="wrapper-discusion-comentarios">
                <Discusion abrir={abrirModalComentario}></Discusion>
                <div className="comentarios-container">
                    <div className="comentario">
                        <div className="wrapper-foto-nombre-antiguedad">
                            <Link to="#" className="foto-usuario">
                                <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                            </Link>
                            <Link to="#" className="nombre-usuario">Ernesto de la Cruz</Link>
                            <span className="comentario-antiguedad">Hace 2 hr</span>
                        </div>
                        <p className="texto-comentario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga asdsssssss sssssssssss ssssssssss sssss ssssssssss...</p>
                        <div className="fotos-comentario">
                            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/naruto.jpg"} alt="" className="foto-cliente" />
                        </div>
                        <div className="reacciones">
                            <button className="voto-positivo">
                                <i className="fa-solid fa-up-long"></i>
                                <span>Pa' arriba</span>
                                <span>352</span>
                            </button>
                            <button className="voto-negativo">
                                <i className="fa-solid fa-down-long"></i>
                                <span>Pa' abajo</span>
                                <span>352</span>
                            </button>
                            <button className="discutir" onClick={abrirModal}>
                                <i className="fa-solid fa-comments"></i>
                                <span>Discutir</span>
                                <span>352</span>
                            </button>
                            <button className="mas-opciones">
                                <i className="fa-solid fa-ellipsis-h"></i>
                            </button>
                        </div>
                        <div className="respuestas">
                            <div className="respuesta">
                                <div className="wrapper-foto-nombre-antiguedad">
                                    <Link to="#" className="foto-usuario">
                                        <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                                    </Link>
                                    <Link to="#" className="nombre-usuario">Ernesto de la Cruz</Link>
                                    <span className="comentario-antiguedad">Hace 2 hr</span>
                                </div>
                                <p className="texto-comentario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga asdsssssss sssssssssss ssssssssss sssss ssssssssss...</p>
                                <div className="fotos-comentario">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/naruto.jpg"} alt="" className="foto-cliente" />
                                </div>
                                <div className="reacciones">
                                    <button className="voto-positivo">
                                        <i className="fa-solid fa-up-long"></i>
                                        <span>Pa' arriba</span>
                                        <span>352</span>
                                    </button>
                                    <button className="voto-negativo">
                                        <i className="fa-solid fa-down-long"></i>
                                        <span>Pa' abajo</span>
                                        <span>352</span>
                                    </button>
                                    <button className="mas-opciones">
                                        <i className="fa-solid fa-ellipsis-h"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="respuesta">
                                <div className="wrapper-foto-nombre-antiguedad">
                                    <Link to="#" className="foto-usuario">
                                        <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                                    </Link>
                                    <Link to="#" className="nombre-usuario">Ernesto de la Cruz</Link>
                                    <span className="comentario-antiguedad">Hace 2 hr</span>
                                </div>
                                <p className="texto-comentario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga asdsssssss sssssssssss ssssssssss sssss ssssssssss...</p>
                                <div className="fotos-comentario">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/naruto.jpg"} alt="" className="foto-cliente" />
                                </div>
                                <div className="reacciones">
                                    <button className="voto-positivo">
                                        <i className="fa-solid fa-up-long"></i>
                                        <span>Pa' arriba</span>
                                        <span>352</span>
                                    </button>
                                    <button className="voto-negativo">
                                        <i className="fa-solid fa-down-long"></i>
                                        <span>Pa' abajo</span>
                                        <span>352</span>
                                    </button>
                                    <button className="mas-opciones">
                                        <i className="fa-solid fa-ellipsis-h"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="wrapper-foto-nombre-antiguedad">
                            <Link to="#" className="foto-usuario">
                                <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                            </Link>
                            <Link to="#" className="nombre-usuario">Ernesto de la Cruz</Link>
                            <span className="comentario-antiguedad">Hace 2 hr</span>
                        </div>
                        <p className="texto-comentario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga asdsssssss sssssssssss ssssssssss sssss ssssssssss...</p>
                        <div className="fotos-comentario">
                            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/naruto.jpg"} alt="" className="foto-cliente" />
                        </div>
                        <div className="reacciones">
                            <button className="voto-positivo">
                                <i className="fa-solid fa-up-long"></i>
                                <span>Pa' arriba</span>
                                <span>352</span>
                            </button>
                            <button className="voto-negativo">
                                <i className="fa-solid fa-down-long"></i>
                                <span>Pa' abajo</span>
                                <span>352</span>
                            </button>
                            <button className="discutir" onClick={abrirModal}>
                                <i className="fa-solid fa-comments"></i>
                                <span>Discutir</span>
                                <span>352</span>
                            </button>
                            <button className="mas-opciones">
                                <i className="fa-solid fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalNuevoContenido titulo="Nueva comentario en " placeholder="Escribe un comentario o respuesta..."></ModalNuevoContenido>
        </div>
    )
}
