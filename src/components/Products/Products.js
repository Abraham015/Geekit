import React, {useEffect, useState } from 'react'
import { useParams, Link, useNavigate} from "react-router-dom";
import './products.css';
import '../IndividualProduct/individualProduct.css'

function Products(){
    const [productos, setProductos] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:4000/productos').then(async (res) =>{
            const products = await res.json();
            setProductos(products.products)
            console.log(products.products)
        }).catch(console.error)
    },[]);
    
    return (
        <div className="wrapperProductos">
            <div className="rowProductos">
                {
                    productos.map((producto)=>(
                        <div className="card" key={producto.idproducto}>
                            <div className="img imagenes">
                                <img src={producto.fotosproducto} className="imgProd" alt=''/>
                            </div>
                            <p className="NombreProducto">{producto.nombreproducto}</p>
                            <p className="Precio">${producto.precio}</p>
                            <p className="descripcionProducto">{producto.descripcion}</p>
                            <button className="comprar">AGREGAR AL CARRITO</button>
                            <button className="comprar" onClick={() => {navigate(`/productos/${producto.idproducto}`);}}>VER DETALLES</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
    
}

export default Products;