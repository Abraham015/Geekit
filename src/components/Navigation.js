import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <header>
      <div className="menu_bar">
        <a href="!#" className="bt-menu"><span className="icon-menu" /></a>
      </div>
      <div className="wrapper">
        <nav id="menu">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="!#">Productos</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="!#">Recomendaciones</Link>
            </li>
            <li>
              <Link to="/foros">Foros</Link>
            </li>
            <li className="Last">
              <Link to="/conocenos">Conócenos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )
  }
}
