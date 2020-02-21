import React from "react";
import "./App.css";

import Panel from "./components/Panel";

function App() {
  return (
    <div className="container">
      <Panel
        name="Itens Pendentes"
        tickets={["Ticket 1", "Ticket 2", "Ticket 3"]}
      />
      <Panel
        name="Em Andamento"
        tickets={[
          "Botão para atualizar lista de ordens de produção no Kyly Pesagem de Fios"
        ]}
      />
      <Panel name="Itens Finalizados" tickets={["Ticket 1", "Ticket 2"]} />
    </div>
  );
}

export default App;
