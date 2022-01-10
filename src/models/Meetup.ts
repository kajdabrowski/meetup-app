export interface Meetup {
  id: number;
  title: string;
  date: string; //yyyy-mm-dd
  description: string;
  comments: string[]; //var tidigare en tom arr. Kan bytas till any[].
  rating: number;
  attending: boolean; //Added for checkbox in card component
}
