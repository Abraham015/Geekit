import React from "react";
import './products.css';

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
};

export default Products;