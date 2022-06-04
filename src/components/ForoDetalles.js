import React, { Component } from 'react'
import { useParams, Link } from "react-router-dom";
import '../css/Foro.css';

export default function ForoDetalles(props) {
    const { id } = useParams();

    return (
        <div className="foro-container">
            <div className="foto-nombre-foro">
                <img className="foto-foro" src={process.env.REACT_APP_BASE_URL_IMAGES + '/fma.jpg' } alt="" />
                <h1 className="nombre-foro">FullMetal Alchemist salvó mi vida</h1>
            </div>
            <div className="detalles-foro">
                <div className="descripcion-foro">
                    <h2 className="titulo-informacion-foro">DESCRIPCIÓN</h2>
                    <hr />
                    <p className="contenido-informacion-foro">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci repellendus sequi dolores nulla eligendi modi debitis dicta sunt nobis ad facere, similique natus vero ea accusamus? A, incidunt laborum.</p>
                </div>
                <div className="miembros-foro">
                    <h2 className="titulo-informacion-foro">MIEMBROS</h2>
                    <hr />
                    <div className="contenido-informacion-foro">
                        <div className="busqueda">
                            <div className="criterios-busquedas">
                                <div className="contenedor-barra-busqueda">
                                    <form>
                                        <label htmlFor="input-busqueda">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </label>
                                        <input type="text" name="input-busqueda" id="input-busqueda" placeholder="Buscar foro" />
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="lista-miembros">
                            <div className="miembro-foro">
                                <img className="foto-miembro-foro" src={process.env.REACT_APP_BASE_URL_IMAGES + '/ernesto.jpg' } alt="" />
                                <div className="detalles-miembro-foro">
                                    <div className="nombre-miembro-foro">Ernesto de la Cruz</div>
                                    <div className="descripción-miembro-foro">El vino tinto y el queso son mi pasión, también soy fan de los buenos ánimes y el cine de...</div>
                                </div>
                            </div>
                            <div className="miembro-foro">
                                <img className="foto-miembro-foro" src={process.env.REACT_APP_BASE_URL_IMAGES + '/ernesto.jpg' } alt="" />
                                <div className="detalles-miembro-foro">
                                    <div className="nombre-miembro-foro">Ernesto de la Cruz</div>
                                    <div className="descripción-miembro-foro">El vino tinto y el queso son mi pasión, también soy fan de los buenos ánimes y el cine de...</div>
                                </div>
                            </div>
                            <div className="miembro-foro">
                                <img className="foto-miembro-foro" src={process.env.REACT_APP_BASE_URL_IMAGES + '/ernesto.jpg' } alt="" />
                                <div className="detalles-miembro-foro">
                                    <div className="nombre-miembro-foro">Ernesto de la Cruz</div>
                                    <div className="descripción-miembro-foro">El vino tinto y el queso son mi pasión, también soy fan de los buenos ánimes y el cine de...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reglas-acciones-foro">
                    <h2 className="titulo-informacion-foro">REGLAS</h2>
                    <hr />
                    <div className="contenido-informacion-foro">
                        <ul>
                            <li>No insultar ni promover el odio en comentarios o discusiones</li>
                            <li>No promocionar productos</li>
                            <li>No comentar fotos obscenas</li>
                        </ul>
                    </div>
                    <div className="acciones-foro">
                        <button>UNIRME</button>
                    </div>
                </div>
            </div>
        </div>
    )
}