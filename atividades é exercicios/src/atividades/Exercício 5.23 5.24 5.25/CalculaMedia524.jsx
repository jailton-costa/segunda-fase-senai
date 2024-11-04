import React, { useState } from "react"

function CalculaMedia524() {
    const [nota1, setNota1] = useState("")
    const [nota2, setNota2] = useState("")
    const [media, setMedia] = useState(null)
    const [conceito, setConceito] = useState("")

    function calcularMedia () {
        const n1 = parseFloat(nota1)
        const n2 = parseFloat(nota2)
        if (isNaN(n1) || isNaN(n2)) return

        const mediaCalculada = (n1 + n2) / 2
        setMedia(mediaCalculada.toFixed(2))

        let conceitoCalculado = ""
        if (mediaCalculada > 9) conceitoCalculado = "A"
        else if (mediaCalculada > 7.5) conceitoCalculado = "B"
        else if (mediaCalculada > 6) conceitoCalculado = "C"
        else if (mediaCalculada > 4) conceitoCalculado = "D"
        else conceitoCalculado = "E"

        setConceito(conceitoCalculado)
    }

    return (
        <div>
            <center>
                <h2>Calcular Média e Conceito</h2>
                <input
                    type="number"
                    value={nota1}
                    onChange={(e) => setNota1(e.target.value)}
                    placeholder="Nota 1"
                /> <br />
                <input
                    type="number"
                    value={nota2}
                    onChange={(e) => setNota2(e.target.value)}
                    placeholder="Nota 2"
                /> <br />
                <button onClick={calcularMedia}>Calcular</button> <br />
                {media && (
                    <div>
                        <p>Média: {media}</p>
                        <p>Conceito: {conceito}</p>
                    </div>
                )}
            </center>
        </div>
    )
}

export default CalculaMedia524
