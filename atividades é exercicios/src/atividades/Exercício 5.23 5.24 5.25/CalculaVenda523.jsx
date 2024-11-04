import React, { useState } from "react"

function CalculaVenda523() {
    const [valorCompra, setValorCompra] = useState("")
    const [valorVenda, setValorVenda] = useState(null)

    function calcularValorVenda  () {
        const compra = parseFloat(valorCompra)
        if (isNaN(compra)) return

        const lucro = compra < 20 ? 0.45 : 0.3
        const venda = compra * (1 + lucro)
        setValorVenda(venda.toFixed(2))
    }

    return (
        <div>
            <center>
                <h2>Calcular Valor de Venda</h2>
                <input
                    type="number"
                    value={valorCompra}
                    onChange={(e) => setValorCompra(e.target.value)}
                    placeholder="Valor de compra"
                /> <br />
                <button onClick={calcularValorVenda}>Calcular</button> <br />
                {valorVenda && <p>Valor de Venda: R${valorVenda}</p>}
            </center>
        </div>
    )
}

export default CalculaVenda523
