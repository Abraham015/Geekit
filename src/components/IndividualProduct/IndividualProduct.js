import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate} from "react-router-dom";
import './individualProduct.css';

function IndividualProducts(){
    let params = useParams()
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:4000/productos/${params.id}`).then(async (res) =>{
            const product = await res.json();
            console.log(product)
            setProducto(product.product)
            console.log(product.product)
        }).catch(console.error)
    },[]);

    return(
        !producto ? <h1>No Data</h1> : 
        <div className="totalProductoIndividual">
            <div className="wrapperProductoIndividual">
                <div className="item1"><img src={producto.fotosproducto} className="imgComplementarias"/></div>
                <div className="item2"><img src={producto.fotosproducto} className="imgComplementarias"/></div>
                <div className="item3"><img src={producto.fotosproducto} className="imgPrincipal"/></div>
                <div className="item4"><img src={producto.fotosproducto} className="imgComplementarias"/></div>
                <div className="item5">
                    <h1>{producto.nombreproducto}</h1>
                    <p className="tags">{producto.etiqueta}</p>
                    <br /> <br />
                    <p className="precio">${producto.precio}</p>
                    <br />
                    <div className="entrega">
                        <div><img src={process.env.REACT_APP_BASE_URL_IMAGES + "/camion.png"} className="iconoTransporte"/></div>
                        <div><p className="entregaDomicilio">Entrega: <b>{producto.metodoentrega}</b></p></div>
                    </div>
                    <p className="stock">Stock Disponible</p>
                    <div className="cantProductosTotal">
                        <div className="cantProductos">
                            <p className="cantidadProd">Cantidad:</p> 
                        </div>
                        <div className="cantProductos">
                            <input type="number" className="cantRequerida" />
                        </div>
                        <div className="cantProductos">
                            <p className="disponibles"> (Disponibles: {producto.stock})</p>
                        </div>
                    </div>
                    <button className="comprar">AGREGAR AL CARRITO</button>
                    <button className="comprar">COMPRAR</button>
                </div>
                <div className="item6"><img src={producto.fotosproducto} className="imgComplementarias"/></div>
            </div>
            <br /> <br />
            <div className="descripcion-vendedor">
                <div className="descripcion">
                    <h2>Descripción:</h2>
                    <p className="productoDescripcion">{producto.descripcion}</p>
                </div>
                <div className="vendedorTotal">
                    <div className="vendedor">
                        <div className="fotoVendedor">
                            
                        </div>
                        <div className="infoVendedor">
                            <h2>Vendedor:</h2>
                            <p>Bla bla bla</p>
                            <a>Link al perfil del vendedor</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
const IndividualProducts = ({productName, productTags, productPrice, stock, productDescription, sellerName, sellerPicture, sellerProfile, mainImage, image1, image2, image3, image4}) => {
  return (
    <div className="totalProductoIndividual">
        <div className="wrapperProductoIndividual">
            <div className="item1"><img src={image4} className="imgComplementarias"/></div>
            <div className="item2"><img src={image1} className="imgComplementarias"/></div>
            <div className="item3"><img src={mainImage} className="imgPrincipal"/></div>
            <div className="item4"><img src={image2} className="imgComplementarias"/></div>
            <div className="item5">
                <h1>{productName}</h1>
                <p className="tags">{productTags}</p>
                <br /> <br />
                <p className="precio">{productPrice}</p>
                <br />
                <div className="entrega">
                    <div><img src={process.env.REACT_APP_BASE_URL_IMAGES + "/camion.png"} className="iconoTransporte"/></div>
                    <div><p className="entregaDomicilio">Entrega: <b>Envío a domicilio</b></p></div>
                </div>
                <p className="stock">Stock Disponible</p>
                <div className="cantProductosTotal">
                    <div className="cantProductos">
                        <p className="cantidadProd">Cantidad:</p> 
                    </div>
                    <div className="cantProductos">
                        <input type="number" className="cantRequerida" />
                    </div>
                    <div className="cantProductos">
                        <p className="disponibles"> (Disponibles: {stock})</p>
                    </div>
                </div>
                <div className="botones">
                    <p className="comprar">COMPRAR AHORA</p><br/>
                    <p className="carrito">AGREGAR AL CARRITO</p>
                </div>
            </div>
            <div className="item6"><img src={image3} className="imgComplementarias"/></div>
        </div>
        <br /> <br />
        <div className="descripcion-vendedor">
            <div className="descripcion">
                <h2>Descripción:</h2>
                <p className="productoDescripcion">{productDescription}</p>
            </div>
            <div className="vendedorTotal">
                <div className="vendedor">
                    <div className="fotoVendedor">
                        <img src={sellerPicture} className="fotoVendedor"/>
                    </div>
                    <div className="infoVendedor">
                        <h2>Vendedor:</h2>
                        <p>{sellerName}</p>
                        <a href={sellerProfile}>Link al perfil del vendedor</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};*/

export default IndividualProducts;