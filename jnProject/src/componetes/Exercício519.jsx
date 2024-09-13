/*5.19 - SEGUNDA ETAPA:
O tempo de viagem já é apresentado em segundos...
Caso este tempo seja maior que um minuto, apresentar este valor também 
em minutos;
Caso seja maior que uma hora, apresentar também em horas;
Caso seja maior que um dia, apresentar também em dias;
Caso seja maior que 30 dias, apresentar também em meses;
Caso seja maior que 12 meses, apresentar também em anos.
Deu, simples assim...*/

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