import { Component, OnInit } from "@angular/core";
import { RedditService } from "../services/reddit.service";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-display-posts",
  templateUrl: "./display-posts.component.html",
  styleUrls: ["./display-posts.component.scss"],
})
export class DisplayPostsComponent implements OnInit {
  subredditPostList: any;
  searchForm: FormGroup;

  constructor(private redditService: RedditService, private fb: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    this.redditService.getRedditPosts().subscribe((subredditData) => {
      this.subredditPostList = subredditData["data"]["children"];
      console.log(subredditData["data"]["children"]);
    });
  }

  initializeForm(): void {
    this.searchForm = this.fb.group({
      searchTerms: new FormControl("", [
        Validators.required,
        this.whiteSpaceOnlyValidator,
      ]),
    });
  }
  public whiteSpaceOnlyValidator(control: FormControl) {
    const isWhitespace = (control.value || "").trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  handleFormSubmit(): void {
    console.log(this.searchForm.controls.searchTerms.value);
    this.redditService
      .getRedditPostsBySubreddit(this.searchForm.controls.searchTerms.value)
      .subscribe((subredditData) => {
        this.subredditPostList = subredditData["data"]["children"];
        console.log(subredditData["data"]["children"]);
      });
  }

  handleClearForm(): void {}

  navigateToRedditPost(linkToPost: string): void {
    window.open('https://www.reddit.com/' + linkToPost, "_blank");

  }
}
