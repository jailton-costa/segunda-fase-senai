/*
(Criou e usou um componente Header, 2)

(Criou e usou um  componente/página Body/Home, 2)

(Criou o componente Logo e usou no Header, 2)

(Acrescentou uma inovação, um diferencial competitivo, 0,5) + adesivo

(Respeitou integralmente a paleta de cores do cliente, 1)

(Criou pelo menos mais um componente e usou no Body, 2)

(Alterou o tittle e o favicon para o tema do projeto, 0,5)
*/

import React from 'react'
import "./Rodape.css"


function Rodape () {
  return (
    <div className='tudoRodape'>
      <div className="espaçoRodape"></div><br />
      <h4>sobre nós</h4>
      <h4>fazer um comentário</h4>
      <div className='imgs'></div>
      <img src="./public/imagems/farmarcia-logo.png" className='imgRodape'/>
      <img src="./public/images/redes-sociais.png" className='imgRodape2'/>
    </div>
  )
}

export default Rodape

