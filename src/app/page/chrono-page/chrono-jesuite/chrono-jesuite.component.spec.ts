import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoJesuiteComponent } from './chrono-jesuite.component';

describe('ChronoJesuiteComponent', () => {
  let component: ChronoJesuiteComponent;
  let fixture: ComponentFixture<ChronoJesuiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChronoJesuiteComponent]
    });
    fixture = TestBed.createComponent(ChronoJesuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
