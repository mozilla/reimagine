export interface Talk {
  time: string;
  name: string;
  content: string;
  url?: string;
  inviteOnly?: boolean;
  ticketsAvailableSoon?: boolean;
}

export interface Event {
  day: string;
  date: string;
  talks: Talk[];
}
