import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AccountContext } from "./Login/AccountContext";
import '../css/Registro.css';

const RegistroCliente = () => {
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: { username: "", password: "", name: "", birth: "", email: "", direction: "", photo: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("¡Nombre de usuario requerido!"),
      password: Yup.string().required("¡Contraseña requerida!").min(5, "Contraseña corta").max(15, "Contraseña demasiado larga"),
    }),
    onSubmit: (values, actions) => {
      const vals = { ...values };
      //actions.resetForm();
      console.log(values);
      fetch("http://localhost:4000/auth/registroCliente", {
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
  return <VStack as="form" className="registro" onSubmit={formik.handleSubmit}>
    <FormControl className="Datos">
      <h1>Registro Cliente</h1>
      <Text as="p" color="red">
        {error}
      </Text>
      <FormControl isInvalid={formik.errors.name && formik.touched.name}>
        <label htmlFor="Nombre">Nombre:</label>
        <input type="text" placeholder="Nombre" name="name" {...formik.getFieldProps("name")} autoComplete="off" />
        <FormErrorMessage className="mensaje">{formik.errors.user}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <label htmlFor="username">Dirección:</label>
        <input type="text" placeholder="Dirección" name="direction" {...formik.getFieldProps("direction")} autoComplete="off" />
      </FormControl>
      <FormControl>
        <label htmlFor="username">Fecha de Nacimiento:</label>
        <input type="date" placeholder="Fecha de nacimiento" name="birth" {...formik.getFieldProps("birth")} autoComplete="off" />
      </FormControl>
      <FormControl>
        <label htmlFor="username">Foto de Perfil:</label>
        <input type="file" placeholder="Fecha de Nacimiento" name="photo" {...formik.getFieldProps("photo")}/>
      </FormControl>
      <FormControl isInvalid={formik.errors.email && formik.touched.email}>
        <label htmlFor="username">Correo Electrónico:</label>
        <input type="text" placeholder="Correo Electrónico" name="email" {...formik.getFieldProps("email")} autoComplete="off" />
        <FormErrorMessage className="mensaje">{formik.errors.email}</FormErrorMessage>
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

export default RegistroCliente;