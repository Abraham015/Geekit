import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage } from "@chakra-ui/react";
import "../css/Inicio.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "./Login/AccountContext";

const Inicio = () => {
  const {setUser}=useContext(AccountContext);
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("¡Nombre de usuario requerido!"),
      password: Yup.string().required("¡Contraseña requerida!").min(5,"Contraseña corta").max(15,"Contraseña demasiado larga"),
    }),
    onSubmit: (values, actions) => {
      const vals={...values};
      actions.resetForm();
      fetch("http://localhost:4000/auth/inicio",{
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
        setUser({...data});
        navigate("/Home");
      });
    }
  });

  const navigate=useNavigate();

  return <VStack as="form" className="inicio" onSubmit={formik.handleSubmit}>
    <FormControl className="CuadroGrande">
      <img src={"Images/iniciosesion.png"} className="avatar" alt="fondo" />
      <h1> Iniciar Sesión </h1>{" "}
      <FormControl isInvalid={formik.errors.username && formik.touched.username}>
        <FormLabel>Usuario</FormLabel>
        <input type="text" placeholder="Usuario" autoComplete="off" name="username" 
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
        <Button type="submit" className="Entrar">Entrar</Button>
        <Button type="submit" className="Crear" onClick={()=>navigate("/Registro")}>Crear Cuenta</Button>
      </ButtonGroup>
      <br />
      <a href="!#"> ¿Olvidaste tu contraseña ? </a>
    </FormControl>
  </VStack>;
};

export default Inicio;