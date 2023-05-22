import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesPresentationsComponent } from './countries-presentations.component';

describe('CountriesPresentationsComponent', () => {
  let component: CountriesPresentationsComponent;
  let fixture: ComponentFixture<CountriesPresentationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesPresentationsComponent]
    });
    fixture = TestBed.createComponent(CountriesPresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
