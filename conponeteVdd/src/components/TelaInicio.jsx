import './telaInicio.css'; // Importa o CSS

const TelaInicio = () => {
    // Funções para eventos
    const cadastrar = () => {
        console.log('Cadastrar');
    };

    const entrar = () => {
        console.log('Entrar');
    };

    const sobre = () => {
        console.log('Sobre Nós');
    };

    const serviços = () => {
        console.log('Serviços');
    };

    const logo = () => {
        console.log('Logomarca');
    };

    const fale = () => {
        console.log('Fale Conosco');
    };

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
    );
};

export default TelaInicio;
