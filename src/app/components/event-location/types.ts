export interface EventInfo {
  venueName: string;
  venueDescription: string;
  venueLocation: string;
  directions: Direction[];
}

interface Direction {
  title?: string;
  content?: string;
}
