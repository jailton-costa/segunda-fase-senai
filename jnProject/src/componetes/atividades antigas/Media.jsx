import { useState } from "react"
import "./Media.css"

function Media() {
    const [resultado, setResultado]=useState()
    function calcularMedia(){
        let nota1 = Number(prompt("digite o 1o numero: "))
        let nota2 = Number(prompt("digite o 2o numero: "))
        let media = (nota1 + nota1)/2
        setResultado(media)
    }
  return (
    <div>
        <h2>exercicio para calcular media de 2 números</h2>
        <button onClick={calcularMedia}>calcular</button>
        <Exemplo />
        media: {resultado}
    </div>
  )
}
export default Media
