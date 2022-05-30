import React, { Component } from "react";
import '../css/Productos.css';


export default class Productos extends Component {
  render() {
    return (
      <div className="productos">
        <div class="row">
            <div class="column side"></div>
            <div class="column middle">
                <div class="contendedorBusqueda">
                    <div class="buscar">
                        <input type="search" placeholder="Buscar" id="inputSearch" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                    <div class="Filtro">
                        <p>
                            <i class="fa-solid fa-sliders"></i>
                        </p>
                    </div>
                </div>
                <br /><br />
            </div>
            <div class="column side"></div>
        </div>
        <div className="table">
          <div className="Productos">
              <table className="TProductos">
                        <tr>
                            <td colspan="2">
                                 <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/AoTBefore.png"} className="imagenes" alt=""/>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" className="NombreProducto">
                                Ataque de los Titanes - Before The Fall
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" className="Precio">$1,683.00</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Este es un mundo controlado por los titanes... La humanidad, convertida en alimento de gigantes, ha construido paredes gigantescas, y pagó el poder evitar los ataques con su libertad.
                            </td>
                        </tr>
                </table>
                <table class="TProductos">
                    <tr>
                        <td colspan="2">
                            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/Boys.jpg"} className="imagenes" alt=""/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="NombreProducto">
                            The Boys Box Set | Serie Completa
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="Precio">$3,300.00</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            Pocas cosas son tan peligrosas como los "súpers", sobre todo porque se trata de personas torpes, corruptas, viciosas y ególatras, tal como todas las demás del mundo.
                        </td>
                    </tr>
                </table>
                <table className="TProductos">
                <tbody><tr>
                    <td colSpan={2}>
                        <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/Levi.jpg"} className="imagenes" alt=""/>
                    </td>
                </tr>
                    <tr>
                        <td colSpan={2} className="NombreProducto">ATTACK ON TITAN THE FINAL SEASON-LEVI</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="Precio">$839.00</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            Figura coleccionable del Capitán Levi Ackerman de la serie "Attack on Titan"
                        </td>
                    </tr>
                </tbody></table>
          </div>
          <div className="Productos">
              <table className="TProductos">
                        <tr>
                            <td colspan="2">
                                 <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/Tokyo.jpg"} className="imagenes" alt=""/>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" className="NombreProducto">
                                Tokyo Revengers #4
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" className="Precio">$139.00</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Takemichi retrocede 12 años en el timepo para salvar a su amada exnovia Hinata Tachibana. Él quiere evitar que Draken muera, ¡pero justo ahora Kiyomasa lo apuñaló! Ese ataque hace que Takemichi caiga en la desesperación. ¡¿Acaso es imposible cambiar el futuro?! ¡Aquí inicia la venganza de Takemichi!
                            </td>
                        </tr>
                </table>
                <table class="TProductos">
                    <tr>
                        <td colspan="2">
                            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/Mandalorian.png"} className="imagenes" alt=""/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="NombreProducto">
                            Funko Pop Star Wars: Mandalorian
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="Precio">$329.00</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            Desde una Galaxia muy muy lejana llega este modelo especial de Funko Pop Moment, Adentrate más en la nueva saga de Star Wars: The Mandalorian de Disney +.
                        </td>
                    </tr>
                </table>
                <table className="TProductos">
                <tbody><tr>
                    <td colSpan={2}>
                        <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/Loki.png"} className="imagenes" alt=""/>
                    </td>
                </tr>
                    <tr>
                        <td colSpan={2} className="NombreProducto">Colección de Estampas y Tarjetas Loki</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="Precio">$79.00</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            Se ha detectado una anomalía en la Sagrada Línea Temporal Es la nueva colección de stikers y tarjetas de la exitosa serie de Marvel Studios Loki en donde encontrarás todos los detalles que desencadenaron un evento Nexus sin igual.
                        </td>
                    </tr>
                </tbody></table>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}