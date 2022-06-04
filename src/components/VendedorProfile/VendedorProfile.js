import React from "react";
import Products from "../Products/Products";
import './vendedorProfile.css';

const VendedorProfile = ({nicknameVendedor, fotoVendedor, nombreVendedor,apVendedor,amVendedor,categoria, tipo, fecha, calificacion, certificaciones, acercaMi}) => {
  return (
    <div className="totalPerfilVendedor">
        <h1 className="nicknameVendedor">Perfil de {nicknameVendedor}</h1>
        <div className="wrapperVendedorPerfil">
        <div class="itemCardVendedor">
            <div className="inicioCardVendedor">
              <img src={fotoVendedor} className="fotoPerfilVendedor"/>
              <b><p className="calificacion">Calificación: {calificacion}</p></b>
            </div>
            <div className="contenidoCardVendedor">
              <p className="datosPersonalesVendedor"><b>Nombre(s):</b>{nombreVendedor}</p><br />
              <p className="datosPersonalesVendedor"><b>Apellido Paterno:</b>{apVendedor}</p><br />
              <p className="datosPersonalesVendedor"><b>Apellido Materno:</b>{amVendedor}</p><br />
              <p className="datosPersonalesVendedor"><b>Categoría:</b>{categoria}</p><br />
              <p className="datosPersonalesVendedor"><b>Tipo:</b>{tipo}</p>
              <div className="fechaUnionTotal">
                <div className="fechaUnion">
                  <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/calendario.png"} className="iconosVendedorPerfil"/>
                </div>
                <div className="fechaUnion">
                  <p className="miembroDesde"><b>Miembro desde: </b>{fecha}</p>
                </div>
              </div>
              <div className="botonContactoVendedor"><p className="contactoVendedor">CONTACTAME</p></div>
            </div>
        </div>

        <div class="certificaciones">
              <div className="headerCertificaciones">
                <div><img src={process.env.REACT_APP_BASE_URL_IMAGES + "/estrellaCertificaciones.png"} className="iconosVendedorPerfil"/></div>
                <div><h2 className="subtituloCert-Info">CERTIFICACIONES</h2></div>
              </div>
              <p>{certificaciones}</p>
        </div>
        <div class="acerca-de-mi">
            <div className="headerAcercaDeMi">
                <div><img src={process.env.REACT_APP_BASE_URL_IMAGES + "/informacion.png"} className="iconosVendedorPerfil"/></div>
                <div><h2 className="subtituloCert-Info">ACERCA DE MI</h2></div>
            </div>
              <p className="acercademi-Info">{acercaMi}</p>
        </div>

        </div>
        <br/>
        <h2>PRODUCTOS: </h2>
        <Products />
    </div>
  );
};

export default VendedorProfile;