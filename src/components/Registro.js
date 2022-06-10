import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Registro.css';


export default class Registro extends Component {
  render() {
    return (
      <div className='inicio'>
        <div className='botones'>
          <button><Link to="/registroCliente">Registro para Clientes</Link></button>
          <br/><br/><br/><br/>
          <button className='inferior'><Link to="/registroVendedor">Registro para Vendedores</Link></button>
        </div>
      </div>
    )
  }
}