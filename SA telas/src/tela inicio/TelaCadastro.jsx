import React from 'react'
import './TelaCadastro.css'

function telaCadastro() {
  return (
    <div>
      <div className='tudoCadastro'>
        <div className="parteAzul">
          <img className='imagemscadastrar' src="./imagems/IMG.png" />
          <img className='imagemscadastrar' src="./imagems/image.png" />
        </div>
        <div className="parteBranca">
          <div className="cadastrar">
            <h1 className='Cadastre-se'>Cadastre-se</h1>
            <h3>Digite seus dados abaixo</h3>
          </div>
          <div className="tudoInputsCheckBT">

            <div className="partesInputsUmDois">
              <div className="parteUmInpus">
                <div className="inputsLocal">
                  <label>Nome de usuário
                    <input type="text" className='tamanhoInputs' placeholder='Digite seu nome de Usuário' />
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>CPF
                    <input type="Number" className='tamanhoInputs' placeholder='Digite seu CPF' />
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>Endereço
                    <input type="text" className='tamanhoInputs' placeholder='Digite seu Endereço' />
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>Telefone
                    <input type="Number" className='tamanhoInputs' placeholder='Digite seu telefone' />
                  </label>
                </div>
              </div>
              <div className="parteDoisInpus">
                <div className="inputsLocal">
                  <label>E-mail
                    <input type="email" className='tamanhoInputs' placeholder='Digite seu E-mail' />
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>Senha
                    <input type="password" className='tamanhoInputs' placeholder='Digite sua senha' />
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>Confirme sua senha
                    <input type="password" className='tamanhoInputs' placeholder='Digite sua senha novamente' />
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>Tipo de deficiência <img src="./imagems/img logo.png" className="imgTipo" />
                    <input type="text" className='tamanhoInputs' placeholder='Não especificado' />
                  </label>
                </div>
              </div>
            </div>

            <div className="checkboxPCD">
              <label className='labelCheckbox'>
                <input type="checkbox"  className='inputsCheckbox'/>Pessoa PCD
                <img src="./imagems/img logo.png" className="imgPCD" />
              </label>
              <label className='labelCheckbox'>
                <input type="checkbox" className='inputsCheckbox'/>Eu li e aceito os termos de uso
              </label>
              <label className='labelCheckbox'>
                ja possui uma conta ?<a> fazer login </a>
              </label>
            </div>
            <div className="btLocal">
              <button className='btCadastrar'>Cadastrar</button><br />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default telaCadastro
