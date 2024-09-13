/*  Não tem garçom de cara feia: Uma empresa abriu uma linha de 
crédito para os funcionários. O valor da prestação não pode ultrapassar 
30% do salário. Faça um programa que receba o salário, o valor do 
empréstimo e o número de prestações e informe se o empréstimo pode ser 
concedido. Nenhum dos valores informados pode ser zero ou negativo.*/

import "./Sa.css"


function Exercício530() {
     // Funções para eventos
     function cadastrar () {
        console.log('Cadastrar')
    }

    function entrar () {
        console.log('Entrar')
    }

    function sobre ()  {
        console.log('Sobre Nós')
    }

    function serviços ()  {
        console.log('Serviços')
    }

    function logo ()  {
        console.log('Logomarca')
    }

    function fale ()  {
        console.log('Fale Conosco')
    }
  return (
        <div>
            {/* Navegação */}
            <div className="nave-bar">
                <div className="telaAzul">
                    <img src="inkluaTicket.png" className="imgNave-bar" alt="Logo" />
                    <div className="posiçãoTexto">
                        <input className="texto" type="text" placeholder="pesquisar" />
                        <button type="submit" className="BuscarPesquisar">
                            <h3>Buscar</h3>
                        </button>
                    </div>
                    <div className="Tes1">
                        <button className="buttonCor" onClick={cadastrar}>
                            <h3>cadastrar</h3>
                        </button>
                        <div className="espaçoCorInício"></div>
                        <button className="buttonCor" onClick={entrar}>
                            <h3>entrar</h3>
                        </button>
                    </div>
                </div>
            </div>

            {/* Carrossel */}
            {/* Adicione o carrossel aqui */}

            {/* Tela de comentar */}
            <div className="comentáriosText">
                <h3>categorias</h3>
            </div>

            <br />

            {/* Shows links */}
            <div className="comentáriosText">
                <h3>shows</h3>
            </div>

            <br /><br /><br />

            {/* Festivais */}
            <div className="comentáriosText">
                <h3>festivais</h3>
            </div>

            <br /><br />

            {/* Tela final */}
            <div className="telaFinal">
                <br /><br />
                <div className="espaçoCorFim"></div>
                <br /><br />
                <div className="textFinal">
                    <button className="corbotão" onClick={sobre}>
                        <h3>sobre nós</h3>
                    </button>
                    <br /><br />
                    <button className="corbotão" onClick={serviços}>
                        <h3>serviços</h3>
                    </button>
                    <br /><br />
                    <button className="corbotão" onClick={logo}>
                        <h3>logomarca</h3>
                    </button>
                    <br /><br />
                    <button className="corbotão" onClick={fale}>
                        <h3>fale conosco</h3>
                    </button>
                </div>
                <br />
                <br /><br />
                <div className="espaçoCorFim"></div>
                <br /><br />
                <div className="final">
                    <img className="imgFim" src="inkluaTicket.png" alt="Logo" />
                    <div className="corTextFinal">
                        <h3>
                            MEDIAÇÃO DE ENTRETENIMENTO LTDA - CNPJ: 0.000.000/0000-00 - Rod vicent walter bernardes, 8907 - Florianópolis, SC
                        </h3>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Exercício530