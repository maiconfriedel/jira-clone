import React from "react";
import Panel from "../components/Panel/";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import Ticket from "../models/Ticket";

export default {
  title: "Panel",
  component: Panel,
  decorators: [withKnobs]
};

export const PanelWith1Ticket = () => (
  <Panel
    name={text("PanelName", "Teste com 1 Ticket")}
    tickets={object<Array<Ticket>>("Tickets", [
      {
        title: "Título 1",
        epic: { title: "Épico 1", rColor: "252", gColor: "156", bColor: "0" }
      }
    ])}
  />
);

PanelWith1Ticket.story = {
  name: "Panel with 1 ticket"
};

export const PanelWith5Tickets = () => (
  <Panel
    name={text("PanelName", "Painel com 5 Tickets")}
    tickets={object<Array<Ticket>>("Tickets", [
      {
        title: "Título 1",
        epic: { title: "Épico 1", rColor: "252", gColor: "156", bColor: "0" }
      },
      {
        title: "Título 3",
        epic: { title: "Épico 2", rColor: "0", gColor: "209", bColor: "66" }
      },
      {
        title: "Título 2",
        epic: { title: "Épico 1", rColor: "252", gColor: "156", bColor: "0" }
      },
      {
        title: "Título 4",
        epic: { title: "Épico 3", rColor: "113", gColor: "91", bColor: "193" }
      },
      {
        title: "Título 5",
        epic: { title: "Épico 2", rColor: "0", gColor: "209", bColor: "66" }
      }
    ])}
  />
);

PanelWith1Ticket.story = {
  name: "Panel with 1 ticket"
};

export const PanelWithNoTicket = () => (
  <Panel name={text("PanelName", "Teste sem Tickets")} />
);

PanelWithNoTicket.story = {
  name: "Panel with no tickets"
};
