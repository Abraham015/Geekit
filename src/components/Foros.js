import React, { Component } from 'react'
import '../css/Foros.css';
import { Link } from 'react-router-dom'
import Buscar from './Buscar';
import Discusion from './Discusion';

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
                        <Discusion></Discusion>
                        <Discusion></Discusion>
                    </div>
                </div>
            </div>
        )
    }
}
