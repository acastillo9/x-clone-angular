import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWidgetComponent } from './profile-widget.component';

describe('ProfileWidgetComponent', () => {
  let component: ProfileWidgetComponent;
  let fixture: ComponentFixture<ProfileWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileWidgetComponent]
    });
    fixture = TestBed.createComponent(ProfileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
