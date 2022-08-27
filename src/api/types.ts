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
