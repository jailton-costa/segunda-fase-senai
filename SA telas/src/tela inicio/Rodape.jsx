import React from 'react'
import'../tela inicio/Rodape.css'

function Rodape() {
    return (
        <div>
            <div class="telaFinal">
                <br />
                <div class="espaçoCorFim"></div>
                <br />
                <div class="textFinal">
                    <button class="corbotão" onclick="sobre()"><h3>sobre nós</h3></button>
                    <br />
                    <button class="corbotão" onclick="serviços()"><h3>serviços</h3></button>
                    <br />
                    <button class="corbotão" onclick="logo()"><h3>logomarca</h3></button>
                    <br />
                    <button class="corbotão" onclick="fale()"><h3>fale conosco</h3></button>
                </div>
                <br />
                <div class="espaçoCorFim"></div>
                <br />
                <div class="final">
                    <img class="imgFim" src="./imagems/inkluaTicket.png" />
                    <div class="corTextFinal">
                        <h4>MEDIAÇÃO DE ENTRETENIMENTO LTDA - CNPJ:  0.000.000/0000-00 - Rod vicent walter bernardes , 8907 - Florianópolis, SC </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rodape
