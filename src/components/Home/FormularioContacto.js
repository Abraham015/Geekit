import React, { Component } from 'react'

export default class FormularioContacto extends Component {
    render() {
        return (
            <div className="formulario-contacto">
                <p id="duda">¿Tienes alguna duda? Contáctanos</p>
                <form action="">
                    <input type="text" name="" id="" placeholder="Nombre Completo" className="formFooter" />
                    <input type="email" name="" id="" placeholder="Correo" className="formFooter" />
                    <input type="tel" name="" id="" placeholder="Teléfono" className="formFooter" />
                    <textarea name="" id="" cols={80} rows={10} placeholder="Comentarios" defaultValue={""} />
                    <button type="submit" id="enviar">Enviar</button>
                </form>
            </div>
        )
    }
}
