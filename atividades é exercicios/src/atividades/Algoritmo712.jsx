import React, { useState } from 'react'

function Algoritmo712() {
    const [inputNumero, setInputNumero] = useState('')
    const [inputNumeroDigitado, setInputNumeroDigitado] = useState([]);
    const [contagemNumero, setContagemNumero] = useState(0)

    function inputNumeroBt() {
        const numero = parseInt(inputNumero)

        if (!isNaN(numero)) { 
            setInputNumeroDigitado([inputNumeroDigitado, numero]);

            if (numero > 100 && numero < 200) {
                setContagemNumero(contagemNumero + 1)
            }
        }
        setInputNumero('')
    }

    function inputNumeroBtResultados() {
        alert(`Números entre 100 e 200 não contam, Números que fora contados ( ${contagemNumero} )`)
    }

    return (
        <center>
            <h2>Digite vários número entre 100 e 200 🙂👍</h2>
            <br />
            <input
                type="number"
                value={inputNumero}
                onChange={(e) => setInputNumero(e.target.value)}
                placeholder="Digite um número"
            />
            <br />
            <button onClick={inputNumeroBt}>Ler número digitado</button>
            <br />
            <button onClick={inputNumeroBtResultados}>Ver resultado</button>
            <br />
            <h4>(Números digitados:{inputNumeroDigitado.join(', ')} )</h4>
            <h4>( Resultado: {contagemNumero} )</h4>
        </center>
    )
}

export default Algoritmo712