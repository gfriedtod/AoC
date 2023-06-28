import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontComponent } from './dont.component';

describe('DontComponent', () => {
  let component: DontComponent;
  let fixture: ComponentFixture<DontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DontComponent]
    });
    fixture = TestBed.createComponent(DontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
