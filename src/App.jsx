import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  return(
    <>
      <Perfil nome="bruno" endereco="https://github.com/Brunoalmeidev.png" />
      <ReposList />
      
      
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
