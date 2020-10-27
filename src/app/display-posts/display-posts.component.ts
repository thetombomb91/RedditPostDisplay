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
  subredditPostListFull: any;
  subredditPostListTen: any;
  searchForm: FormGroup;
  searchInProgress: boolean;
  currentLastIndex: number;

  private readonly maximumPostIndex = 100;

  private readonly resetCurrentLastIndex = 0;

  constructor(private redditService: RedditService, private fb: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    this.searchForm.controls.searchTerms.setValue('funny');
    this.redditService
      .getRedditPostsBySubreddit(this.searchForm.controls.searchTerms.value)
      .subscribe((subredditData) => {
        this.populatePageWithRedditData(subredditData);
      });
  }

  private populatePageWithRedditData(subredditData: any) {
    this.subredditPostListFull = subredditData["data"]["children"];
    this.subredditPostListTen = this.subredditPostListFull.slice(0, 10);
    this.currentLastIndex = 10;
    this.searchInProgress = false;
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
    this.searchInProgress = true;
    this.subredditPostListFull = [];
    this.subredditPostListTen = [];
    this.redditService
      .getRedditPostsBySubreddit(this.searchForm.controls.searchTerms.value)
      .subscribe((subredditData) => {
        this.populatePageWithRedditData(subredditData);
      });
  }

  handleClearForm(): void {
    this.subredditPostListFull = [];
    this.subredditPostListTen = [];
  }

  navigateToRedditPost(linkToPost: string): void {
    window.open("https://www.reddit.com/" + linkToPost, "_blank");
  }

  goToNextPage() {
    if(this.currentLastIndex === this.maximumPostIndex) {
      this.currentLastIndex = this.resetCurrentLastIndex;
    }

    this.subredditPostListTen = this.subredditPostListFull.slice(
      this.currentLastIndex,
      this.currentLastIndex + 10
    );
    this.currentLastIndex += 10;

    console.log(this.currentLastIndex);
  }

  goToPreviousPage() {
    this.subredditPostListTen = this.subredditPostListFull.slice(
      this.currentLastIndex - 20,
      this.currentLastIndex - 10,
    );
    this.currentLastIndex -= 10;
    console.log(this.currentLastIndex);
  }
}
