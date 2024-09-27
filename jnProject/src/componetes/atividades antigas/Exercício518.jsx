/* 5.18 - STAR Ubers PRIMEIRA ETAPA: 

- Ler a distância da próxima corrida e dizer quanto tempo vai levar.
1 dado de Entrada: Distância (em quilômetros);
1 dado de Saída: Tempo de viagem (em segundos).
Simples assim.*/

import { useState } from "react"

function Exercício518() {
  const [resultadoCorrida, setCorrida] = useState()

  return (
    <div>
      <h1>seja bem vindo STAR Ubers</h1>
      <input type="text" placeholder="digite a  distância da corrida"/>
      resultadoCorrida
    </div>
  )
}
export default Exercício518