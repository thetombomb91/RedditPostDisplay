import { Component, OnInit } from '@angular/core';
import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.scss']
})
export class DisplayPostsComponent implements OnInit {
  subredditPostList: any;

  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.redditService.getRedditPosts().subscribe((subredditData) => {
      this.subredditPostList = subredditData['data']['children'];
      console.log(subredditData['data']['children']);
    })
  }

}
