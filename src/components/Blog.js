import React, { Component } from 'react'
import '../css/Blog.css';

export default class Blog extends Component {
    render() {
      return (
        <div className="blog">
            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/BarraBlog.jpg"} className="imagenBlog" alt=""/>
            <div className="perfil">
                <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/user.jpg"} className="imagenPerfil" alt=""/>
                <h4 className="nombreUsuario">Nombre usuario</h4>
                <h4 className="nickname">Nickname</h4>
                <p className="txtDes">Descripcion de usuario</p>
                <p className="txtDes">Algunos datos informativos del usuario (gustos, redes sociales)</p>
                <button className="buttonP">Configurar Perfil</button>
            </div>
            <div className="contenido">
                <section className='crearPublicacion'>
                    <input className='escribe' type="text" placeholder="Escribe algo..."/>
                </section>
            </div>
        </div>
        )
    }
}