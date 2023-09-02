import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetButtonsComponent } from './tweet-buttons.component';

describe('TweetButtonsComponent', () => {
  let component: TweetButtonsComponent;
  let fixture: ComponentFixture<TweetButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetButtonsComponent]
    });
    fixture = TestBed.createComponent(TweetButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
