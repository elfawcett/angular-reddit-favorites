import { TMessageNamespace } from './constants';

export interface IPost {
  name: string;
}

export interface IMessage {
  namespace: TMessageNamespace;
  message: string;
}
