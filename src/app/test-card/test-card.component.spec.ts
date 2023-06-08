import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCardComponent } from './test-card.component';

describe('TestCardComponent', () => {
  let component: TestCardComponent;
  let fixture: ComponentFixture<TestCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCardComponent]
    });
    fixture = TestBed.createComponent(TestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
