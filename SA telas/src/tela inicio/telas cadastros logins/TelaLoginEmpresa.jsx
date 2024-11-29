import React, { useState } from 'react';
import './TelaLoginEmpresa.css';

function TelaLogin() {
  const [verSenha, setVerSenha] = useState(false);

  function alternarConfirmarVerSenha() {
    setVerSenha((prevState) => !prevState);
  }

  return (
    <div>
      <div className='tudoCadastro'>
        <div className="parteAzul">
          <img src="./imagems/seta .png" className="btVoltarIMG" alt="Voltar" />
          <img className='imagemscadastrar' src="./imagems/IMG.png" alt="Imagem Login" />
          <img className='imagemscadastrar' src="./imagems/image.png" alt="Imagem Login" />
        </div>
        <div className="parteBranca">
          <div className="cadastrar">
            <h1 className='Cadastre-se'>Login Empresa</h1>
            <h3>Digite seus dados abaixo</h3>
          </div>
          <div className="tudoInputsCheckBT">
            <div className="partesInputsUmDois">
              <div className="parteUmInpus">
                <div className="inputsLocal">
                  <label>E-mail
                    <input type="email" className='tamanhoInputs' placeholder='Digite seu E-mail' />
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>Senha
                    <input
                      type={verSenha ? "text" : "password"}
                      className='tamanhoInputs'
                      placeholder='Digite sua senha'
                    />
                    <button className='btSenha' onClick={alternarConfirmarVerSenha}>
                      {verSenha ? "⨂" : "⨀"}
                    </button>
                  </label>
                </div>
              </div>
            </div>

            <div className="checkboxPCD">
              <label>
                Não possui uma conta? <a href="#">Cadastre-se</a>
              </label>
            </div>
            <div className="btLocal">
              <button className='btCadastrar'>Entrar</button><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaLogin;
