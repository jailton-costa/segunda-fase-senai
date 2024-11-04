import React from 'react';
import "../LoginCadastro/LoginREACT.css";

function LoginREACT() {
  return (
    <div className="cadrastroLogin">
      <div className="container" role="main">
        
        {/* Área de Login */}
        <section className="ÁreaLoCa-containe" aria-labelledby="login-heading">
          <div className="ÁreaLoCa">
            <div className='espaçoLOGIN'></div>
            <h1 id="login-heading">Login</h1>
            <p>Insira seus dados para efetuar o login</p><br />
            
            <label htmlFor="login-email">E-mail</label>
            <input 
              className="inputTtLO" 
              id="login-email" 
              type="email" 
              placeholder="Digite seu e-mail" 
              aria-required="true" 
            /> <br />
            
            <label htmlFor="login-password">Senha</label>
            <input 
              className="inputTtLO" 
              id="login-password" 
              type="password" 
              placeholder="Digite sua senha" 
              aria-required="true" 
            /> <br />

            <div className="bts">
              <button className="btIR" type="submit" aria-label="Entrar">Entrar</button>
            </div>
          </div>
        </section>

        {/* Botão de Troca entre Login e Cadastro */}
        <div className="azul-container">
          <div className='mover-tela'>
            <div className="btIMG" aria-live="polite">
              <img src="./imagems/IMG.png" className="imgLC" alt="Imagem de login ou cadastro"/>
              <button className="btIR" >fazer cadastro ?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginREACT;
