import React, { useState } from "react"

function ContaAlbergue77() {
    const [diarias, setDiarias] = useState("")
    const [valorFinal, setValorFinal] = useState(null)
    const [detalhes, setDetalhes] = useState("")

    function calcularConta() {
        const dias = parseInt(diarias)
        if (isNaN(dias) || dias <= 0) return

        // Definir o valor base das diárias
        let precoPorDia
        if (dias <= 5) precoPorDia = 100
        else if (dias <= 10) precoPorDia = 90
        else precoPorDia = 80

        // Calcular valor total das diárias
        const valorDiarias = dias * precoPorDia

        // Aplicar descontos
        const descontoEmocional = valorDiarias * 0.10
        const descontoAssociacao = valorDiarias * 0.15
        const totalDescontos = descontoEmocional + descontoAssociacao

        // Multa por danos materiais
        const multa = 150

        // Valor final da conta
        const valorTotal = valorDiarias - totalDescontos + multa

        setValorFinal(valorTotal.toFixed(2))
        setDetalhes(`
        Valor das diárias: R$${valorDiarias.toFixed(2)}
        Desconto emocional: R$${descontoEmocional.toFixed(2)}
        Desconto da associação: R$${descontoAssociacao.toFixed(2)}
        Multa por danos: R$${multa.toFixed(2)}
        `)
    }

    return (
        <div>
            <center>
                <h2>Calcular Conta do Albergue</h2>
                <input
                    type="number"
                    value={diarias}
                    onChange={(e) => setDiarias(e.target.value)}
                    placeholder="Número de diárias"
                />
                <button onClick={calcularConta}>Calcular</button>
                {valorFinal && (
                    <div>
                        <p>Valor final da conta: R${valorFinal}</p>
                        <pre>{detalhes}</pre>
                    </div>
                )}
            </center>
        </div>
    )
}

export default ContaAlbergue77
