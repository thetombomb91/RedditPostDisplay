import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private httpClient: HttpClient) { }

  getRedditPosts(): Observable<any> {
    return this.httpClient.get('https://www.reddit.com/r/funny/new/.json?limit=5');
  }

  getRedditPostsBySubreddit(searchTerm: string): Observable<any> {
    return this.httpClient.get('https://www.reddit.com/r/funny/new/.json?limit=5');
  }
}
