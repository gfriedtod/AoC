import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectValidateAdminPageComponent } from './project-validate-admin-page.component';

describe('ProjectValidateAdminPageComponent', () => {
  let component: ProjectValidateAdminPageComponent;
  let fixture: ComponentFixture<ProjectValidateAdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectValidateAdminPageComponent]
    });
    fixture = TestBed.createComponent(ProjectValidateAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
