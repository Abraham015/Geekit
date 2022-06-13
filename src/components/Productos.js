import React, { Component} from "react";
import "../css/Productos.css";
import Buscar from "./Buscar";
import Products from "./Products/Products";

export default class Productos extends Component {
  render() {
    return (
      <div className="productos">
          <br />

          <div className="column middle">
          <Buscar></Buscar>
            <br />
            <br />
          </div>
          
          <br /> 
          <Products />
      </div>
    );
  }
}

