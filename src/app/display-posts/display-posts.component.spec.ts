import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPostsComponent } from './display-posts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RedditService } from '../services/reddit.service';
import { HttpClient } from '@angular/common/http';

describe('DisplayPostsComponent', () => {
  let component: DisplayPostsComponent;
  let fixture: ComponentFixture<DisplayPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NoopAnimationsModule,
      ],
      declarations: [DisplayPostsComponent],
      providers: [RedditService ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("search form", () => {
    it("should be invalid when search terms are only whitespace", () => {
      component.searchForm.controls.searchTerms.setValue("     ");

      expect(component.searchForm.invalid).toBeTruthy(
        "Search form should be invalid"
      );
      expect(
        component.searchForm.controls.searchTerms.hasError("whitespace")
      ).toBeTruthy("Search Term control should have the whitespace error");
    });

    
    it("should be invalid when there are no search terms", () => {
      component.searchForm.controls.searchTerms.setValue("");

      expect(component.searchForm.invalid).toBeTruthy(
        "Search form should be invalid"
      );
    });

    const testCases = [
      { searchTerm: "angular" },
      { searchTerm: " Angular" },
      { searchTerm: "Angular     " },
      { searchTerm: "   angular   " },
    ];
    testCases.forEach((tc) => {
      it("should be valid when there are search terms", () => {
        component.searchForm.controls.searchTerms.setValue(tc.searchTerm);

        expect(component.searchForm.valid).toBeTruthy(
          `Search form should be valid with search term ${tc.searchTerm}`
        );
      });
    });
  });
});
