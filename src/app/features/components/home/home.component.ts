import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../models/IProject';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  projects: IProject[] = [];
  viewMode: 'card' | 'table' = 'card'; // Initial view mode is card

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm) {
        this.projectService.getAllProjectsBySearchTerm(params.searchTerm).subscribe((projects: IProject[]) => {
          this.projects = projects;
        });
      } else if (params.businessLine) {
        this.projectService.getAllProjectsByBusinessLine(params.businessLine).subscribe((projects: IProject[]) => {
          this.projects = projects;
        });
      } else {
        this.projectService.getAllProjects().subscribe((projects: IProject[]) => {
          this.projects = projects;
        });
      }
    });
  }
}

