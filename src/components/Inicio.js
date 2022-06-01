import React, { Component } from "react";
import '../css/Inicio.css';


export default class Inicio extends Component {
  render() {
    return (
      <div className="inicio">
      <div className="CuadroGrande">
        <img src={"Images/iniciosesion.png"} className="avatar" alt="fondo" />
        <h1> Iniciar Sesión </h1>{" "}
        <form action="">
          <label for="username"> Usuario </label>{" "}
          <input type="text" placeholder="Usuario" />
          <label for="password"> Contraseña </label>{" "}
          <input type="password" placeholder="Contraseña" />
          <input type="submit" value="Entrar" />
          <a href="!#"> ¿Olvidaste tu contraseña ? </a> <br />
          <a href="/registro"> ¿No tienes una cuenta ? </a>{" "}
        </form>{" "}
      </div>{" "}
    </div>
    );
  }
}
