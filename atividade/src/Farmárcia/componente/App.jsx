import React from 'react'
import Header from './componente/Header'
import Body from './componente/Body'
import Rodape from './componente/Rodape'
import './App.css'

function App() {
  return (
    <div className='AppTudo'>
      <Header/>
      <br /><br /><br />
      <Body/>
      <br /><br /><br />
      <Rodape/>

    </div>
  )
}

export default App