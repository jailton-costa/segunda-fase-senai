/*7.12 - Faça um algoritmo que:
 leia vários números e,
 informe quantos números entre 100 e 200 foram digitados (o 100 
e o 200 não contam),

Use input para entrar os números;
um botão para mandar ler o número digitado
um botão para mostrar os resultados*/


import React from 'react'
import { useState } from 'react'

function Numeros712 () {
  const[inputNumero, setInputNumero]= useState('')
  const[contagem]= useState('') 
  
  function MostraResultado(){
    {inputNumero}
  }
  function lerNumero(){
    if(inputNumero==100||inputNumero==200){
      alert('não')
    }else{
      alert('sim')
    }
  }
  return (
    <div>
      <h1>digite varios numeros</h1>
      <input type="Number" value={inputNumero} onChange={(event)=>setInputNumero(event.target.value)}/>
      <button onClick={lerNumero}>ler</button>
      <button onClick={MostraResultado}>resultado</button>
      <p>numeros digitados tipo 100 200 não funciona</p>
      {contagem && <p>numeros digitado no total</p>}
    </div>
  )
}

export default Numeros712