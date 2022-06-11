import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AccountContext } from "./Login/AccountContext";
import '../css/Registro.css';

const RegistroVendedor = () => {
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: { username: "", password: "" , name:"", category: "", certification: "", email: "", type: ""},
    validationSchema: Yup.object({
      username: Yup.string().required("¡Nombre de usuario requerido!"),
      password: Yup.string().required("¡Contraseña requerida!").min(5, "Contraseña corta").max(15, "Contraseña demasiado larga"),
    }),
    onSubmit: (values, actions) => {
      const vals = { ...values };
      actions.resetForm();
      fetch("http://localhost:4000/auth/registroVendedor", {
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
        setUser({ ...data });
        if (data.status) {
          setError(data.status);
        } else if (data.loggedIn) {
          navigate("/inicio");
        }

      });
    }
  });
  const navigate = useNavigate();
  return <VStack as="form" className="registroVendedor" onSubmit={formik.handleSubmit}>
    <FormControl className="DatosV">
      <h1>Registro Vendedor</h1>
      <Text as="p" color="red">
        {error}
      </Text>
      <FormControl>
        <label htmlFor="Nombre">Nombre del vendedor:</label>
        <input type="text" placeholder="Nombre" name="name" {...formik.getFieldProps("name")}/>
      </FormControl>
      <FormControl>
        <label htmlFor="username">Foto de Perfil:</label>
        <input type="file" placeholder="Fecha de Nacimiento" />
      </FormControl>
      <FormControl>
        <label htmlFor="Nombre">Categoría:</label>
        <input type="text" placeholder="Categoría" name="category" {...formik.getFieldProps("category")}/>
      </FormControl>
      <FormControl>
        <label htmlFor="Nombre">Tipo de Vendedor:</label>
        <input type="text" placeholder="Tipo" name="type" {...formik.getFieldProps("type")}/>
      </FormControl>
      <FormControl>
        <label htmlFor="Nombre">Certificación:</label>
        <input type="text" placeholder="Certificación" name="certification" {...formik.getFieldProps("certification")}/>
      </FormControl>
      <FormControl>
        <label htmlFor="username">Correo Electrónico:</label>
        <input type="text" placeholder="Correo Electrónico" name="email" {...formik.getFieldProps("email")}/>
      </FormControl>
      <FormControl isInvalid={formik.errors.username && formik.touched.username}>
        <FormLabel>Nickname:</FormLabel>
        <input type="text" placeholder="Nickname" autoComplete="off" name="username"
          {...formik.getFieldProps("username")} />
        <FormErrorMessage className="mensaje">{formik.errors.username}</FormErrorMessage>
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
      <ButtonGroup className="Grupo">
        <Button type="submit" className="register">Registrarse</Button>
        <Button type="submit" className="iniciar" onClick={() => navigate("/inicio")}>Iniciar Sesión</Button>
      </ButtonGroup>
    </FormControl>
  </VStack>
}

export default RegistroVendedor;