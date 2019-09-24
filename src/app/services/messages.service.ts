import { Injectable } from '@angular/core';
import { IMessage } from '../lib/types';
import { TMessageNamespace } from '../lib/constants';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: Map<number, IMessage> = new Map();

  private uuid() {
    return Math.floor(Date.now() * Math.random() * 10);
  }

  private add(message: IMessage) {
    this.messages.set(this.uuid(), message);
  }

  fetch(message: string) {
    this.add({ namespace: 'FETCH', message });
  }

  debug(message: string) {
    this.add({ namespace: 'DEBUG', message });
  }

  notification(message: string) {
    this.add({ namespace: 'NOTIFICATION', message });
  }

  error(message: string) {
    this.add({ namespace: 'ERROR', message });
  }

  reset() {
    this.messages.clear();
  }

  clear(key: number) {
    this.messages.delete(key);
  }
}
