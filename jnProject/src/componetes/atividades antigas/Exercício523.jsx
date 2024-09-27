/*5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 45% 
se o valor da compra for menor que R$20,00; caso contrário, o lucro será de 30%. 
Faça um programa que entre com o valor do produto e mostre o valor de venda.*/


function Exercício523() {
  const [resultado, setInputResposta] = useState('')


  function verResultado(){
   if(respostaUsuario=='oi'){
    alert('oi')
   }
   else if (respostaUsuario=='oii'){
    alert('oii')
   }
   else if(respostaUsuario=='oiii'){
    alert('oiii')
   }
   else{
    alert('erro')
   }
  }

  return (
    <div>
      <h2>comerciante</h2>
      <br />
      <input type="text"  id='respostaUsuario' value={resultado}
       onChange={(event) => setInputResposta(event.target.value)}/>
       
      <button onClick={verResultado}>ver resultado</button>
      {resultado}

    </div>
  )
}
export default Exercício523