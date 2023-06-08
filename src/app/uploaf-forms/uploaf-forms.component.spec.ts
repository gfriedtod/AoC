import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploafFormsComponent } from './uploaf-forms.component';

describe('UploafFormsComponent', () => {
  let component: UploafFormsComponent;
  let fixture: ComponentFixture<UploafFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploafFormsComponent]
    });
    fixture = TestBed.createComponent(UploafFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
