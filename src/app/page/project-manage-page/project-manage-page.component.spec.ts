import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagePageComponent } from './project-manage-page.component';

describe('ProjectManagePageComponent', () => {
  let component: ProjectManagePageComponent;
  let fixture: ComponentFixture<ProjectManagePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectManagePageComponent]
    });
    fixture = TestBed.createComponent(ProjectManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
