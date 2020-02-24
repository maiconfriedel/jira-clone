import Epic from "./Epic";

export default class Ticket {
  title: string = "";

  epic?: Epic = {
    title: "",
    bColor: "",
    gColor: "",
    rColor: ""
  };
}
