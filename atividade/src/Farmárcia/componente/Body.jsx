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
import './Body.css'

function Body ()  {
  return (
    <div className='tudo'>
      <h1>Bem-vindo à nossa página!</h1>
      
      <p className='adesivo'>Aqui está um texto de destaque com nosso diferencial competitivo: <strong>Adesivos personalizados!</strong></p>
      <p>Oferecemos adesivos personalizados para tornar sua experiência única!</p>
      <img src="./imagems/adesivos.png"/>
    </div>
  )
}

export default Body


