import React from 'react'
import '../tela inicio/NavbarB.css'

function NavbarB() {
    return (
        <div>
            <div className="telaUm">
                <div className="tela1">
                    <img src="./imagems/inkluaTicket.png" className="imagem"/>
                        <div className="Tes1">
                            <button className="buttonCor" onclick="cadastrar()"><h3>cadastrar</h3></button>
                            <div className="espaçoCorInício"></div>
                            <button className="buttonCor" onclick="entrar()"><h3>entrar</h3></button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarB
