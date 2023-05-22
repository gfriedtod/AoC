import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectPresentationComponent } from './card-project-presentation.component';

describe('CardProjectPresentationComponent', () => {
  let component: CardProjectPresentationComponent;
  let fixture: ComponentFixture<CardProjectPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProjectPresentationComponent]
    });
    fixture = TestBed.createComponent(CardProjectPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
