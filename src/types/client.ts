export type Client = {
  id: string;
  name: string;
  email: string;
  budget: number;
  status: "prospect" | "negotiation" | "closed";
};
