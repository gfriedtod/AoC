import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDirectorLayoutComponent } from './work-director.layout.component';

describe('WorkDirectorLayoutComponent', () => {
  let component: WorkDirectorLayoutComponent;
  let fixture: ComponentFixture<WorkDirectorLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkDirectorLayoutComponent]
    });
    fixture = TestBed.createComponent(WorkDirectorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
