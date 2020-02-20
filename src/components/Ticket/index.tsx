import React from "react";

// import { Container } from './styles';

type TicketProps = {
  title: string;
};

export default function Ticket({ title }: TicketProps) {
  return <div>{title}</div>;
}
