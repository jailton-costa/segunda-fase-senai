import { useState } from 'react'
import maior from './componetes/Maior'
import menor from './componetes/Menor'
import './App.css'

function App() {
  const [inputIdade, setInputIdade] = useState(0)
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)

  function processarIdade(){
    if(inputIdade >=18){
      //alert('maior de idade')
      setMaior(true)
      setMenor(false)
    }
    else{
      //alert('dimeno')
      setMenor(true)
      setMaior(false)
    }
  }
  return (
    <>
    <h3>inputs</h3>
    idade: <input type="text" className='fomulario'
    value={inputIdade}
    onChange={(event)=>{setInputIdade(event.target.value)}}/>
    <br />
    <button onClick={processarIdade}>processar idade</button>
    {maior && <maior />}
    {menor && <menor />}
    </>
    
  )
}

export default App