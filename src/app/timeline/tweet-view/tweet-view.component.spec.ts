import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetViewComponent } from './tweet-view.component';

describe('TweetViewComponent', () => {
  let component: TweetViewComponent;
  let fixture: ComponentFixture<TweetViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetViewComponent]
    });
    fixture = TestBed.createComponent(TweetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
