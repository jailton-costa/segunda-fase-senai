import { useState } from 'react'
import Ap from './componetes/Ap'
import './App.css'

/* Jogo de Adivinhação: Crie um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número e, em seguida, diga se eles acertaram ou não. */

function Ap() {
  const [SenhaUsuário, setSenha] = useState(0)

  function SenhaUsuário() {
    if(){
      
    }
    else if(){

    }
    else{

    }
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

export default Ap