import React, { useState } from "react"

function CrescimentoEnzoValentina711() {
  const [anos, setAnos] = useState(null)

  function calcularAnos() {
    let alturaValentina = 1.5 // 1.50m
    let alturaEnzo = 1.4 // 1.40m
    let anos = 0;

    while (alturaEnzo <= alturaValentina) {
      alturaEnzo += 0.03 // Enzo cresce 3 cm por ano
      alturaValentina += 0.02 // Valentina cresce 2 cm por ano
      anos++
    }

    setAnos(anos)
  }

  return (
    <div>
      <center>
        <div>
          <h2>Crescimento de Enzo e Valentina</h2>
          <button onClick={calcularAnos}>Calcular</button>
          {anos !== null && (
            <p>Enzo será mais alto que Valentina em {anos} anos.</p>
          )}
        </div>
      </center>
    </div>
  )
}

export default CrescimentoEnzoValentina711
