import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RedditService {
  constructor(private httpClient: HttpClient) {}

  getRedditPosts(): Observable<any> {
    return this.httpClient.get(
      "https://www.reddit.com/r/funny/new/.json?limit=100"
    );
  }

  getRedditPostsBySubreddit(searchTerm: string): Observable<any> {
    return this.httpClient
      .get(`https://www.reddit.com/r/${ searchTerm }/new/.json?limit=100`)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return of([]);
  }
}
