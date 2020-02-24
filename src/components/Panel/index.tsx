import React, { useState, useEffect } from "react";

import { Container, Header, Body, Tickets, AddTicket } from "./styles";

import TicketModel from "../../models/Ticket";

import Ticket from "../Ticket";

type PanelProps = {
  name: string;
  tickets?: TicketModel[];
};

export default function Panel({ name, tickets }: PanelProps) {
  const [ticketsState, setTicketsState] = useState<TicketModel[] | undefined>(
    []
  );

  useEffect(() => {
    setTicketsState(tickets);
  }, [setTicketsState, tickets]);

  function handleAddTicket() {
    ticketsState
      ? setTicketsState([
          ...ticketsState,
          {
            epic: {
              rColor: "9",
              gColor: "184",
              bColor: "0",
              title: "Épico Adicionado"
            },
            title: "Ticket adicionado"
          }
        ])
      : setTicketsState([
          {
            title: "Ticket adicionado"
          }
        ]);
  }

  return (
    <Container>
      <Body>
        <Header>
          {name} <b>{ticketsState?.length}</b>
        </Header>
        <Tickets>
          {ticketsState?.map(ticket => (
            <Ticket
              key={ticket.title}
              title={ticket.title}
              epic={ticket.epic}
            />
          ))}
          <AddTicket onClick={handleAddTicket}>+</AddTicket>
        </Tickets>
      </Body>
    </Container>
  );
}
