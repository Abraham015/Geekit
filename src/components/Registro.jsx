/*import { VStack, FormControl, FormLabel } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";*/
import { /*useState,*/ Component } from "react";
//import {FormGroup} from "reactstrap";
import '../css/Registro.css';
/*
interface Props {
  questionnaire: any;
}

const Registro = (props:Props) => {
  const [framework, setFramework] = useState();

  const handleInputChange = (value: any) => {
    setFramework(value);
  };

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("¡Nombre de usuario requerido!"),
      password: Yup.string().required("¡Contraseña requerida"),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    }
  });

  return <VStack as="form" className="inicio" onSubmit={formik.handleSubmit}>
    <FormControl className="registro">
      <FormGroup>
        
      </FormGroup>
      <FormControl className="Datos1">
        <FormLabel className="enunciado">Tipo de Usuario:</FormLabel>
        <FormGroup>
          <FormLabel className="opciones"><FormLabel className="op">Cliente</FormLabel>
            <input type="radio" name="user" value="1" checked={1===framework} onChange={e => handleInputChange(1)}/>
            <span className="checkmark"></span>
          </FormLabel>
          <FormLabel className="opciones"><FormLabel className="op">Vendedor</FormLabel>
            <input type="radio" name="user" value="0" checked={0===framework} onChange={e => handleInputChange(0)}/>
            <span className="checkmark"></span>
          </FormLabel>
        </FormGroup>
        <FormControl>
        </FormControl>
      </FormControl>
      <FormControl>
        {framework}
      </FormControl>
    </FormControl>
  </VStack >;
};

export default Registro;*/


export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  onchange = e => {
    this.setState({ value: e.target.value })
  }
  render() {
    const { value } = this.state;
    return (
      <div className="registro">
        <div className="Datos1">
          <div className="enunciado">Tipo de Usuario:</div>
          <div><label className="opciones">Cliente
            <input type="radio" name="user" value="1" onChange={this.onchange} />
            <span className="checkmark"></span>
          </label>
          </div>
          <div><label className="opciones">Vendedor
            <input type="radio" name="user" value="0" onChange={this.onchange} />
            <span className="checkmark"></span>
          </label>
          </div>
        </div>
        {
          value === '1' && (
            <div className="Datos">
              <h1>Registro</h1>
              <form action="">
                <div className="Cliente">
                  <label htmlFor="Nombre">Nombre:</label>
                  <input type="text" placeholder="Nombre" />
                  <label htmlFor="username">Dirección:</label>
                  <input type="text" placeholder="Dirección" />
                  <label htmlFor="username">Fecha de Nacimiento:</label>
                  <input type="text" placeholder="Fecha de nacimiento" />
                  <label htmlFor="username">Foto de Perfil:</label>
                  <input type="file" placeholder="Fecha de Nacimiento" />
                  <label htmlFor="Nombre">Nickname:</label>
                  <input type="text" placeholder="Nickname" />
                  <label htmlFor="username">Correo Electrónico:</label>
                  <input type="text" placeholder="Correo Electrónico" />
                  <label htmlFor="password">Contraseña:</label>
                  <input type="password" placeholder="Contraseña" />
                </div>
                <input type="submit" value="Registrar" />
              </form>
            </div>
          )
        }
        {
          value === '0' && (
            <div className="DatosV">
              <h1>Registro</h1>
              <form action="">
                <div className="Vendedor">
                  <label htmlFor="Nombre">Nombre del Vendedor:</label>
                  <input type="text" placeholder="Nombre" />
                  <label htmlFor="username">Foto de Perfil:</label>
                  <input type="file" placeholder="Foto" />
                  <label htmlFor="Nombre">Categoría:</label>
                  <input type="text" placeholder="Categoría" />
                  <label htmlFor="Nombre">Certificación:</label>
                  <input type="text" placeholder="Certificación" />
                  <label htmlFor="Nombre">Nickname:</label>
                  <input type="text" placeholder="Nickname" />
                  <label htmlFor="username">Correo Electrónico:</label>
                  <input type="text" placeholder="Correo Electrónico" />
                  <label htmlFor="password">Contraseña:</label>
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