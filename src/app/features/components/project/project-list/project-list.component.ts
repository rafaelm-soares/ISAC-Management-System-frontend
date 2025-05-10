import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { IProject } from '../../../models/IProject';
import { Router } from '@angular/router';
import { EStatus } from '../../../models/enums/EStatus';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProjectListComponent implements OnInit {
  projects: IProject[] = [];
  paginatedProjects: IProject[] = [];
  pageSize: number = 10;
  currentPage: number = 0;
  viewMode: 'card' | 'table' = 'card';
  showSearch: boolean = false;
  isAdvancedSearchVisible: boolean = false;
  eStatus = EStatus;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((data: IProject[]) => {
      this.projects = data;
      this.paginatedProjects = data.slice(0,this.pageSize)
    });
  }

  onRowClick(project: IProject): void {
    // Redirecionar para a página do projeto
    this.router.navigate(['/project', project.id]);
  }

  deleteProject(id: number): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe(() => {
        this.projects = this.projects.filter(project => project.id !== id);
      });
    }
  }

  //Paginator
  onPageChanged(paginatedItems: IProject[]): void {
    this.paginatedProjects = paginatedItems;
  }

  // View Mode
  setViewMode(mode: 'card' | 'table'): void {
    this.viewMode = mode;
  }

  //Search object
  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }
}