import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoPageComponent } from './chrono-page.component';

describe('ChronoPageComponent', () => {
  let component: ChronoPageComponent;
  let fixture: ComponentFixture<ChronoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChronoPageComponent]
    });
    fixture = TestBed.createComponent(ChronoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
