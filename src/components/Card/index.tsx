import React from "react";

type CardProps = {
  title: string;
};

import "./card.css";

export const Card: React.FC<CardProps> = ({ title }) => {
  return <div className="card">{title}</div>;
};
