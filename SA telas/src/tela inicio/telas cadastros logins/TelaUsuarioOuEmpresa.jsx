import React from 'react'
import './TelaUsuarioOuEmpresa.css'

function TelaUsuarioOuEmpresa() {
    return (
            <div className="tudoUsuarioOuEmpresa">

                <div className="tudoBtsImgsTxt">
                    <div className="posiImg">
                        <img src="./imagems/seta .png" className="imagemSeta" />
                        <img src="./imagems/inkluaTicket.png" className="imagemInklua" />
                    </div>
                    <div className="textos">
                        <h1>Cadastre-se!</h1>
                        <h3>Cadastre-se como usuário para avaliar eventos ou como empresa para organizá-los.</h3>
                    </div>
                    <div className="posiBtImg">
                        <div className="btsImgs">
                            <div className="imagemDiv">
                                <img src="./imagems/img empresa.png" className="imagemEmpre" />
                            </div>
                            <button className='botaoImg'>Empresa</button>
                        </div>
                        <img src="./imagems/image.png" className="imagemPcds" />
                        <div className="btsImgs">
                            <div className="imagemDiv">
                                <img src="./imagems/img usuario.png" className="imagemUsuar" />
                            </div>
                            <button className='botaoImg'>Usuário</button>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default TelaUsuarioOuEmpresa
