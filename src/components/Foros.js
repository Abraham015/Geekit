import React, { Component } from 'react'
import '../css/Foros.css';
import { Link } from 'react-router-dom'
import Buscar from './Buscar';

export default class Foros extends Component {
    render() {
        return (
            <div className="foros-containter">
                <div className="foros-seccion ">
                    <div className="tus-foros">
                        <h2 className="titulo-seccion">Tus foros</h2>
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
                    <div className="discusiones">
                        <h2 className="titulo-seccion">Discusiones</h2>
                        <div className="orden-panel">
                            <label htmlFor='orden-discusiones'>Ordenar por: </label>
                            <select name="orden-discusiones" id="orden-discusiones">
                                <option value="0" selected>Más reciente</option>
                                <option value="1">Más relevante</option>
                            </select>
                        </div>
                        <div className="discusion">
                            <div className="informacion-discusion">
                                <Link to="#">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                                </Link>
                                <p className="titulo-discusion">
                                    <Link to="#">Ernesto de la Cruz</Link> agregó en <Link to="#"> FullMetal Alchemist salvó mi vida</Link>
                                </p>
                                <Link to="#">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/fma 2003.webp"} alt="" className="foto-cliente" />
                                </Link>
                            </div>
                            <Link to="#" className="antiguedad">Hace 2 hr</Link>
                            <div className="contenido-discusion">
                                <pre>¿Quién es su waifu?
                                    (Imagen altamente relacionada)
                                </pre>
                                <div className="imagenes-discusion">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="imagen-discusion" />
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/Naruto.jpg"} alt="" className="imagen-discusion" />
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="imagen-discusion" />

                                </div>
                            </div>
                            <div className="reacciones-discusion">
                                <div className="reaccion like">
                                    <i className="fa-solid fa-thumbs-up"></i>
                                    <span>Ta' chido</span>
                                    <span>352</span>
                                </div>
                                <div className="reaccion dislike">
                                    <i className="fa-solid fa-thumbs-down"></i>
                                    <span>No ta' chido</span>
                                    <span>16</span>
                                </div>
                                <div className="reaccion comment">
                                    <i className="fa-regular fa-comments"></i>
                                    <span>Discutir</span>
                                    <span>456</span>
                                </div>
                                <div className="reaccion mas-opciones">
                                    <i className="fa-solid fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </div>
                        <div className="discusion">
                            <div className="informacion-discusion">
                                <Link to="#">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                                </Link>
                                <p className="titulo-discusion">
                                    <Link to="#">Ernesto de la Cruz</Link> agregó en <Link to="#"> FullMetal Alchemist salvó mi vida</Link>
                                </p>
                                <Link to="#">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/fma 2003.webp"} alt="" className="foto-cliente" />
                                </Link>
                            </div>
                            <Link to="#" className="antiguedad">Hace 2 hr</Link>
                            <div className="contenido-discusion">
                                <pre>¿Quién es su waifu?
                                    (Imagen altamente relacionada)
                                </pre>
                                <div className="imagenes-discusion">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="imagen-discusion" />
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/Naruto.jpg"} alt="" className="imagen-discusion" />
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="imagen-discusion" />

                                </div>
                            </div>
                            <div className="reacciones-discusion">
                                <div className="reaccion like">
                                    <i className="fa-solid fa-thumbs-up"></i>
                                    <span>Ta' chido</span>
                                    <span>352</span>
                                </div>
                                <div className="reaccion dislike">
                                    <i className="fa-solid fa-thumbs-down"></i>
                                    <span>No ta' chido</span>
                                    <span>16</span>
                                </div>
                                <div className="reaccion comment">
                                    <i className="fa-regular fa-comments"></i>
                                    <span>Discutir</span>
                                    <span>456</span>
                                </div>
                                <div className="reaccion mas-opciones">
                                    <i className="fa-solid fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
