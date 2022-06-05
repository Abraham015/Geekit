import React, { Component } from 'react'
import '../css/BlogSinI.css';

const Tab = () => {return <>&nbsp;&nbsp;&nbsp;&nbsp;</>;}

export default class BlogSinInicio extends Component {
    render() {
      return (
        <div className="blog">
            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/BarraBlog.png"} className="imagenBlog" alt=""/>
            <div className="comenzarBlog">
                <p className="msjComenzar"> ¡Comienza tu blog! </p>
                <Tab/><Tab/>
                <div className="cajaBotones">
                    <span className="btnSesion"> Registrate </span>
                    <Tab/><Tab/>
                    <span className="unionBtn"> ó </span>
                    <Tab/><Tab/>
                    <span className="btnSesion"> Inicia sesión </span>
                </div>
                <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/sackboy_happy.png"} className="imgComienza" alt=""/>
            </div>
        </div>
        )
    }
}

