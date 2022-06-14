
import React, { useCallback, useState, useEffect, useRef } from "react";
//import { Link } from 'react-router-dom'
import Buscar from '../Buscar'
import Products from "../Products/Products";

export default function PopularesBusquedas() {
    const [productos, setProductos] = useState([]);

    const getProductos = async () => {
      const res = await fetch('http://localhost:4000/search/productos?q=');
      const getdata = await res.json()
      setProductos(getdata.arreglo || []);
      console.log(getdata.arreglo)
    }
  
    useEffect(() => {
      getProductos();
    }, []);
  
    function handleSearch(productosArreglo) {
      setProductos(productosArreglo);
    }
    return (

<div className="productos column middle populares-busquedas">
<br />

<div className="column middle">
  <Buscar handleSearch={handleSearch}></Buscar>
  <br />
  <br />
</div>

<br />
<Products productos={productos} />
</div>
    )
}