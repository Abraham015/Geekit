import React, { Component} from "react";
import "../css/Productos.css";

export default class Productos extends Component {
  render() {
    return (
      <div className="productos">
        <div className="row">
          <div className="column side"> </div>{" "}
          <div class="column middle">
            <div class="contendedorBusqueda">
              <div class="buscar">
                <input type="search" placeholder="Buscar" id="inputSearch" />
                <button type="submit">
                  <i className="fas fa-search"> </i>{" "}
                </button>{" "}
              </div>{" "}
              <div class="Filtro">
                <p>
                  <i class="fa-solid fa-sliders"> </i>{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <br />
            <br />
          </div>{" "}
          <div class="column side"> </div>{" "}
        </div>{" "}
        <div className="row2">
          <div className="column middle2">
            <div className="card">
              <img
                src={process.env.REACT_APP_BASE_URL_IMAGES + "/AoTBefore.png"}
                className="img imagenes"
                alt=""
              />
              <div className="content">
                <div className="NombreProducto">Ataque de los Titanes - Before The Fall</div>{" "}
                <div className="">
                  <div className="Precio">$1,683.00</div> 
                  <div> Este es un mundo controlado por los titanes... La humanidad, convertida en alimento de gigantes, ha construido paredes gigantescas, y pagó el poder evitar los ataques con su libertad.</div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="column middle2">
            <div className="card">
              <img
                src={process.env.REACT_APP_BASE_URL_IMAGES + "/Boys.jpg"}       
                className="img imagenes"
                alt=""
              />
              <div className="content">
                <div className="NombreProducto">The Boys Box Set | Serie Completa</div>{" "}
                <div className="">
                  <div className="Precio">$3,300.00</div> 
                  <div>Pocas cosas son tan peligrosas como los "súpers", sobre todo porque se trata de personas torpes, corruptas, viciosas y ególatras, tal como todas las demás del mundo.</div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="column middle2">
            <div className="card">
              <img
                src={process.env.REACT_APP_BASE_URL_IMAGES + "/Levi.jpg"}
                className="img imagenes"
                alt=""
              />
              <div className="content">
                <div className="NombreProducto">ATTACK ON TITAN THE FINAL SEASON-LEVI</div>{" "}
                <div className="">
                  <div className="Precio">$839.00</div> 
                  <div>Figura coleccionable del Capitán Levi Ackerman de la serie "Attack on Titan"</div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}

        <br />
      </div>
    );
  }
}

