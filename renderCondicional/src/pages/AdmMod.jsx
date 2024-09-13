import React from 'react'
import { useState } from 'react'
import './pages/ModAdm.css'

function AdmMod() {
  const [adm, setAdm] = useState(true)
  const [idade, setIdade] = useState(0)
  const [usuario, setUsuario] = useState(false)
  
  return (
    <div>
      <h1>renderizações condicionais</h1>
      <div>
        <button onClick={() => { setAdm(true) }}>adm</button>
        <button onClick={() => { setAdm(false) }}>admFim</button>
        {adm && <painelAdm />}
      </div>


      <br /><br />

      <div className='conteiner'>
        <button onClick={() => { setIdade(idade - 1) }}>-</button>
        {idade}
        <button onClick={() => { setIdade(idade + 1) }}>+</button>
        {idade >= 18 && <ProdutosParaMaiores />}
      </div>

      <div>
        <button onClick={() => { setUsuario(true) }}>logar</button>
        <button onClick={() => { setUsuario(false) }}>des logaar</button>
        {usuario ? <usuariologado /> : <login />}
      </div>

    </div>
  )
}

export default AdmMod
