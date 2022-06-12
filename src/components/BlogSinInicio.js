import '../css/BlogSinI.css';
import { useNavigate } from 'react-router-dom'

const Tab = () => {return <>&nbsp;&nbsp;&nbsp;&nbsp;</>;}

export default function BlogSinInicio(props) {
    const navigate = useNavigate();; // Para redireccionar

    const redireccionarAInicio = () => {
        navigate("/inicio");
    }

    const redireccionarARegistro = () => {
        navigate("/registroCliente");
    }

    return (
        <div className="blog">
            <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/BarraBlog.png"} className="imagenBlog" alt=""/>
            <div className="comenzarBlog">
                <p className="msjComenzar"> ¡Comienza tu blog! </p>
                <Tab/><Tab/>
                <div className="cajaBotones">
                    <span className="btnSesion" onClick={() => {redireccionarARegistro()}}> Registrate </span>
                    <Tab/><Tab/>
                    <span className="unionBtn"> ó </span>
                    <Tab/><Tab/>
                    <span className="btnSesion" onClick={() => {redireccionarAInicio()}}> Inicia sesión </span>
                </div>
                <img src={process.env.REACT_APP_BASE_URL_IMAGES + "/sackboy_happy.png"} className="imgComienza" alt=""/>
            </div>
        </div>
    )
}

