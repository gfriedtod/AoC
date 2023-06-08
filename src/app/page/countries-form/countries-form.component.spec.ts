import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesFormComponent } from './countries-form.component';

describe('CountriesFormComponent', () => {
  let component: CountriesFormComponent;
  let fixture: ComponentFixture<CountriesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesFormComponent]
    });
    fixture = TestBed.createComponent(CountriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
