import React from "react";

import { Container, Header, Body, Tickets } from "./styles";

import Ticket from "../Ticket";

type PanelProps = {
  name: string;
  tickets?: string[];
};

export default function Panel({ name, tickets }: PanelProps) {
  return (
    <Container>
      <Body>
        <Header>
          {name} <b>{tickets?.length}</b>
        </Header>
        <Tickets>
          {tickets?.map(ticket => (
            <Ticket title={ticket} key={ticket} />
          ))}
        </Tickets>
      </Body>
    </Container>
  );
}
