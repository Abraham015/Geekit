import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AccountContext } from "./Login/AccountContext";
import '../css/Envio.css';

const Envio=()=>{
  const {setUser}=useContext(AccountContext);
  const [setError]=useState(null);
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().required("¡Correo electrónico requerido!"),
    }),
    onSubmit: (values, actions) => {
      const vals={...values};
      //actions.resetForm();
      fetch("http://localhost:4000/auth/correo",{
        method: "POST",
        credentials: "include",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vals),
      }).catch(e=>{
        console.log("In error")
        console.log(e)
        return;
      }).then(res=>{
        if(!res||!res.ok||res.status>=400){
          return;
        }
        return res.json();
      }).then(data=>{
        if(!data) return;
        console.log(data);
        setUser({...data});
        if(data.status) {
          setError(data.status);
        }else if(data.loggedIn){
        navigate("/Home");
        }
        
      });
    }
  });
  const navigate=useNavigate();
  return <VStack as="form" className="envio">
    <FormControl className="DatosEnvio">
      <img src={"Images/camion.png"} className="avatar" alt="fondo" />
      <p>Porfavor ingresa el correo asociado con la cuenta para el envío de tu recibo de compra: </p>
      <br />
      <FormControl isInvalid={formik.errors.email && formik.touched.email}>
        <FormLabel>Correo Electrónico</FormLabel>
        <input type="text" placeholder="Correo" autoComplete="off" name="email" 
          {...formik.getFieldProps("email")} />
        <FormErrorMessage color="red">{formik.errors.email}</FormErrorMessage>
      </FormControl>
      <ButtonGroup className="Grupo4">
        <Button type="submit">Enviar Correo</Button>
      </ButtonGroup>
    </FormControl>
  </VStack>
}

export default Envio;