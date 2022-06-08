import React, { Component } from "react";
import "../css/Inicio.css";
import { useFormik } from "formik";

export default class Inicio extends Component {

  render() {
    const formik = useFormik({
      initialValues: {}
    });
    return (
      <div className="inicio">
        <div className="CuadroGrande">
          <img src={"Images/iniciosesion.png"} className="avatar" alt="fondo" />
          <h1> Iniciar Sesión </h1>{" "}
          <form action="">
            <label for="username"> Usuario </label>{" "}
            <input type="text" placeholder="Usuario" autoComplete="off" name="username" />
            <label for="password"> Contraseña </label>{" "}
            <input
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              name="password"
            />
            <input type="submit" value="Entrar" />
            <a href="!#"> ¿Olvidaste tu contraseña ? </a> <br />
            <a href="/registro"> ¿No tienes una cuenta ? </a>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    );
  }
}
