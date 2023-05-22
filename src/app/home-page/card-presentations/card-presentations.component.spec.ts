import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPresentationsComponent } from './card-presentations.component';

describe('CardPresentationsComponent', () => {
  let component: CardPresentationsComponent;
  let fixture: ComponentFixture<CardPresentationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPresentationsComponent]
    });
    fixture = TestBed.createComponent(CardPresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
