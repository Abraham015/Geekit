import React from "react";
import { useCallback, useState } from "react";
import Products from "./Products/Products";

const Search = ({ setSearch, updatePageNumber }) => {
  const [productos, setProductos] = useState([]);

  const searchProducts = useCallback(async () => {
    let res = await fetch(`http://localhost:4000/productos`);
        res = await res.json();
        setProductos(res.productos);
  }, []);


  /*let searchBtn = (e) => {
    e.preventDefault();
  };*/


  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        /*onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}*/
        onChange={searchProducts}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <button
        onClick={searchProducts}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
      {productos
        ? productos.map((producto) => <Products key={producto.idProducto} {...producto} />)
        : null}
    </form>
  );
};

export default Search;