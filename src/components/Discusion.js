import React, { Component, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../css/Discusion.css';

import { format, register } from 'timeago.js';

// CAMBIAMOS EL IDIOMA DE TIME AGO
import localeFunc from './timeAgoES';
register('es_ES', localeFunc);

export default function ForoDetalles({ abrir, propiedades }) {
    const [discusion, setDiscusion] = useState(propiedades);
    const [fotosLinks, setFotosLinks] = useState(propiedades.fotodiscusion.split(";"));
    const [liked, setLiked] = useState(false); // Si el usuario ha dado like a la discusión
    const [disliked, setDisliked] = useState(false); // Si el usuario ha dado like a la discusión
    const [creador, setCreador] = useState({});
    const [foro, setForo] = useState({});

    // Escuchamos las variables del estado
    useEffect(() => {
        setFotosLinks(discusion.fotodiscusion.split(";"));
        cargarFotos();
    }, [discusion]);

    useEffect(() => {

    }, [liked]);
    useEffect(() => {

    }, [creador]);
    useEffect(() => {

    }, [foro]);

    // Manejo de reacciones (likes y dislikes)
    const reaccionar = async (reaccion) => {
        let likes = discusion.reaccionlike;
        let dislikes = discusion.reacciondislike;

        if (reaccion === "like") {
            if (liked === false) {
                likes++;
                setLiked(true);
            } else {
                likes--;
                setLiked(false);
            }

            if (disliked === true) {
                dislikes--;
                setDisliked(false);
            }
        } else {
            if (disliked === false) {
                dislikes++;
                setDisliked(true);
            } else {
                dislikes--;
                setDisliked(false);
            }
            if (liked === true) {
                likes--;
                setLiked(false);
            }
        }

        // Actualizamos las reacciones en la base de datos
        let res = await fetch(`http://localhost:4000/discusiones/${discusion.iddiscusion}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reaccionlike: likes,
                reacciondislike: dislikes,
                reaccioncoment: discusion.reaccioncoment
            })
        });
        res = await res.json();
        setDiscusion(res);
    }

    // Función para pedir al servidor la foto de perfil y portada en la discusion
    const cargarFotos = async () => {
        const res = await fetch(`http://localhost:4000/discusiones/${discusion.iddiscusion}/creador`);
        const res2 = await fetch(`http://localhost:4000/discusiones/${discusion.iddiscusion}/foro`);
        setCreador(await res.json());
        setForo(await res2.json());
    }


    return (
        <div className="discusion">
            <div className="informacion-discusion">
                <Link to="!#">
                    <img src={creador.fotoperfil} alt="" className="foto-cliente" />
                </Link>
                <p className="titulo-discusion">
                    <Link to="#">{creador.nombrecliente}</Link> agregó en <Link to={"/foros/" + foro.idforo}> {foro.nombrefoto}</Link>
                </p>
                <Link to={"/foros/" + foro.idforo}>
                    <img src={foro.fotoportada} alt="" className="foto-cliente" />
                </Link>
            </div>
            <Link to="#" className="antiguedad">{format(discusion.fechadiscusion, 'es_ES')}</Link>
            <div className="contenido-discusion">
                <p>{discusion.contenido}
                </p>
                { // MOSTRAMOS LAS FOTOS DE LA DISCUSIÓN
                    fotosLinks.map(fotoItem => {
                        return (
                            <div className="imagenes-discusion">
                                <img src={fotoItem} alt="" className="imagen-discusion" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="reacciones-discusion">
                <div className="reaccion like" onClick={() => { reaccionar("like") }} > {/* Se actualiza el objeto */}
                    <i className="fa-solid fa-thumbs-up"></i>
                    <span>Ta' chido</span>
                    <span>{discusion.reaccionlike}</span>
                </div>
                <div className="reaccion dislike" onClick={() => { reaccionar("dislike") }}>
                    <i className="fa-solid fa-thumbs-down"></i>
                    <span>No ta' chido</span>
                    <span>{discusion.reacciondislike}</span>
                </div>
                { // MODO DE COMENTAR (SE REDIRECCIONA O SE ABRE EL MODAL)
                    abrir
                        ? <div className="reaccion comment" onClick={abrir}>
                            <i className="fa-regular fa-comments"></i>
                            <span>Discutir</span>
                            <span>{discusion.reaccioncoment}</span>
                        </div>
                        : <Link to="/foros/1/discusiones/1" className="reaccion comment">
                            <i className="fa-regular fa-comments"></i>
                            <span>Discutir</span>
                            <span>{discusion.reaccioncoment}</span>
                        </Link>
                }

                <div className="reaccion mas-opciones">
                    <i className="fa-solid fa-ellipsis-h"></i>
                </div>
            </div>
        </div>
    )

}
