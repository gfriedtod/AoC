import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoFormComponent } from './chrono-form.component';

describe('ChronoFormComponent', () => {
  let component: ChronoFormComponent;
  let fixture: ComponentFixture<ChronoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChronoFormComponent]
    });
    fixture = TestBed.createComponent(ChronoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
