import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPresentComponent } from './card-present.component';

describe('CardPresentComponent', () => {
  let component: CardPresentComponent;
  let fixture: ComponentFixture<CardPresentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPresentComponent]
    });
    fixture = TestBed.createComponent(CardPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
