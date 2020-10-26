import { TestBed, getTestBed } from '@angular/core/testing';

import { RedditService } from './reddit.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RedditService', () => {
  let injector: TestBed;
  let service: RedditService;
  let httpMock: HttpTestingController;

  let apiBaseUrl = 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RedditService],
    });

    injector = getTestBed();
    service = injector.get(RedditService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: RedditService = TestBed.get(RedditService);
    expect(service).toBeTruthy();
  });

  it('getRedditPostsBySubreddit should call GET with search terms', () => {
    service.getRedditPostsBySubreddit("SearchTerm").subscribe();

    const req = httpMock.expectOne('https://www.reddit.com/r/SearchTerm/new/.json?limit=100');
    expect(req.request.method).toBe('GET');
  });

});
