import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AutomatedApplicationService } from '../../../services/automated-application.service';
import { EApplicationType } from '../../../models/enums/EApplicationType';
import { EAutomationType } from '../../../models/enums/EAutomationType';
import { IAutomatedApplication } from '../../../models/IAutomatedApplication';

@Component({
  selector: 'app-automated-application-list',
  templateUrl: './automated-application-list.component.html',
  styleUrl: './automated-application-list.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AutomatedApplicationListComponent implements OnInit {
  applications: IAutomatedApplication[] = [];
  paginatedApps: IAutomatedApplication[] = [];
  viewMode: 'card' | 'table' = 'card';
  pageSize: number = 10;
  currentPage: number = 0;
  showSearch: boolean = false;
  applicationTypeDescriptions = EApplicationType;
  automationTypeDescriptions = EAutomationType;

  constructor(private applicationService: AutomatedApplicationService) { }

  ngOnInit(): void {
    this.applicationService.getAll().subscribe(data => {
      this.applications = data;
      this.paginatedApps = data.slice(0, this.pageSize)
    });
  }

  deleteApplication(id: number): void {
    if (confirm('Are you sure you want to delete this application?')) {
      this.applicationService.delete(id).subscribe(() => {
        this.applications = this.applications.filter(app => app.id !== id);
      });
    }
  }

  // View Mode
  setViewMode(mode: 'card' | 'table'): void {
    this.viewMode = mode;
  }

  //Search object
  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  //Paginator
  onPageChanged(paginatedItems: IAutomatedApplication[]): void {
    this.paginatedApps = paginatedItems;
  }

  // Enum Descriptions
  getApplicationTypeDescription(key: string): string {
    return this.applicationTypeDescriptions[key as keyof typeof EApplicationType];
  }

  getAutomationTypeDescription(key: string): string {
    return this.automationTypeDescriptions[key as keyof typeof EAutomationType];
  }
}