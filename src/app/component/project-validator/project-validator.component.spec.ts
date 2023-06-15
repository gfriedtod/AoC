import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectValidatorComponent } from './project-validator.component';

describe('ProjectValidatorComponent', () => {
  let component: ProjectValidatorComponent;
  let fixture: ComponentFixture<ProjectValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectValidatorComponent]
    });
    fixture = TestBed.createComponent(ProjectValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
