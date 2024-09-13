/* 5.18 - STAR Ubers PRIMEIRA ETAPA: 

- Ler a distância da próxima corrida e dizer quanto tempo vai levar.
1 dado de Entrada: Distância (em quilômetros);
1 dado de Saída: Tempo de viagem (em segundos).
Simples assim.*/

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