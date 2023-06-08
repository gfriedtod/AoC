import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialImageComponent } from './special-image.component';

describe('SpecialImageComponent', () => {
  let component: SpecialImageComponent;
  let fixture: ComponentFixture<SpecialImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialImageComponent]
    });
    fixture = TestBed.createComponent(SpecialImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
