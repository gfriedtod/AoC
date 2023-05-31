import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProComponent } from './card-pro.component';

describe('CardProComponent', () => {
  let component: CardProComponent;
  let fixture: ComponentFixture<CardProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProComponent]
    });
    fixture = TestBed.createComponent(CardProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
