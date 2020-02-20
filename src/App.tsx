import React from "react";
import "./App.css";

import Panel from "./components/Panel";

function App() {
  return (
    <div className="container">
      <Panel name="Painel 1" tickets={["Ticket 1", "Ticket 2", "Ticket 3"]} />
      <Panel name="Painel 2" tickets={["Ticket 1"]} />
      <Panel name="Painel 3" tickets={["Ticket 1", "Ticket 2"]} />
    </div>
  );
}

export default App;
