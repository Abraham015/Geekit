import React from 'react'
import { Link } from "react-router-dom";
import '../css/Discusion.css';


export default function ForoDetalles({ abrir }) {

    return (
        <div className="discusion">
            <div className="informacion-discusion">
                <Link to="!#">
                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/ernesto.jpg"} alt="" className="foto-cliente" />
                </Link>
                <p className="titulo-discusion">
                    <Link to="#">Ernesto de la Cruz</Link> agregó en <Link to="#"> FullMetal Alchemist salvó mi vida</Link>
                </p>
                <Link to="!#">
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
                {
                    abrir
                        ? <div className="reaccion comment" onClick={abrir}>
                            <i className="fa-regular fa-comments"></i>
                            <span>Discutir</span>
                            <span>456</span>
                        </div>
                        : <Link to ="/foros/1/discusiones/1" className="reaccion comment">
                            <i className="fa-regular fa-comments"></i>
                            <span>Discutir</span>
                            <span>456</span>
                        </Link>
                }

                <div className="reaccion mas-opciones">
                    <i className="fa-solid fa-ellipsis-h"></i>
                </div>
            </div>
        </div>
    )

}
