import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import '../css/Prerestore.css';

const Prerestaurar = () => {
  const formik = useFormik({
    initialValues: {email: ""},
    validationSchema: Yup.object({
      email: Yup.string().required("¡Correo electronico requerido!")
    }),
    onSubmit: (values, actions) => {
      const vals = { ...values };
      //actions.resetForm();
      console.log(values);
      fetch("http://localhost:4000/auth/prerestore", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vals),
      }).catch(e => {
        return;
      }).then(res => {
        if (!res || !res.ok || res.status >= 400) {
          return;
        }
        return res.json();
      }).then(data => {
        if (!data) return;
        console.log(data);
      });
      navigate("/inicio");
    }
  });
  const navigate = useNavigate();
  return <VStack as="form" className="restore" onSubmit={formik.handleSubmit}>
    <FormControl className="Datos">
      <img src={"Images/password.jpg"} className="avatar" alt="fondo" />
      <h1>Restaurar contraseña</h1>{" "}
      <p>Porfavor ingresa el correo electronico asciado a la cuenta</p>
      <br />
      <FormControl isInvalid={formik.errors.email && formik.touched.email}>
        <FormLabel>Correo Electrónico: </FormLabel>
        <input type="text" placeholder="Correo" autoComplete="off" name="email" 
          {...formik.getFieldProps("email")} />
        <FormErrorMessage color="red">{formik.errors.email}</FormErrorMessage>
      </FormControl>
      <br />
      <ButtonGroup className="Grupo1">
        <Button type="submit" className="Crear" onClick={()=>navigate("/inicio")}>Regresar</Button>
        <Button type="submit" className="Entrar">Enviar</Button>
      </ButtonGroup>
    </FormControl>
  </VStack>
}

export default Prerestaurar;