import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonIconComponent } from './boutton-icon.component';

describe('BouttonIconComponent', () => {
  let component: BouttonIconComponent;
  let fixture: ComponentFixture<BouttonIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BouttonIconComponent]
    });
    fixture = TestBed.createComponent(BouttonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
