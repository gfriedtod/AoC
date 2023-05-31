import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageComponent } from './user-manage.component';

describe('UserManageComponent', () => {
  let component: UserManageComponent;
  let fixture: ComponentFixture<UserManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManageComponent]
    });
    fixture = TestBed.createComponent(UserManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
