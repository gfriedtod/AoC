import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesManageCardComponent } from './countries-manage-card.component';

describe('CountriesManageCardComponent', () => {
  let component: CountriesManageCardComponent;
  let fixture: ComponentFixture<CountriesManageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesManageCardComponent]
    });
    fixture = TestBed.createComponent(CountriesManageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
