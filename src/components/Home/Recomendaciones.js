import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Recomendaciones extends Component {
    render() {
        return (
            <div className="column side Recomendaciones">
                <p className="TRecomendaciones">¿No sabes por dónde empezar?</p>
                <hr />
                <div className="wrapper_recomendaciones">
                    <nav className="Recomendaciones" id="Recomendaciones">
                        <ul>
                            <li><Link to="#">Recomendación 1</Link></li>
                            <hr />
                            <li><Link to="#">Recomendación 2</Link></li>
                            <hr />
                            <li><Link to="#">Recomendación 3</Link></li>
                            <hr />
                            <li><Link to="#">Ver más...</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
