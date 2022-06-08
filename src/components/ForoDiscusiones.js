import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Discusion from './Discusion';
import '../css/ForoDiscusiones.css';
import ModalNuevoContenido from './ModalNuevoContenido';

export default class ForoDiscusiones extends Component {
    /*constructor(props) {
        super(props);
    }*/
    componentDidMount() {
        
    }
    abrirModal() {
        // Get the modal
        var modal = document.getElementById("discusion-modal");
        modal.style.display = "block";
    }
    render() {
        return (
            <div className="wrapper-container-modal">
                <div className="discusiones-container">
                    <div className="acciones-seccion">
                        <button id="agregar-discusion" onClick={this.abrirModal}>AGREGAR DISCUSIÓN</button>
                        <button>VER DETALLES FORO</button>
                    </div>
                    <div className="discusiones-seccion">
                        <div className="discusiones">
                            <h2 className="titulo-seccion">Discusiones</h2>
                            <div className="orden-panel">
                                <label htmlFor='orden-discusiones'>Ordenar por: </label>
                                <select name="orden-discusiones" id="orden-discusiones">
                                    <option value="0" defaultValue>Más reciente</option>
                                    <option value="1">Más relevante</option>
                                </select>
                            </div>
                            <Discusion></Discusion>
                            <Discusion></Discusion>
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
}
