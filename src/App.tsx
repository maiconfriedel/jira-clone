import React from "react";
import "./App.css";

import Panel from "./components/Panel";

function App() {
  return (
    <div>
      <Panel name="Painel 1" tickets={["Ticket 1", "Ticket 2", "Ticket 3"]} />
    </div>
  );
}

export default App;
