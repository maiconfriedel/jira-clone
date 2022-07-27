import { Header } from "./components/Header";
import { Panel } from "./components/Panel";

function App() {
  return (
    <div className="container">
      <Header selectedOption="projects" />
      <div className="sprint-data">
        <h1>GK Back Office Sprint 13</h1>
      </div>
      <div className="panels">
        <Panel
          title="TO DO"
          cards={[
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
          ]}
        />
        <Panel
          title="BLOCKED"
          cards={["Card 1", "Card 1", "Card 1", "Card 1", "Card 1"]}
        />
        <Panel
          title="IN PROGRESS"
          cards={[
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
            "Card 1",
          ]}
        />
        <Panel
          title="IN REVIEW"
          cards={["Card 1", "Card 1", "Card 1", "Card 1", "Card 1", "Card 1"]}
        />
        <Panel title="DONE" cards={["Card 1"]} />
      </div>
    </div>
  );
}

export default App;
