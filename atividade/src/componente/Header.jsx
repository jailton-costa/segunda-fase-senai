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
import './Header.css'
function Header() {

  return (
    <body>
      <div className='tudoHeader'>
        <img src="/public/imagems/farmarcia-logo.png" className='img'/>
        <div className='espaço'></div>
        <div className='buttonlocal'>
          <button className='button'>Home</button>
          <button className='button'>Sobre</button>
          <button className='button'>Contato</button>
        </div>
      </div>
    </body>
  )
}

export default Header



