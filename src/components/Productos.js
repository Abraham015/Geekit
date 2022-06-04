import React, { Component} from "react";
import "../css/Productos.css";
import Buscar from "./Buscar";
import Products from "./Products/Products";

export default class Productos extends Component {
  render() {
    return (
      <div className="productos">
          <br />

          <div className="column middle">
          <Buscar></Buscar>
            <br />
            <br />
          </div>
          
          <br /> 
          <Products productImage={process.env.REACT_APP_BASE_URL_IMAGES + "/Levi.jpg"} productName={"Attack on Titan The Final Season - LEVI"} productPrice={"$839.00"} productDescription={"Figura coleccionable del Capitán Levi Ackerman de la serie 'Attack on Titan'"} productName2={"The Boys Box Set | Serie Completa"} productPrice2={"$3,300.00"} productDescription2={"Pocas cosas son tan peligrosas como los 'súpers', sobre todo porque se trata de personas torpes, corruptas, viciosas y ególatras, tal como todas las demás del mundo."} productImage2={process.env.REACT_APP_BASE_URL_IMAGES + "/Boys.jpg"} productName3={"Ataque de los Titanes - Before The Fall"} productPrice3={"$1,683.00"} productDescription3={"Este es un mundo controlado por los titanes... La humanidad, convertida en alimento de gigantes, ha construido paredes gigantescas, y pagó el poder evitar los ataques con su libertad."} productImage3={process.env.REACT_APP_BASE_URL_IMAGES + "/AoTBefore.png"}/>

          <Products productImage={process.env.REACT_APP_BASE_URL_IMAGES + "/sableLuz.jpg"} productName={"Star Wars Darth Vader - Sable de luz roja"} productPrice={"$762.15"} productDescription={"Sable de luz de Darth Vader rojo, iluminado, con luces, sonidos y frases."} productName2={"X-Men: Age of Apocalypse Omnibus"} productPrice2={"$7,466.32"} productDescription2={"Charles Xavier está muerto, asesinado en el pasado durante un accidente de viaje en el tiempo, Apocalipsis gobierna a través de su credo de la 'supervivencia del más apto' ... pero escondidos entre una humanidad oprimida están los luchadores por la libertad de Magneto: ¡los X-Men!"} productImage2={process.env.REACT_APP_BASE_URL_IMAGES + "/x-menComic.jpg"} productName3={"Funko Pop! Leonard Hofstadter"} productPrice3={"$339.00"} productDescription3={"Figura coleccionable Funko Pop! de Leonard Hofstadter, The Big Bang Theory"} productImage3={process.env.REACT_APP_BASE_URL_IMAGES + "/leonardTBBT.jpg"}/>

          <Products productImage={process.env.REACT_APP_BASE_URL_IMAGES + "/pikachu.jpg"} productName={"Peluche Pikachu"} productPrice={"$976.92"} productDescription={"Peluche de Pikachu con licencia oficial de Sanei Pokemon"} productName2={"Juego de llaveros Marvel"} productPrice2={"$650.00"} productDescription2={"Juego de 6 llaveros para los amantes de Marvel"} productImage2={process.env.REACT_APP_BASE_URL_IMAGES + "/llaverosMarvel.png"} productName3={"Playera Flash, DC Comics"} productPrice3={"$239.00"} productDescription3={"Playera de Flash para Caballero, color rojo, unitalla"} productImage3={process.env.REACT_APP_BASE_URL_IMAGES + "/playeraFlash.jpg"}/>
      </div>
    );
  }
}

