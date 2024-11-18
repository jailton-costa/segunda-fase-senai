import React from 'react'
import './TelaLogin.css'

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
            <h1 className='Cadastre-se'>Login de usuário</h1>
            <h3>Digite seus dados abaixo</h3>
          </div>
          <div className="tudoInputsCheckBT">

            <div className="partesInputsUmDois">
              <div className="parteUmInpus">
                <div className="inputsLocal">
                  Nome de usuário<input type="text" className='tamanhoInputs' placeholder='Digite seu nome de Usuário' />
                  <div className="inputsLocal">
                    E-mail<input type="email" className='tamanhoInputs' placeholder='Digite seu E-mail' />
                  </div>
                  <div className="inputsLocal">
                    Senha<input type="password" className='tamanhoInputs' placeholder='Digite sua senha' />
                  </div>
                </div>
              </div>
            </div>

            <div className="checkboxPCD">
              <label>
                não possui uma conta ?<a> cadastre-se</a>
              </label>
            </div>
            <div className="btLocal">
              <button className='btCadastrar'>Entrar</button><br />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default telaCadastro
