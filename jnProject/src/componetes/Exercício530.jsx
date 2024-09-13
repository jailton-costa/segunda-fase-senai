/* Dois copos meio cheios: Faça um programa para ler um número e 
imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
tempo.*/

import { useState } from "react"

function Exercício530() {
  const [resultado, setResultado] = useState()

  function processarNumero() {
    let numero = Number(prompt('digite um numero: '))
    
    if (numero ==2 || numero ==4 || numero ==6) {
      setResultado('o número é positivo é par')
    }else if (numero >=1) {
      setResultado('o número é positivo')
    }else if (numero < 0 ) {
      setResultado('o número é negativo')
    }else {
      setResultado('é zero')
    }
  }

  return (
    <div>
      <h2>copo meio cheio</h2>
      <br />
      <button onClick={processarNumero}>processar</button>
      <br /><br />
      {resultado}
    </div>
  )
}
export default Exercício530