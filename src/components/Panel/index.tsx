import React from "react";
import { Card } from "../Card";

type PanelProps = {
  title: string;
  cards?: string[];
};

import "./panel.css";

export const Panel: React.FC<PanelProps> = ({ title, cards }) => {
  return (
    <div className="panel-container">
      <div className="panel-header">
        <h1 className="title">{title}</h1>
      </div>
      {cards?.map((card) => {
        return (
          <Card
            title={card}
            id="GK-001"
            epic="Épico 1"
            storyPoints={13}
            key={card}
          />
        );
      })}
    </div>
  );
};
