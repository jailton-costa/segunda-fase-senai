import { useState } from "react"
import "Exercício529.css"

function Exercício529() {
  const [resultado, setResultado] = useState()

  function processarNumero() {
    let numero = Number(prompt('digite um numero: '))
    if (numero > 0) {
      setResultado('o número é positivo')
    } else if (numero < 0) {
      setResultado('o número é negativo')
    } else {
      setResultado('é zero')
    }
  }

  return (
    <div>
      <h2>copo meio cheio</h2>
      {resultado}
      <button onClick={processarNumero}>processar</button>
      
    </div>
  )
}
export default Exercício529