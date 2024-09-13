import { useState } from 'react'
import Home from './pages/Home'
import Pag1 from './pages/Pag1'
import admMod from './pages/admMod'
import Contato from './pages/Contato'
import './App.css'

function App() {
  const [pagina, setPagina] = useState(<Contato/>)
  
  return (
    <>
      <nav>
        <button onClick={() => {setPagina(<Home/>)}}>Home</button>
        <button onClick={() => {setPagina(<Contato/>)}}>Contato</button>
        <button onClick={() => {setPagina(<Pag1/>)}}>Próxima Página</button>
        <button onClick={() => {setPagina(<admMod/>)}}>Próxima Página</button>
      </nav>
      {pagina}
    </>
  )
}

export default App
