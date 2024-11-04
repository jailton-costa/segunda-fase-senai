import React, { useState } from 'react';
import "../LoginCadastro/LoginCadastroREACT.css";

function LoginCadastroREACT() {
  const [isMover, setIsMover] = useState(false);
  const [texto, setTexto] = useState("Fazer Login");

  function trocarTexto() {
    setTexto((prevTexto) => prevTexto === "Fazer Login" ? "Fazer Cadastro" : "Fazer Login");
  }

  function telaMover() {
    setIsMover(!isMover);
  }

  return (
    <div className="cadrastroLogin">
      <div className="container" role="main">
        
        {/* Área de Login */}
        <section className="ÁreaLoCa-containe" aria-labelledby="login-heading">
          <div className="ÁreaLoCa">
            <h1 id="login-heading">Login</h1>
            <p>Digite seus dados para fazer login</p>
            
            <label htmlFor="login-email">E-mail</label>
            <input 
              className="inputTT" 
              id="login-email" 
              type="email" 
              placeholder="Digite seu e-mail" 
              aria-required="true" 
            />
            
            <label htmlFor="login-password">Senha</label>
            <input 
              className="inputTT" 
              id="login-password" 
              type="password" 
              placeholder="Digite sua senha" 
              aria-required="true" 
            />

            <a href="#" className="Aa" aria-label="Esqueci minha senha">
              <p>Esqueci minha senha</p>
            </a>

            <div className="bts">
              <button className="btIR" type="submit" aria-label="Entrar">Entrar</button>
            </div>
          </div>
        </section>

        {/* Área de Cadastro */}
        <section className="ÁreaLoCa-container" aria-labelledby="register-heading">
          <div className="ÁreaLoCa">
            <div className="menosEspaço">
              <h1 id="register-heading">Cadastro</h1>
              <p>Digite seus dados para se cadastrar no site</p>
            </div>
            
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

            <div className="terms">
              <label>
                <input type="checkbox" aria-label="Aceitar termos de uso" />
                Eu aceito os termos de uso
              </label>
            </div>

            <div className="bts">
              <button className="btIR" type="submit" aria-label="Cadastrar">Cadastrar</button>
            </div>
          </div>
        </section>

        {/* Botão de Troca entre Login e Cadastro */}
        <div className="azul-container">
          <div className={`mover-tela ${isMover ? 'mover-right' : ''}`}>
            <div onClick={telaMover} className="btIMG" aria-live="polite">
              <img src="./imagems/IMG.png" className="imgLC" alt="Imagem de login ou cadastro"/>
              <button className="btIR" onClick={trocarTexto} aria-label={texto}>{texto}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCadastroREACT;
