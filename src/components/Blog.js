import React, { Component } from 'react'
import '../css/Blog.css';

export default class Blog extends Component {
    render() {
      return (
        <div className="blog">
            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/BarraBlog.jpg"} className="imagenBlog" alt=""/>
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
                    <p className="buttonPub">Publicar</p>
                </div>
            </div>
        </div>
        )
    }
}

