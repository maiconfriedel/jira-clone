import React from "react";

// import { Container } from './styles';

import Ticket from "../Ticket";

type PanelProps = {
  name: string;
  tickets?: string[];
};

export default function Panel({ name, tickets }: PanelProps) {
  return (
    <div>
      <div>
        {name} <b>{tickets?.length}</b>
      </div>
      {tickets?.map(ticket => (
        <Ticket title={ticket} key={ticket} />
      ))}
    </div>
  );
}
