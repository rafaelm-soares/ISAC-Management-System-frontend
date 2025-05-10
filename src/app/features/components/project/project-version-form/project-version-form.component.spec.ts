import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectVersionFormComponent } from './project-version-form.component';

describe('ProjectVersionFormComponent', () => {
  let component: ProjectVersionFormComponent;
  let fixture: ComponentFixture<ProjectVersionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectVersionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectVersionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
