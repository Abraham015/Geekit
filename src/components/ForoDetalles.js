import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import '../css/Foro.css';

export default function ForoDetalles(props) {
    const { id } = useParams();
    const [foro, setForo] = useState({});
    const [usuarios, setUsuarios] = useState([]);
    const [reglas, setReglas] = useState([]);

    // Escuchamos las variables del estado
    useEffect(() => {
        cargarForo();
    }, [id]);

    // Función para pedir y cargar los datos del foro
    const cargarForo = async () => {
        const res = await fetch(`http://localhost:4000/foros/${id}`);
        const data = await res.json();
        setForo(data);
        setReglas(data.norma.split(";"));
        cargarUsuarios(data);
    }
    // Función para cargar usuarios
    const cargarUsuarios = async (data) => {
        const res = await fetch(`http://localhost:4000/foros/${data.idforo}/clientes`);
        const users = await res.json();
        setUsuarios(users);
    }

    return (
        <div className="foro-container">
            <div className="foto-nombre-foro">
                <img className="foto-foro" src={foro.fotoportada} alt="" />
                <h1 className="nombre-foro">{foro.nombrefoto}</h1>
            </div>
            <div className="detalles-foro">
                <div className="descripcion-foro">
                    <h2 className="titulo-informacion-foro">DESCRIPCIÓN</h2>
                    <hr />
                    <p className="contenido-informacion-foro">{foro.descripcion}</p>
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
                            { // Mostramos cada foro del
                                usuarios.map(usuario => {
                                    return (
                                        <div className="miembro-foro">
                                            <img className="foto-miembro-foro" src={usuario.fotoperfil} alt="" />
                                            <div className="detalles-miembro-foro">
                                                <div className="nombre-miembro-foro">{usuario.nombrecliente}</div>
                                                <div className="descripción-miembro-foro">{usuario.descripcion}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
                <div className="reglas-acciones-foro">
                    <div className="wrapper-reglas-foro">
                        <h2 className="titulo-informacion-foro">REGLAS</h2>
                        <hr />
                        <div className="contenido-informacion-foro">
                            <ul>
                                {
                                    reglas.map((regla, index) => {
                                        return <li key={index}>{regla}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="acciones-foro">
                        <div className="usuario-miembro mostrar-botones">
                            <button className="boton-accion" id="ver-discusiones">VER DISCUSIONES</button>
                            <button className="boton-accion bckg-yellow-button" id="reportar-foro">REPORTAR FORO</button>
                            <button className="boton-accion bckg-red-button" id="abandonar-foro">ABANDONAR FORO</button>
                        </div>
                        <div className="usuario-no-miembro no-mostrar-botones" >
                            <button className="boton-accion bckg-green-button" id="unirme">UNIRME</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}