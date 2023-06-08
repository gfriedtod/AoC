import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyHandleComponent } from './key-handle.component';

describe('KeyHandleComponent', () => {
  let component: KeyHandleComponent;
  let fixture: ComponentFixture<KeyHandleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyHandleComponent]
    });
    fixture = TestBed.createComponent(KeyHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
