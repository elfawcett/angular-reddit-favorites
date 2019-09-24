import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  constructor(public messagesService: MessagesService) {}

  ngOnInit() {
    console.log(this.messagesService.messages, this.messagesService.messages.size);

    /* Adds a fake message for testing */
    this.messagesService.error('Fake error');
    this.messagesService.error('Fake error');
    this.messagesService.error('Fake error');
    this.messagesService.debug('Fake debug');
    this.messagesService.debug('Fake debug');
    this.messagesService.debug('Fake debug');
    this.messagesService.notification('Fake notify');
    this.messagesService.fetch('Fake fetch');
  }

  clear(key?: number) {
    if (key) {
      this.messagesService.clear(key);
    } else {
      this.messagesService.reset();
    }
  }
}
