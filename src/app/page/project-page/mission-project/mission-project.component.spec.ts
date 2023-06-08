import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionProjectComponent } from './mission-project.component';

describe('MissionProjectComponent', () => {
  let component: MissionProjectComponent;
  let fixture: ComponentFixture<MissionProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionProjectComponent]
    });
    fixture = TestBed.createComponent(MissionProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
