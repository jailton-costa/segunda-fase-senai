import React, { useState } from "react";

function App() {
  // Estado para controlar a visibilidade do card
  const [showCard, setShowCard] = useState(false);

  // Função para alternar a visibilidade do card
  const toggleCard = () => {
    setShowCard((prevShowCard) => !prevShowCard);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Botão para exibir ou esconder o card */}
      <button onClick={toggleCard} style={{ padding: "10px 20px", fontSize: "16px" }}>
        {showCard ? "Esconder Card" : "Mostrar Card"}
      </button>

      {/* Condicional para renderizar o card */}
      {showCard && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "300px",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <h3>Meu Card</h3>
          <p>Este é um exemplo de card exibido na tela!</p>
        </div>
      )}
    </div>
  );
}

export default App;

// import "./App.css"
// import React from "react"
// import TelaUM from "./tela inicio/carrossel/TelaUM"
// import NavbarB from "./tela inicio/carrossel//NavbarB"
// import Rodape from "./tela inicio/carrossel/Rodape"

// function App() {
//   return (
//     <div>
//       <NavbarB />
//       <TelaUM />
//       <Rodape />
//     </div>
//   )
// }

// export default App