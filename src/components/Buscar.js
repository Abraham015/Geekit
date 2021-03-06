import React, { Component } from 'react'
import '../css/Buscar.css'
import { useCallback, useState, useEffect, useRef } from "react";
import Products from "./Products/Products";

function Buscar(props) {
    const { handleSearch, type, user } = props;
    console.log(type)
    const search = async (busqueda) => {
        if (type === "productos") {
            let res = await fetch(`http://localhost:4000/search/productos?q=${busqueda}`);
            res = await res.json();
            handleSearch(res.arreglo);
        } else if (type === "foros") {
            let res = await fetch(`http://localhost:4000/search/foros?q=${busqueda}&username=${user.username}`);
            res = await res.json();
            handleSearch(res.arreglo);
        } else {
            let res = await fetch(`http://localhost:4000/search/miembros?id=${props.id}&q=${busqueda}`);
            res = await res.json();
            handleSearch(res.arreglo);
        }
    }

    return (
        <div className="busqueda">
            <div className="criterios-busquedas">
                <div className="contenedor-barra-busqueda">
                    <form>
                        <label htmlFor="input-busqueda">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </label>
                        <input type="text" name="input-busqueda" id="input-busqueda" placeholder="Buscar foro" onChange={(e) => search(e.target.value)} autocomplete="off" />
                    </form>
                </div>
                {
                    props.type === "productos"
                        ? <div id="filtro-busqueda">
                            <i className="fa-solid fa-sliders" />
                        </div>
                        : <></>

                }

            </div>
            {
                props.type !== "members"
                    ? <div className="categorias-busquedas">
                        <ul>
                            <li onClick={() => search('Comic')}>Cómics</li>
                            <li onClick={() => search('Manga')}>Manga</li>
                            <li onClick={() => search('Anime')}>Anime</li>
                            <li onClick={() => search('Figura')}>Figuras</li>
                        </ul>
                    </div>
                    : <></>
            }

        </div>


    )
}

export default Buscar
