import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { IPost } from '../lib/types';

import { MOCK_POSTS } from './mock-posts';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient, private messageService: MessagesService) {}

  getPosts(): Observable<IPost[]> {
    this.messageService.fetch(`GET ${environment.SUBREDDIT}`);

    /* make this actually get something, look to abuse observables as much as possible */

    return of(MOCK_POSTS);
  }
}
