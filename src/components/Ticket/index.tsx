import React from "react";

import { Container, Title, Bottom, Effort, Responsible } from "./styles";

type TicketProps = {
  title: string;
};

export default function Ticket({ title }: TicketProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Bottom>
        <Effort>5</Effort>
        <Responsible src="https://avatars3.githubusercontent.com/u/54713276?s=460&v=4" />
      </Bottom>
    </Container>
  );
}
