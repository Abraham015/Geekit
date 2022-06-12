import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import '../css/Prerestore.css';
import { useContext, useState } from "react";
import { AccountContext } from "./Login/AccountContext";

const Restaurar = () => {
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {email: "", password:"", confirm: ""},
    validationSchema: Yup.object({
      email: Yup.string().required("¡Correo electronico requerido!"),
      password: Yup.string().required("¡Contraseña requerida!").min(5,"Contraseña corta").max(15,"Contraseña demasiado larga"),
      confirm: Yup.string().required("¡Contraseña requerida!").min(5,"Contraseña corta").max(15,"Contraseña demasiado larga"),
    }),
    onSubmit: (values, actions) => {
      const vals={...values};
      //actions.resetForm();
      fetch("http://localhost:4000/auth/restore",{
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
      navigate("/inicio");
    }
  });
  const navigate = useNavigate();
  return <VStack as="form" className="restore" onSubmit={formik.handleSubmit}>
    <FormControl className="DatosR">
      <img src={"Images/password.jpg"} className="avatar" alt="fondo" />
      <h1>Restaurar contraseña</h1>{" "}
      <FormControl isInvalid={formik.errors.email && formik.touched.email}>
        <FormLabel>Correo Electrónico: </FormLabel>
        <input type="text" placeholder="Correo" autoComplete="off" name="email" 
          {...formik.getFieldProps("email")} />
        <FormErrorMessage color="red">{formik.errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.errors.password && formik.touched.password}>
        <FormLabel>Contraseña</FormLabel>
        <input
          type="password"
          placeholder="Contraseña"
          autoComplete="off"
          name="password"
          {...formik.getFieldProps("password")}
        />
        <FormErrorMessage className="mensaje">{formik.errors.password}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.errors.confirm && formik.touched.confirm}>
        <FormLabel>Confirmar Contraseña</FormLabel>
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          autoComplete="off"
          name="confirm"
          {...formik.getFieldProps("confirm")}
        />
        <FormErrorMessage className="mensaje">{formik.errors.confirm}</FormErrorMessage>
      </FormControl>
      <ButtonGroup className="Grupo2">
        <Button type="submit" className="Entrar">Enviar</Button>
      </ButtonGroup>
    </FormControl>
  </VStack>
}

export default Restaurar;