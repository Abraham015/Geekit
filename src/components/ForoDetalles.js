import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate} from "react-router-dom";
import '../css/Foro.css';

import { useContext } from "react";
import { AccountContext } from "./Login/AccountContext";
import Buscar from './Buscar'

export default function ForoDetalles(props) {
    const { id } = useParams();
    const [foro, setForo] = useState({});
    const [usuarios, setUsuarios] = useState([]);
    const [usuariosBusqueda, setUsuariosBusqueda] = useState([]);
    const [reglas, setReglas] = useState([]);
    const [unido, setUnido] = useState(false);

    let { user: { loggedIn, username } } = useContext(AccountContext);
    const navigate = useNavigate();; // Para redireccionar

    // Escuchamos las variables del estado
    useEffect( () => {
        cargarForo();
    }, []); 
    useEffect( () => {
        if(Object.keys(foro).length !== 0) // Comprobamos que ya tenga algo
        cargarUsuarios();
    }, [foro]);
    useEffect( () => {
        if(usuarios.length !== 0) // Comprobamos que ya tenga algo
        comprobarPertenencia();
        setUsuariosBusqueda(usuarios);
    }, [usuarios]);


    // Función para pedir y cargar los datos del foro
    const cargarForo = async () => {
        const res = await fetch(`http://localhost:4000/foros/${id}`);
        const data = await res.json();
        setForo(data);
        setReglas(data.norma.split(";"));
    }
    // Función para cargar usuarios
    const cargarUsuarios = async () => {
        const res = await fetch(`http://localhost:4000/search/miembros?id=${id}`);
        const users = await res.json();
        setUsuarios(users.arreglo || []);
    }
    // Función que comprueba que el usuario pertenezca al foro
    const comprobarPertenencia = () => {
        if(usuarios.some(user => user.nicknamecliente == username)) setUnido(true);
        else setUnido(false);   
    }

    // Función para eliminar el usuario del foro
    const eliminarUsuario = async () => {
        const res = await fetch(`http://localhost:4000/foros/${id}/clientes/${username}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        setUsuarios(data);
        setUnido(false);
    }

    // Función para agregar el usuario al foro
    const agregarUsuario = async () => {
        if(loggedIn === false){
            navigate('/inicio'); // Si no está unido, redirigimos a inicio de sesión   
        }
        const res = await fetch(`http://localhost:4000/foros/${id}/clientes/${username}`, {
            method: 'POST'
        });
        const data = await res.json();
        setUsuarios(data);
        setUnido(true);
    }

    // Redireccionar a discusiones
    const redirigirDiscusiones = () => {
        navigate(`/foros/${id}/discusiones`);
    }

    function handleSearch(usuariosArreglo) {
        setUsuariosBusqueda(usuariosArreglo);
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
                    <Buscar handleSearch={handleSearch} type="members" id={id}></Buscar>
                        <div className="lista-miembros">
                            { // Mostramos cada foro del
                                usuariosBusqueda.map(usuario => {
                                    return (
                                        <div className="miembro-foro" key={usuario.idcliente}>
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
                        { // MOSTRAR BOTONES DEPENDIENDO SI ESTÁ UNIDO O NO
                    unido === true ?
                    <div className="usuario-miembro mostrar-botones">
                    <button className="boton-accion" id="ver-discusiones" onClick={() =>{redirigirDiscusiones()}}>VER DISCUSIONES</button>
                    <button className="boton-accion bckg-yellow-button" id="reportar-foro">REPORTAR FORO</button>
                    <button className="boton-accion bckg-red-button" id="abandonar-foro" onClick={() =>{eliminarUsuario()}}>ABANDONAR FORO</button>
                </div>
                    : <div className="usuario-no-miembro mostrar-botones" >
                    <button className="boton-accion bckg-green-button" id="unirme" onClick={() =>{agregarUsuario()}}>UNIRME</button>
                </div>
                }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}