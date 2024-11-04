import React, { useState } from "react"

// tem erros estou arrumando 👍🙂👍

function PesquisaAlturaGenero710() {  
    const [pessoas, setPessoas] = useState(Array(10).fill({ altura: "", genero: "" }))
    const [resultado, setResultado] = useState(null)

    function calcularResultados() {
        const alturas = pessoas.map(p => parseFloat(p.altura)).filter(a => !isNaN(a))
        const generos = pessoas.map(p => parseInt(p.genero))

        const maiorAltura = Math.max(...alturas)
        const menorAltura = Math.min(...alturas)

        const mulheres = alturas.filter((_, i) => generos[i] === 1)
        const mediaAlturaMulheres = mulheres.reduce((a, b) => a + b, 0) / mulheres.length || 0

        const mediaAlturaPopulacao = alturas.reduce((a, b) => a + b, 0) / alturas.length
        const percentualHomens = (generos.filter(g => g === 0).length / generos.length) * 100

        setResultado({
            maiorAltura,
            menorAltura,
            mediaAlturaMulheres: mediaAlturaMulheres.toFixed(2),
            mediaAlturaPopulacao: mediaAlturaPopulacao.toFixed(2),
            percentualHomens: percentualHomens.toFixed(2),
        })
    }

    function handleInputChange(index, field, value) {
        const newPessoas = [...pessoas]
        newPessoas[index][field] = value
        setPessoas(newPessoas)
    }

    return (
        <div>
            <center>
                <h2>Pesquisa de Altura e Gênero</h2>
                {pessoas.map((_, index) => (
                    <div key={index}>
                        <input
                            type="number"
                            placeholder="Altura (m)"
                            value={pessoas[index].altura}
                            onChange={(e) => handleInputChange(index, "altura", e.target.value)}
                        />
                        <select
                            value={pessoas[index].genero}
                            onChange={(e) => handleInputChange(index, "genero", e.target.value)}
                        >
                            <option value="">Gênero</option>
                            <option value="0">Masculino</option>
                            <option value="1">Feminino</option>
                        </select>
                    </div>
                ))}
                <button onClick={calcularResultados}>Calcular</button>
                {resultado && (
                    <div>
                        <p>Maior altura: {resultado.maiorAltura} m</p>
                        <p>Menor altura: {resultado.menorAltura} m</p>
                        <p>Média de altura das mulheres: {resultado.mediaAlturaMulheres} m</p>
                        <p>Média de altura da população: {resultado.mediaAlturaPopulacao} m</p>
                        <p>Percentual de homens: {resultado.percentualHomens}%</p>
                    </div>
                )}
            </center>
        </div>
    )
}

export default PesquisaAlturaGenero710
