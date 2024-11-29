import React, { useState } from 'react';
import './TelaCadastro.css';

function TelaCadastro() {
  const [verSenha, setVerSenha] = useState(false);
  const [verConfirmarSenha, setVerConfirmarSenha] = useState(false);

  function alternarVerSenha() {
    setVerSenha((prevState) => !prevState);
  }

  function alternarConfirmarVerSenha () {
    setVerConfirmarSenha((prevState) => !prevState);
  }

  return (
    <div>
      <div className='tudoCadastro'>
        <div className="parteAzul">
          <img src="./imagems/seta .png" className="btVoltarIMG" alt="Voltar" />
          <img className='imagemscadastrar' src="./imagems/IMG.png" alt="Imagem Cadastro" />
          <img className='imagemscadastrar' src="./imagems/image.png" alt="Imagem Cadastro" />
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
                    <input type="number" className='tamanhoInputs' placeholder='Digite seu CPF' />
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>Endereço
                    <input type="text" className='tamanhoInputs' placeholder='Digite seu Endereço' />
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>Telefone
                    <input type="number" className='tamanhoInputs' placeholder='Digite seu telefone' />
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
                    <input
                      type={verSenha ? "text" : "password"}
                      className='tamanhoInputs'
                      placeholder='Digite sua senha'
                    />
                    <button className='btSenha' onClick={alternarVerSenha}>
                      {verSenha ?  <img src="./imagems/olho off.png"className='olhos'/> : <img src="./imagems/olho.png"className='olhos'/>} 
                    </button>
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>Confirme sua senha
                    <input
                      type={verConfirmarSenha ? "text" : "password"}
                      className='tamanhoInputs'
                      placeholder='Digite sua senha novamente'
                    />
                    <button className='btSenha' onClick={alternarConfirmarVerSenha}>
                      {verConfirmarSenha ?  <img src="./imagems/olho off.png"className='olhos'/> :  <img src="./imagems/olho.png"className='olhos'/>}
                    </button>
                  </label>
                </div>
                <div className="inputsLocal">
                  <label>Tipo de deficiência <img src="./imagems/img logo.png" className="imgTipo" alt="Logo Tipo" />
                    <input type="text" className='tamanhoInputs' placeholder='Não especificado' />
                  </label>
                </div>
              </div>
            </div>

            <div className="checkboxPCD">
              <label className='labelCheckbox'>
                <input type="checkbox" className='inputsCheckbox' />Você é Pessoa PCD
                <img src="./imagems/img logo.png" className="imgPCD" alt="Logo PCD" />
              </label>
              <label className='labelCheckbox'>
                <input type="checkbox" className='inputsCheckbox' />Eu li e aceito os termos de uso
              </label>
              <label className='labelCheckbox'>
                Já possui uma conta? <a href="#">Fazer login</a>
              </label>
            </div>
            <div className="btLocal">
              <button className='btCadastrar'>Cadastrar</button><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaCadastro;
