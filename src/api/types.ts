export interface IUser {
  avatar: IAvatar;
  name: string;
}

export interface IAvatar {
  accessoires: string[];
  backgroundColor: string;
  eyes: string[];
  eyebrows: string[];
  mouth: string[];
  flip: boolean;
  url: string;
}

export interface IEndpointUserLists {
  id: string;
  title: string;
  create_by: string;
  create_byId: string;
  list: IEndpointUserList[];
}

export interface IEndpointUserList {
  adult: boolean;
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  id: string;
  imdb_id: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: string;
}
