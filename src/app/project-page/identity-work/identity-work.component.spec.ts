import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityWorkComponent } from './identity-work.component';

describe('IdentityWorkComponent', () => {
  let component: IdentityWorkComponent;
  let fixture: ComponentFixture<IdentityWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityWorkComponent]
    });
    fixture = TestBed.createComponent(IdentityWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
