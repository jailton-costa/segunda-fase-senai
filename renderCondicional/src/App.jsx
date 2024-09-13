import { useState } from 'react'
import Home from './pages/Home'
import Pag1 from './pages/Pag1'
import Contato from './pages/Contato'

import Login from './pages/Login'
import AdmMod from './pages/AdmMod'

import './App.css'

function App() {
  const [pagina, setPagina] = useState(<Home/>)
  
  return (
    <div >
      <nav>
        <button onClick={() => {setPagina(<Home/>)}}>Home</button>
        <button onClick={() => {setPagina(<Contato/>)}}>Contato</button>
        <button onClick={() => {setPagina(<Pag1/>)}}>Próxima Página</button>
        
        <button onClick={() => {setPagina(<AdmMod/>)}}>AdmMod</button>
        <button onClick={() => {setPagina(<Login/>)}}>Login</button>
      </nav>
      {pagina}

      
    </div>
  )
}

export default App

