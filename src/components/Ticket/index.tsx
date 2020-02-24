import React from "react";

import { Container, Title, Epic, Bottom, Effort, Responsible } from "./styles";

import EpicModel from "../../models/Epic";

type TicketProps = {
  title: string;
  epic?: EpicModel;
};

export default function Ticket({ title, epic }: TicketProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Epic r={epic?.rColor} g={epic?.gColor} b={epic?.bColor}>
        {epic?.title}
      </Epic>
      <Bottom>
        <Effort>5</Effort>
        <Responsible src="https://avatars3.githubusercontent.com/u/54713276?s=460&v=4" />
      </Bottom>
    </Container>
  );
}
