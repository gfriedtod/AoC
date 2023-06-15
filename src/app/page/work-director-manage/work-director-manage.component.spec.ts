import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDirectorManageComponent } from './work-director-manage.component';

describe('WorkDirectorManageComponent', () => {
  let component: WorkDirectorManageComponent;
  let fixture: ComponentFixture<WorkDirectorManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkDirectorManageComponent]
    });
    fixture = TestBed.createComponent(WorkDirectorManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
