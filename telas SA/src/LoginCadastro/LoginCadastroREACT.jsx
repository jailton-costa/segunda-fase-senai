import React, { useState } from 'react'
import "../LoginCadastro/LoginCadastroREACT.css"

function LoginCadastroREACT() {
  const [isMover, setIsMover] = useState(false);

  function telaMover() {
    setIsMover(!isMover)
  }
  return (
    <body>
      <div className="cadrastroLogin">
        <div className='container'>
          {/* <!-- Área de Login --> */}
          <div className="ÁreaLoCa-containe">
            <div className="ÁreaLoCa"><br />
              <h1>Login</h1>
              <h5>digite seus dados para fazer login</h5><br />
              <input type="email" placeholder="Email" /><br />
              <input type="password" placeholder="Senha" /><br />
              <a className="Aa"><h5>Esqueci minha senha</h5></a>
              <div className="bts">
                <button>Entrar</button>
              </div>
            </div>
          </div>
          {/* <!-- Área de Cadastro --> */}
          <div className="ÁreaLoCa-container">
            <div className="ÁreaLoCa">
              <h1>Cadastro</h1>
              <h5>Digite seus dados para se cadastrar no site</h5>
              <input type="text" placeholder="Digite seu nome" />
              <input type="email" placeholder="Digite seu E-mail" />
              <input type="password" placeholder="Digite sua senha" />
              <input type="password" placeholder="Confirme sua senha" />
              <h5>eu aceito os termos de uso<div className="tm"><input type="checkbox" /></div></h5>
              <div className="bts">
                <button>cadastrar</button>
              </div>
            </div>
          </div>
          {/* <!-- Área de Login / Área de Cadastro --> */ }
          <div className="azul-container">
          <div className={`mover-tela ${isMover ? 'mover-right' : ''}`}>
              <img src="./imagems/IMG.png" className="imgLC" />
              <button className="fantasma" onClick={telaMover}>aperte para cadastra ou fazer login</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
export default LoginCadastroREACT
