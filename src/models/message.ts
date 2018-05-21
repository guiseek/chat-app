export interface Message {
  user: string;
  text?: string;
  code?: object;
  image?: string;
  timestamp?: Date;
}