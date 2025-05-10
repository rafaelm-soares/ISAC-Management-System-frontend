import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IProject } from '../../../models/IProject';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectPageComponent implements OnInit {

  project!: IProject;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.projectService.getProjectById(params.id).subscribe((project: IProject) => {
          this.project = project;
        });
      }
    });
  }

  ngOnInit(): void {
  }
}
