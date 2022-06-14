
import React, { useCallback, useState, useEffect, useRef } from "react";
//import { Link } from 'react-router-dom'
import Buscar from '../Buscar'

export default function PopularesBusquedas() {

    const [productos, setProductos] = useState([]);

    function handleSearch(productosArreglo){
        setProductos(productosArreglo);
    }
    return (
        <div className="column middle populares-busquedas">
            <Buscar handleSearch={handleSearch}></Buscar>
        <br />
        <div className="TituloProduc">Productos más populares</div>
        <br />
        <div className="wrapperProductos">
                <div className="rowProductos">
                    {
                        productos.map(producto=>{
                            return(
                                <div className="card" key={producto.idproducto}>
                                    <div className="img imagenes">
                            
                                    </div>
                                    <p className="NombreProducto">{producto.nombreproducto}</p>
                                    <p className="Precio">{producto.precio}</p>
                                    <p className="descripcionProducto">{producto.descripcion}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </div>
    )
}