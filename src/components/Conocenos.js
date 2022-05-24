import React, { Component } from "react";

export default class Conocenos extends Component {
  constructor(props){
    super(props);
    this.state={value: ''}
  }

  onchange=e=>{
    this.setState({value: e.target.value})
  }
  render() {
    return (
      <div className="conocenos">
          <img src={"Images/fondoConocenos.jpeg"} className="imgFondoConocenos" alt="fondoConocenos" />
          <div className="textoEncima">
                <h1 className="tituloConocenos">Misión</h1>
                <p>Ofrecer a la Comunidad Geek un espacio digital web donde puedan convivir y comprar una variedad de artículos, tales como manga, anime, cómics, figuras de colección, entre otros. Además de brindar oportunidades de trabajo para los vendedores que quieran formar parte de Geek it!</p>
                <h1 className="tituloConocenos">Contáctanos</h1>
                <div className="botonera">
                        <a href="!#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="!#" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="!#" className="instagram"><i className="fa fa-instagram"></i></a>
                </div>
                <img src={"Images/mario.png"} className="mario" alt="MarioBros" />
                <img src={"Images/lakitu.png"} className="lakitu" alt="Lakitu" />
                <div className="desarrolladores">
                    <img src={"Images/cuadroDesarrolladores.jpeg"} className="cuadroDes" alt="" />
                    <div className="textoEncima2">
                        <h1 className="tituloConocenos">Desarrolladores:</h1>
                        <ul>
                          <li><p>Hernández Alvarado Abraham</p></li>
                          <li><p>Juárez Leonel Reina Beatriz</p></li>
                          <li><p>Martínez Ruíz Alfredo</p></li>
                          <li><p>Olivares Ménez Gloria Oliva</p></li>
                        </ul>
                    </div>
                </div>
                <img src={"Images/estrella.png"} className="estrella" alt="Estrella" />
          </div>
      </div>
    );
  }
}