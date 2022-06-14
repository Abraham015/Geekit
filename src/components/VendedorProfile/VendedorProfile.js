import React from "react";
import Products from "../Products/Products";
import './vendedorProfile.css';

function VendedorProfile(){
    let params = useParams()
    const [vendedor, setVendedor] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:4000/vendedor/${params.id}`).then(async (res) =>{
            const seller = await res.json();
            console.log(seller)
            setVendedor(seller.seller)
            console.log(seller.seller)
        }).catch(console.error)
    },[]);

    return(
        !vendedor ? <h1>No Data</h1> :
        <div className="totalPerfilVendedor">
          <h1 className="nicknameVendedor">Perfil de {vendedor.nicknamevendedor}</h1>
          <div className="wrapperVendedorPerfil">
          <div class="itemCardVendedor">
              <div className="inicioCardVendedor">
                <img src={vendedor.fotovendedor} className="fotoPerfilVendedor"/>
                <b><p className="calificacion">Calificación: {vendedor.calificacion}</p></b>
              </div>
              <div className="contenidoCardVendedor">
                <p className="datosPersonalesVendedor"><b>Nombre(s):</b>{vendedor.nombrevendedor}</p><br />
                <p className="datosPersonalesVendedor"><b>Apellido Paterno:</b>{apVendedor}</p><br />
                <p className="datosPersonalesVendedor"><b>Apellido Materno:</b>{amVendedor}</p><br />
                <p className="datosPersonalesVendedor"><b>Categoría:</b>{categoria}</p><br />
                <p className="datosPersonalesVendedor"><b>Tipo:</b>{tipo}</p>
                <div className="fechaUnionTotal">
                  <div className="fechaUnion">
                    <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/calendario.png"} className="iconosVendedorPerfil"/>
                  </div>
                  <div className="fechaUnion">
                    <p className="miembroDesde"><b>Miembro desde: </b>{vendedor.fechaunio}</p>
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
                <p>{vendedor.certificacion}</p>
          </div>
          
          </div>
          <br/>
          <h2>PRODUCTOS: </h2>
          <Products />
        </div>
    );
}
export default VendedorProfile;