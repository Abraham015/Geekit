import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import '../css/Carrito.css'

const Carrito = () => {
  const navigate=useNavigate();
  return <VStack as="form" className="carrito">
    <FormControl className="CarritoD">
      <img src={"Images/carrito.png"} className="avatar" alt="fondo" />
      <h1>Carrito</h1>
      <FormControl>
        <table>
          <tr>
            <th>Nombre del producto</th>
            <th>Precio</th>
          </tr>
          <tr>
            <td>Attack on Titan The Final Season - LEVI</td>
            <td>$839.00</td>
          </tr>
          <tr>
            <td>Funko Pop! Leonard Hofstadter</td>
            <td>$339.00</td>
          </tr>
          <tr>
            <td>Juego de llaveros Marvel</td>
            <td>$650.00</td>
          </tr>
        </table>
      </FormControl>
      <ButtonGroup className="Grupo">
        <Button type="submit" onClick={()=>navigate("/metodoPago")}>Agregar Método de Pago</Button>
        <Button type="submit" className="Continuar" onClick={()=>navigate("/Envio")}>Continuar</Button>
      </ButtonGroup>
    </FormControl>
  </VStack>

}

export default Carrito; 