import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetButtonComponent } from './tweet-button.component';

describe('TweetButtonComponent', () => {
  let component: TweetButtonComponent;
  let fixture: ComponentFixture<TweetButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetButtonComponent]
    });
    fixture = TestBed.createComponent(TweetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
