import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ProjectService } from '../../../features/services/project.service';
import { IProject } from '../../../features/models/IProject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;
  allProjects: IProject[] = [];
  filteredProjects: IProject[] = [];

  constructor(private fb: FormBuilder, private projectService: ProjectService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      logicalOperator: ['-'],
      filters: this.fb.array([this.createFilter()])
    });

    this.projectService.getAllProjects().subscribe((projects: IProject[]) => {
      this.allProjects = projects;
      this.filteredProjects = projects;
    });
  }

  get filters(): FormArray {
    return this.searchForm.get('filters') as FormArray;
  }

  createFilter(): FormGroup {
    return this.fb.group({
      field: ['projectCode'],
      condition: ['contains'],
      value: [''],
      operator: ['']
    });
  }

  addFilter() {
    this.filters.push(this.createFilter());
  }

  removeFilter(index: number) {
    this.filters.removeAt(index);
  }

  onSearch() {
    const filters = this.searchForm.value.filters;
    const logicalOperator = this.searchForm.get('logicalOperator')?.value;

    this.filteredProjects = this.allProjects.filter(project =>
      this.applyFilters(project, filters, logicalOperator)
    );
  }

  applyFilters(project: IProject, filters: any[], logicalOperator: string): boolean {
    return filters.reduce((result, filter, index) => {
      const filterResult = this.applyFilter(project, filter);

      if (index === 0) return filterResult;

      switch (filter.operator) {
        case 'AND':
          return result && filterResult;
        case 'OR':
          return result || filterResult;
        case 'AND NOT':
          return result && !filterResult;
        case 'OR NOT':
          return result || !filterResult;
        default:
          return result;
      }
    }, false);
  }

  applyFilter(project: IProject, filter: any): boolean {
    const projectField = (project[filter.field as keyof IProject] || '').toString().toLowerCase();
    const filterValue = filter.value.toLowerCase();

    switch (filter.condition) {
      case 'contains':
        return projectField.includes(filterValue);
      case 'matches':
        return projectField === filterValue;
      case 'startsWith':
        return projectField.startsWith(filterValue);
      case 'endsWith':
        return projectField.endsWith(filterValue);
      case 'isEmpty':
        return projectField.trim() === '';
      default:
        return false;
    }
  }

  onClear() {
    this.filters.clear();
    this.filters.push(this.createFilter());
    this.searchForm.reset({ logicalOperator: '-' });
    this.filteredProjects = this.allProjects;
  }
}
