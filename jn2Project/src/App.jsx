import { useState } from 'react'
import Ap from './componetes/Ap'
import './App.css'

/* Senha Segura: Peça ao usuário para criar uma senha. Verifique se a senha tem pelo menos 8 caracteres. */

function App() {
  const [SenhaUsuário, setSenha] = useState(0)

  function SenhaUsuário() {

  }

  return (
    <div>

      <h3>seja bem vindo</h3>
      <h5>crie uma senha com 8 caracteres, para continuar.</h5>
      
      <input type="text" id="SenhaUsuário" />digite a senha
      <br />
      <button onClick={SenhaUsuário()}>confirmar</button>

    </div>
  )
}

export default App