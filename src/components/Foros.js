import React, { Component } from 'react'
import '../css/foros.css';

export default class Foros extends Component {
  render() {
    return (
      <div className="container">
          <div className="foro-seccion">
            <div className="tus-foros">
                <h2 className="titulo-seccion">Tus foros</h2>
                <div className="foros">
                    <div className="foro-item">
                        <div className="informacion-foro">
                            <div className="nombre-foro">
                                El eterno resplandor de un mundo sin Naruto
                            </div>
                            <div className="descripcion-foro">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga asdsssssss sssssssssss ssssssssss sssss ssssssssss...                                
                            </div>
                            <div className="miembros-foro">355 miembros</div>
                        </div>
                        <img className="foto-foro" src={process.env.REACT_APP_BASE_URL_IMAGES + "/Naruto.jpg"}alt=""/>
                    </div>
                    <div className="foro-item">

                    </div>
                    <div className="foro-item">

                    </div>
                </div>
                
            </div>
            <div className="explorar-foros">
                <h2 className="titulo-seccion">Explorar foros</h2>
                <div className="foro-item">

                </div>
            </div>
          </div>
          <div className="foro-seccion">
            <div className="discusiones">
            <h2 className="titulo-seccion">Discusiones</h2>
                <div className="foro-item">

                </div>
            </div>
          </div>
      </div>
    )
  }
}
