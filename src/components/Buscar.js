import React, { Component } from 'react'
import '../css/Buscar.css'
import { useCallback, useState, useEffect, useRef } from "react";
import Products from "./Products/Products";

function Buscar(props) {
    const {handleSearch} = props;

    const searchProducts = async (busqueda) => {
        let res = await fetch(`http://localhost:4000/search/productos?q=${busqueda}`);
        res = await res.json();
        handleSearch(res.arreglo);
    }

    return (
        <div className="busqueda">
            <div className="criterios-busquedas">
                <div className="contenedor-barra-busqueda">
                    <form>
                        <label htmlFor="input-busqueda">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </label>
                        <input type="text" name="input-busqueda" id="input-busqueda" placeholder="Buscar foro" onChange={(e)=>searchProducts(e.target.value)} autocomplete="off"/>
                    </form>
                </div>
                <div id="filtro-busqueda">
                    <i className="fa-solid fa-sliders" />
                </div>
            </div>
            <div className="categorias-busquedas">
                <ul>
                    <li onClick={()=>searchProducts('Comic')}>Cómics</li>
                    <li onClick={()=>searchProducts('Manga')}>Manga</li>
                    <li onClick={()=>searchProducts('Anime')}>Anime</li>
                    <li onClick={()=>searchProducts('Figura')}>Figuras</li>
                </ul>
            </div>
        </div>
        

    )
}

export default Buscar
