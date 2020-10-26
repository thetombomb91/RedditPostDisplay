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
});
