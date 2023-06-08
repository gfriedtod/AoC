import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrieManagementComponent } from './countrie-management.component';

describe('CountrieManagementComponent', () => {
  let component: CountrieManagementComponent;
  let fixture: ComponentFixture<CountrieManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrieManagementComponent]
    });
    fixture = TestBed.createComponent(CountrieManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
