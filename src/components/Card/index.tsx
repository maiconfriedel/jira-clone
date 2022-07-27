import React from "react";

type CardProps = {
  id: string;
  title: string;
  epic?: string;
  storyPoints?: number;
};

import "./card.css";

export const Card: React.FC<CardProps> = ({ id, title, epic, storyPoints }) => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <span className="card-epic">{epic}</span>
      <div className="card-data">
        <span className="card-story-points">{storyPoints}</span>
        <span className="card-id">{id}</span>
      </div>
    </div>
  );
};
