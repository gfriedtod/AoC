import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesPageComponent } from './countries-page.component';

describe('CountriesPageComponent', () => {
  let component: CountriesPageComponent;
  let fixture: ComponentFixture<CountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesPageComponent]
    });
    fixture = TestBed.createComponent(CountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
