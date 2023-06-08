import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrieMakerComponent } from './countrie-maker.component';

describe('CountrieMakerComponent', () => {
  let component: CountrieMakerComponent;
  let fixture: ComponentFixture<CountrieMakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrieMakerComponent]
    });
    fixture = TestBed.createComponent(CountrieMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
