import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePresentComponent } from './profile-present.component';

describe('ProfilePresentComponent', () => {
  let component: ProfilePresentComponent;
  let fixture: ComponentFixture<ProfilePresentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePresentComponent]
    });
    fixture = TestBed.createComponent(ProfilePresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
