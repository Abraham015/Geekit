import { useContext, useState } from "react";
import { AccountContext } from "./Login/AccountContext";
import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import '../css/Pagar.css';

const Pagar=()=>{
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {tarjeta: "", fecha: "", nombre: "", CCV: "", user: ""},
    validationSchema: Yup.object({
      tarjeta: Yup.string().required("¡Número de tarjeta requerido!").min(1,"Número demasiado corto").max(16, "Número de tarjeta demasiado largo"),
      fecha: Yup.string().required("¡Fecha de Caducidad requerida!"),
      nombre: Yup.string().required("¡Nombre requerido!"),
      CCV: Yup.string().required("¡CCV requerido!").min(1,"Número demasiado corto").max(3, "Número de tarjeta demasiado largo"),
      user: Yup.string().required("¡Nombre de usuario requerido!")
    }),
    onSubmit: (values, actions) => {
      const vals={...values};
      fetch("http://localhost:4000/auth/metodo",{
        method: "POST",
        credentials: "include",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vals),
      }).catch(e=>{
        return;
      }).then(res=>{
        if(!res||!res.ok||res.status>=400){
          return;
        }
        return res.json();
      }).then(data=>{
        if(!data) return;
        console.log(data);
      }); 
        navigate("/Carrito");
    }
  });
  const navigate = useNavigate();
  return <VStack as="form" className="metodo" onSubmit={formik.handleSubmit}>
    <FormControl className="pago">
      <img src={"Images/metodo.jpg"} className="avatar" alt="fondo" />
      <h1>Método de Pago</h1>{" "}
      <FormControl isInvalid={formik.errors.user && formik.touched.user}>
        <FormLabel>Nombre de usuario: </FormLabel>
        <input type="text" placeholder="Usuario" autoComplete="off" name="user" 
          {...formik.getFieldProps("user")} />
        <FormErrorMessage color="red">{formik.errors.user}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.errors.tarjeta && formik.touched.tarjeta}>
        <FormLabel>Número de tarjeta: </FormLabel>
        <input type="text" placeholder="Número de tarjeta" autoComplete="off" name="tarjeta" 
          {...formik.getFieldProps("tarjeta")} />
        <FormErrorMessage color="red">{formik.errors.tarjeta}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.errors.fecha && formik.touched.fecha}>
        <FormLabel>Fecha de Caducidad: </FormLabel>
        <input type="date" placeholder="Fecha de Caducidad" autoComplete="off" name="fecha" 
          {...formik.getFieldProps("fecha")} />
        <FormErrorMessage color="red">{formik.errors.fecha}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.errors.nombre && formik.touched.nombre}>
        <FormLabel>Nombre del propietario: </FormLabel>
        <input type="text" placeholder="Nombre" autoComplete="off" name="nombre" 
          {...formik.getFieldProps("nombre")} />
        <FormErrorMessage color="red">{formik.errors.nombre}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.errors.CCV && formik.touched.CCV}>
        <FormLabel>Código de seguridad: </FormLabel>
        <input type="text" placeholder="Código de Seguridad" autoComplete="off" name="CCV" 
          {...formik.getFieldProps("CCV")} />
        <FormErrorMessage color="red">{formik.errors.CCV}</FormErrorMessage>
      </FormControl>
      <ButtonGroup className="Grupo3">
        <Button type="submit">Añadir método</Button>
      </ButtonGroup>
    </FormControl>
  </VStack>
}

export default Pagar;