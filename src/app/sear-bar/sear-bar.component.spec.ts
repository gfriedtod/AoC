import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearBarComponent } from './sear-bar.component';

describe('SearBarComponent', () => {
  let component: SearBarComponent;
  let fixture: ComponentFixture<SearBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearBarComponent]
    });
    fixture = TestBed.createComponent(SearBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
