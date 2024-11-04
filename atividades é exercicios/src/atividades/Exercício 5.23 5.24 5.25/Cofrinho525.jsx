import React, { useState } from "react"

function Cofrinho525() {
    const [valorProduto, setValorProduto] = useState("")
    const [moedas1, setMoedas1] = useState("")
    const [moedas50, setMoedas50] = useState("")
    const [moedas25, setMoedas25] = useState("")
    const [moedas10, setMoedas10] = useState("")
    const [moedas5, setMoedas5] = useState("")
    const [resultado, setResultado] = useState("")
    
    function calcularTotal() {
        const produto = parseFloat(valorProduto);
        const total =
            (parseInt(moedas1) || 0) * 1 +
            (parseInt(moedas50) || 0) * 0.5 +
            (parseInt(moedas25) || 0) * 0.25 +
            (parseInt(moedas10) || 0) * 0.1 +
            (parseInt(moedas5) || 0) * 0.05;
        setResultado(
            total >= produto
                ? `Você tem o suficiente: R$${total.toFixed(2)}`
                : `Falta dinheiro: R$${total.toFixed(2)}`
        )
    }

    return (
        <div>
            <center>
                <h2>Verificar Cofrinho</h2>
                <input
                    type="number"
                    value={valorProduto}
                    onChange={(e) => setValorProduto(e.target.value)}
                    placeholder="Valor do Produto"
                /> <br />
                <input
                    type="number"
                    value={moedas1}
                    onChange={(e) => setMoedas1(e.target.value)}
                    placeholder="Moedas de 1 Real"
                /> <br />
                <input
                    type="number"
                    value={moedas50}
                    onChange={(e) => setMoedas50(e.target.value)}
                    placeholder="Moedas de 50 Centavos"
                /> <br />
                <input
                    type="number"
                    value={moedas25}
                    onChange={(e) => setMoedas25(e.target.value)}
                    placeholder="Moedas de 25 Centavos"
                /> <br />
                <input
                    type="number"
                    value={moedas10}
                    onChange={(e) => setMoedas10(e.target.value)}
                    placeholder="Moedas de 10 Centavos"
                /> <br />
                <input
                    type="number"
                    value={moedas5}
                    onChange={(e) => setMoedas5(e.target.value)}
                    placeholder="Moedas de 5 Centavos"
                /> <br />
                <button onClick={calcularTotal}>Verificar</button> <br />
                {resultado && <p>{resultado}</p>}
            </center>
        </div>
    )
}

export default Cofrinho525
