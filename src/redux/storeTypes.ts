export interface IInitState {
  characters: ICharacter[] | [];
  episodes: IEpisode[];
  locations: ILocation[];
  menuShow: boolean;
  loading: boolean;
  info: Info | {};
  reviews: any;
}

export interface IEpisode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  name: string;
  url: string;
  id?: number;
}
export interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}
export interface ILocation {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
}

export interface Info {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
}

export interface IReview {
  name: string;
  email: string;
  age: string;
  feedback: string;
}

export type ValueType = "locations" | "episodes" | "characters";
