import React, { Component } from 'react'

const estilos= {
    "witdh": "100%",
    "height": "92vh",
    "backgroundColor": "#74d5ff",
    "display": "flex",
    "flexFlow": "row nowrap",
    "justifyContent": "center",
    "alignItems": "center",
};

export default class Recomendaciones extends Component {
    render() {
    return (
      <div style={estilos}>
          <img className="foto-foro" src={process.env.REACT_APP_BASE_URL_IMAGES + "/Coming soon!.png"} alt="" />
          <img className="foto-foro" src={process.env.REACT_APP_BASE_URL_IMAGES + "/mario.png"} alt="" />

      </div>
    )
  }
}
