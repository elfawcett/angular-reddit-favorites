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
    /* consider a timeout to autoclear messages after a delay */
  }

  clear(key?: number) {
    if (key) {
      this.messagesService.clear(key);
    } else {
      this.messagesService.reset();
    }
  }
}
