import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PopularesBusquedas extends Component {
  render() {
    return (
        <div className="column middle populares-busquedas">
        <div className="contendedorBusqueda">
            <div className="buscar">
                <input type="search" placeholder="Buscar" id="buscar" />
                <button type="submit" id="btnBuscar"><i className="fas fa-search" /></button>
            </div>
            <div className="Filtro">
                <p>
                    <i className="fa-solid fa-sliders" />
                </p>
            </div>
        </div>
        <br /><br />
        <div className="Categorias">
            <ul>
                <li>
                    <Link to="#">Cómics</Link>
                </li>
                <li>
                    <Link to="#">Manga</Link>
                </li>
                <li>
                    <Link to="#">Anime</Link>
                </li>
                <li>
                    <Link to="#">Figuras</Link>
                </li>
            </ul>
        </div>
        <br />
        <div className="TituloProduc">Productos más populares</div>
        <br />
        <div className="Productos" style={{ overflowX: 'auto' }}>
            <table className="TProductos">
                <tbody><tr>
                    <td colSpan={2}>
                        <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/AoTBefore.png"} className="imagenes" />
                    </td>
                </tr>
                    <tr>
                        <td colSpan={2}>Ataque de los Titanes - Before The Fall</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="Precio">$1,683.00</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            Este es un mundo controlado por los titanes... La humanidad, convertida en alimento de gigantes, ha construido paredes gigantescas, y pagó el poder evitar los ataques con su libertad.
                        </td>
                    </tr>
                </tbody></table>
            <table className="TProductos">
                <tbody><tr>
                    <td colSpan={2}>
                        <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/Boys.jpg"} className="imagenes" />
                    </td>
                </tr>
                    <tr>
                        <td colSpan={2}>The Boys Box Set | Serie Completa</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="Precio">$3,300.00</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            Pocas cosas son tan peligrosas como los "súpers", sobre todo porque se trata de personas torpes, corruptas, viciosas y ególatras, tal como todas las demás del mundo.
                        </td>
                    </tr>
                </tbody></table>
            <table className="TProductos">
                <tbody><tr>
                    <td colSpan={2}>
                        <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/Levi.jpg"} className="imagenes" />
                    </td>
                </tr>
                    <tr>
                        <td colSpan={2}>ATTACK ON TITAN THE FINAL SEASON-LEVI</td>
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
    </div>
    )
  }
}
