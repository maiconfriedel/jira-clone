import React from "react";

import { Container, Header, Body, Tickets } from "./styles";

import TicketModel from "../../models/Ticket";

import Ticket from "../Ticket";

type PanelProps = {
  name: string;
  tickets?: TicketModel[];
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
            <Ticket
              key={ticket.title}
              title={ticket.title}
              epic={ticket.epic}
            />
          ))}
        </Tickets>
      </Body>
    </Container>
  );
}
