import React from "react";
import "./App.css";

import Panel from "./components/Panel";

function App() {
  return (
    <div className="container">
      <Panel
        name="Itens Pendentes"
        tickets={[
          {
            title: "Ticket 1",
            epic: {
              title: "Épico Número Um",
              rColor: "255",
              gColor: "139",
              bColor: "0"
            }
          },
          {
            title: "Ticket 2",
            epic: {
              title: "Épico Número Um",
              rColor: "255",
              gColor: "139",
              bColor: "0"
            }
          }
        ]}
      />
      <Panel
        name="Em Andamento"
        tickets={[
          {
            title:
              "A pesagem de fios não deve ser liberada se não houver Ordem de Produção selecionada",
            epic: {
              title: "Integração Fio Puro",
              rColor: "41",
              gColor: "132",
              bColor: "194"
            }
          }
        ]}
      />
      <Panel name="Itens Finalizados" />
    </div>
  );
}

export default App;
