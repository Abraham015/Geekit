import React, { Component } from 'react'
import '../css/Buscar.css'
import { useCallback, useState } from "react";
import Products from "./Products/Products";

function Buscar() {

    const [productos, setProductos] = useState([]);

    const searchProducts = useCallback(async () => {
        let res = await fetch(`http://localhost:4000/productos`);
            res = await res.json();
            setProductos(res.productos);
    }, []);

    return (
        <div className="busqueda">
            <div className="criterios-busquedas">
                <div className="contenedor-barra-busqueda">
                    <form>
                        <label htmlFor="input-busqueda">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </label>
                        <input type="text" name="input-busqueda" id="input-busqueda" placeholder="Buscar foro" onChange={searchProducts}/>
                    </form>
                    {productos
        ? productos.map((producto) => <Products key={producto.idProducto} {...producto} />)
        : null
        
        }
        {
            productos.map((producto) => console.log(producto))
        }
                </div>
                <div id="filtro-busqueda">
                    <i className="fa-solid fa-sliders" />
                </div>
            </div>
            <div className="categorias-busquedas">
                <ul>
                    <li>Cómics</li>
                    <li>Manga</li>
                    <li>Anime</li>
                    <li>Figuras</li>
                </ul>
            </div>
        </div>
        

    )
}

export default Buscar
