import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PanelDiscusiones extends Component {
    render() {
        return (
            <div className="Dis panel-discusiones">
                <table className="Comment">
                    <tbody><tr><th colSpan={2}>Súmate a la discusión</th>
                    </tr></tbody></table>
                <table className="Comment">
                    <tbody><tr>
                        <td rowSpan={2} className="Foto2">
                            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/user.jpg"} className="Foto" />
                        </td><td>
                            <p className="Usuario">Jefferson Guitierritos</p>
                            <p className="Comentarios">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </td>
                    </tr>
                    </tbody></table>
                <table className="Comment">
                    <tbody><tr>
                        <td rowSpan={2} className="Foto2">
                            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/user.jpg"} className="Foto" />
                        </td><td>
                            <p className="Usuario">Jefferson Guitierritos</p>
                            <p className="Comentarios">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </td>
                    </tr>
                    </tbody></table>
                <table className="Comment">
                    <tbody><tr>
                        <td rowSpan={2} className="Foto2">
                            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/user.jpg"} className="Foto" />
                        </td><td>
                            <p className="Usuario">Jefferson Guitierritos</p>
                            <p className="Comentarios">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </td>
                    </tr>
                    </tbody></table>
                <table className="Comment">
                    <tbody><tr>
                        <td rowSpan={2} className="Foto2">
                            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/user.jpg"} className="Foto" />
                        </td><td>
                            <p className="Usuario">Jefferson Guitierritos</p>
                            <p className="Comentarios">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </td>
                    </tr>
                    </tbody></table>
            </div>
        )
    }
}
