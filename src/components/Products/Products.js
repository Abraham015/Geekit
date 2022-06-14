import React, {useEffect, useState } from 'react'
import './products.css';
import '../IndividualProduct/individualProduct.css'

function Products(props){
    const [productos, setProductos] = useState([]);

    const getProductos = async () =>{
        setProductos(props.productos);
    }

    useEffect(()=>{
        getProductos(); 
    },[props]);
    
    return (
        <div className="wrapperProductos">
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
                        </div>
                    ))
                }
        </div>
    );
    
}

export default Products;