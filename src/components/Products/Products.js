import React, {useEffect, useState } from 'react'
import './products.css';

function Products(){
    const [productos, setProductos] = useState([]);
    
    const getProductos = async () =>{
        const res = await fetch('http://localhost:4000/productos');
        const getdata = await res.json()
        setProductos(getdata.productos || []);   
        console.log(productos);
    }

    useEffect(()=>{
        getProductos(); 
    },[]);
    
    useEffect(()=>{
        console.log(productos)
    },[productos])

        
        return (
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
        );
    
}

/*
const Products = ({productName, productImage, productPrice, productDescription, productName2, productImage2, productPrice2, productDescription2, productName3, productImage3, productPrice3, productDescription3}) => {
  return (
    <div className="wrapperProductos">
        <div className="rowProductos">
            <div className="card">
                <div className="img imagenes">
                    <img src={productImage} className="imgProd" alt=""/>
                </div>
                <p className="NombreProducto">{productName}</p>
                <p className="Precio">{productPrice}</p>
                <p className="descripcionProducto">{productDescription}</p>
            </div>
            <div className="card">
                <div className="img imagenes">
                    <img src={productImage2} className="imgProd" alt=""/>
                </div>
                <p className="NombreProducto">{productName2}</p>
                <p className="Precio">{productPrice2}</p>
                <p className="descripcionProducto">{productDescription2}</p>
            </div>
            <div className="card">
                <div className="img imagenes">
                    <img src={productImage3} className="imgProd" alt=""/>
                </div>
                <p className="NombreProducto">{productName3}</p>
                <p className="Precio">{productPrice3}</p>
                <p className="descripcionProducto">{productDescription3}</p>
            </div>
        </div>
    </div>
  );
};*/

export default Products;