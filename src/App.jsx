import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario"


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  return(
    <>
      <Perfil nome="bruno" endereco="https://github.com/Brunoalmeidev.png" />
      
      
      {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
    </>
  )
}

export default App
