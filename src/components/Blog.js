/*import React, { useEffect, useState } from 'react'*/
import '../css/Blog.css';
import { useContext } from "react";
import { AccountContext } from "./Login/AccountContext";
import BlogSinInicio from './BlogSinInicio';

const Tab = () => {return <>&nbsp;&nbsp;&nbsp;&nbsp;</>;}

/**
 * Propuesta de componente para las publicaciones
 */
function PubBlog() {
    return (
        <div className="publicacionB">
            <h4>¡Ya saliooooo! El nuevo juego de Zelda esta aqui</h4>
            <p>Asi es, esta mañana el creador de Zelda, Nintendo, lanzo el images de los personajes del nuevo juego Zelda y esta siendo trending topic en todos los sitios de internet.</p>
            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/princesaZelda.png"} className="imagenAgregada" alt=""/>
            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/linkZelda.png"} className="imagenAgregada" alt=""/>
            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/princesaDeZora.png"} className="imagenAgregada" alt=""/>
        </div>
    )
}

export default function Blog(props) {
    const { user } = useContext(AccountContext);

    /*const [infoUser, setinfoUser] = useState([]);

    useEffect(() => {
        if (user.loggedIn === true) {
            consultarInfoUsuario();
        }
    }, [user]);

    const consultarInfoUsuario = async () =>{
        let res = await fetch(`http://localhost:4000/cliente/${user.username}/blog`);
        res = await res.json();
        setinfoUser(res.cliente);
    }*/

    return (
        user.loggedIn === true ?
            <div className="blog">
                <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/BarraBlog.png"} className="imagenBlog" alt=""/>
                <div className="perfil columnside">
                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/user.jpg"} className="imagenPerfil" alt=""/>
                    <h4 className="nombreUsuario">Nombre usuario</h4>
                    <h4 className="nickname">Nickname</h4>
                    <p className="txtDes">Descripcion de usuario</p>
                    <p className="txtDes">Algunos datos informativos del usuario (gustos, redes sociales)</p>
                    <p className="buttonP">Configurar Perfil</p>
                </div>
                
                <div className="contenido-columnmiddle">
                    <div className="crearPublicacion">
                        <input className="escribe" type="text" placeholder="Escribe algo..."/>
                        <div className="barraPublicar">
                            <span className="agregarEmoji">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/emoji.png"} className="iconoEmoji" alt=""/>
                                    Emoji
                            </span>
                            <Tab/><Tab/>
                            <span className="agregarImagen">
                                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/adjuntarImagen.png"} className="iconoImagen" alt=""/>
                                    Foto/Video
                            </span>
                            <Tab/><Tab/>
                            <p className="buttonPub">Publicar</p>
                        </div>
                    </div>

                    <div className="publicacionesB">
                        <PubBlog/>
                        <PubBlog/>
                        <PubBlog/>
                        <PubBlog/>
                    </div>
                    


                </div>
            </div>
            :
            <BlogSinInicio></BlogSinInicio>
    )
}

