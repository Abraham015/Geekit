import React, { Component } from 'react'
import '../css/foros.css';

export default class Foros extends Component {
  render() {
    return (
      <div className="container">
          <div className="foro-seccion">
            <div className="tus-foros">
                <h1>Tus Foros</h1>
            </div>
            <div className="explorar-foros">
                <h1>Explorar Foros</h1>
            </div>
          </div>
          <div className="foro-seccion">
            <div className="discusiones">
                <h1>Discusiones</h1>
            </div>
          </div>
      </div>
    )
  }
}
