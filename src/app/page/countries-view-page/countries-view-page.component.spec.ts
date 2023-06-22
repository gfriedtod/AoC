import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesViewPageComponent } from './countries-view-page.component';

describe('CountriesViewPageComponent', () => {
  let component: CountriesViewPageComponent;
  let fixture: ComponentFixture<CountriesViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesViewPageComponent]
    });
    fixture = TestBed.createComponent(CountriesViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
