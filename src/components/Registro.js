import React, { Component } from "react";

export default class Registro extends Component {
  constructor(props){
    super(props);
    this.state={value: ''}
  }

  onchange=e=>{
    this.setState({value: e.target.value})
  }
  render() {
    const {value}=this.state;
    return (
      <div className="registro">
      <div className="Datos1">
            <div className="enunciado">Tipo de Usuario:</div> 
                <div><label className="container">Cliente
                <input type="radio" name="user" value="1" onChange={this.onchange}/>
                <span className="checkmark"></span>
                </label>
                </div>
                <div><label className="container">Vendedor
                <input type="radio" name="user" value="0" onChange={this.onchange}/>
                <span className="checkmark"></span>
                </label>
                </div>
            </div>
                {
                    value==='1'&&(
                    <div className="Datos">
                    <h1>Registro</h1>
                    <form action="">
                        <div className="Cliente">
                            <label for="Nombre">Nombre:</label>
                            <input type="text" placeholder="Nombre" />
                            <label for="username">Dirección:</label>
                            <input type="text" placeholder="Dirección" />
                            <label for="username">Fecha de Nacimiento:</label>
                            <input type="text" placeholder="Fecha de nacimiento" />
                            <label for="username">Foto de Perfil:</label>
                            <input type="file" placeholder="Fecha de Nacimiento" />
                            <label for="Nombre">Nickname:</label>
                            <input type="text" placeholder="Nickname" />
                            <label for="username">Correo Electrónico:</label>
                            <input type="text" placeholder="Correo Electrónico" />
                            <label for="password">Contraseña:</label>
                            <input type="password" placeholder="Contraseña" />
                        </div>      
                        <input type="submit" value="Registrar" />
                        </form>
                    </div>
                    )
                }
                {
                    value==='0'&&(
                        <div className="DatosV">
                    <h1>Registro</h1>
                    <form action="">
                        <div className="Vendedor">
                    <label for="Nombre">Nombre del Vendedor:</label>
                    <input type="text" placeholder="Nombre" />
                    <label for="username">Foto de Perfil:</label>
                    <input type="file" placeholder="Foto" />
                            <label for="Nombre">Categoría:</label>
                            <input type="text" placeholder="Categoría" />
                            <label for="Nombre">Certificación:</label>
                            <input type="text" placeholder="Certificación" />
                            <label for="Nombre">Nickname:</label>
                            <input type="text" placeholder="Nickname" />
                            <label for="username">Correo Electrónico:</label>
                            <input type="text" placeholder="Correo Electrónico" />
                    <label for="password">Contraseña:</label>
                    <input type="password" placeholder="Contraseña" />
                </div>
                <input type="submit" value="Registrar" />
                        </form>
                    </div>
                    )
                }
                
                
      </div>
    );
  }
}