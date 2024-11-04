import React from 'react'
import "./CadastroREACT.css"

function CadastroREACT() {
  return (
    <div className="cadrastroLogin">
      <div className="container" role="main">

        {/* Área de Cadastro */}
        <section className="ÁreaLoCa-container" aria-labelledby="register-heading">
          <div className="ÁreaLoCa">
            <div className="menosEspaço">
              <h1 className='MenosEspaço' id="register-heading">Cadastro</h1>
              <p className='texto'>Insira seus dados para realizar o cadastro</p>
            </div><br />
            
            <label htmlFor="register-username">Nome de usuário</label>
            <input 
              className="inputTT" 
              id="register-username" 
              type="text" 
              placeholder="Digite seu nome de usuário" 
              aria-required="true" 
            />

            <label htmlFor="register-email">E-mail</label>
            <input 
              className="inputTT" 
              id="register-email" 
              type="email" 
              placeholder="Digite seu e-mail" 
              aria-required="true" 
            />

            <label htmlFor="register-password">Senha</label>
            <input 
              className="inputTT" 
              id="register-password" 
              type="password" 
              placeholder="Digite sua senha" 
              aria-required="true" 
            />

            <label htmlFor="register-confirm-password">Confirme sua senha</label>
            <input 
              className="inputTT" 
              id="register-confirm-password" 
              type="password" 
              placeholder="Confirme sua senha" 
              aria-required="true" 
            />

            <div className="terms"><br />
              <label>
                Eu aceito os termos de uso
                <input type="checkbox" aria-label="Aceitar termos de uso" />
              </label>
            </div><br />

            <div className="bts">
              <button className="btIR" type="submit" aria-label="Cadastrar">Cadastrar</button>
            </div>
          </div>
        </section>

        {/* Botão de Troca entre Login e Cadastro */}
        <div className="azul-container">
            <div className="btIMG" aria-live="polite">
              <img src="./imagems/IMG.png" className="imgLC" alt="Imagem de login ou cadastro"/>
              <button className="btIR" >fazer login ?</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroREACT
