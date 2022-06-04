import React, { Component } from 'react'
import '../css/Buscar.css'

export default class Buscar extends Component {
    render() {
        return (
            <div className="busqueda">
                <div className="criterios-busquedas">
                    <div className="contenedor-barra-busqueda">
                        <form>
                            <label htmlFor="input-busqueda">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </label>
                            <input type="text" name="input-busqueda" id="input-busqueda" placeholder="Buscar foro" />
                        </form>

                    </div>
                    <div id="filtro-busqueda">
                        <i className="fa-solid fa-sliders" />
                    </div>
                </div>
                <div className="categorias-busquedas">
                    <ul>
                        <li>Cómics</li>
                        <li>Manga</li>
                        <li>Anime</li>
                        <li>Figuras</li>
                    </ul>
                </div>
            </div>

        )
    }
}
