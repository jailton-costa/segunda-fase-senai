/*7.13 - Faça um algoritmo que leia dois números e mostre todos os números 
pares contidos entre eles. 
Exemplo: 
 - Limite inferior: 3 
 - Limite superior: 12 
 - Saída: 4 6 8 10*/

import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'

function Exercícios713() {
    const[inputNumero,setInputNumero]=useState
    const[inputNumero2,setInputNumero2]=useState

    function inputNumero(){

    }function inputNumero2(){
        
    }
  return (
    <div>
        <Navbar/>
      <h3>digite dois numeros, para ver se eles são pares</h3>
      <input type="Number" onChange={(event)=>setInputNumero(event.target.value)}/><br />
      <input type="Number" onChange={(event)=>setInputNumero2(event.target.value)}/>
      <button onClick={inputNumero&&inputNumero2}>ver resultados</button>
      
    </div>
  )
}

export default Exercícios713
