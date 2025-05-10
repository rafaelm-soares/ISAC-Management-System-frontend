import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { LoginComponent } from './core/auth/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { ProjectPageComponent } from './features/components/project/project-page/project-page.component';
import { AutomatedApplicationListComponent } from './features/components/automated-application/automated-application-list/automated-application-list.component';
import { AutomatedApplicationFormComponent } from './features/components/automated-application/automated-application-form/automated-application-form.component';
import { ProjectListComponent } from './features/components/project/project-list/project-list.component';
import { ProjectFormComponent } from './features/components/project/project-form/project-form.component';
import { UserListComponent } from './features/components/user/user-list/user-list.component';
import { UserFormComponent } from './features/components/user/user-form/user-form.component';
import { EmployeeListComponent } from './features/components/employee-list/employee-list.component';
import { UipathProcessesListComponent } from './features/components/uipath/uipath-processes-list/uipath-processes-list.component';
import { ProjectVersionFormComponent } from './features/components/project/project-version-form/project-version-form.component';
import { JiraIssuesListComponent } from './features/components/jira/jira-issues-list/jira-issues-list.component';
import { DepartmentListComponent } from './features/components/department/department-list/department-list.component';
import { DepartmentFormComponent } from './features/components/department/department-form/department-form.component';
import { ERole } from './features/models/enums/ERole'
import { RoleGuard } from './core/auth/role.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  {
    path: 'automated-applications',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AutomatedApplicationListComponent },
      { path: 'new', component: AutomatedApplicationFormComponent },
      { path: 'edit/:id', component: AutomatedApplicationFormComponent }
    ]
  },

  {
    path: 'departments',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DepartmentListComponent },
      { path: ':id', component: DepartmentFormComponent }
    ]
  },

  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },

  { path: 'jira-issues', component: JiraIssuesListComponent, canActivate: [AuthGuard] },

  {
    path: 'uipath',
    canActivate: [AuthGuard],
    children: [
      { path: 'uipath-orchestrators', component: UipathProcessesListComponent },
      { path: 'uipath-processes', component: UipathProcessesListComponent },
      { path: 'uipath-machines', component: UipathProcessesListComponent }
    ]
  },

  {
    path: 'projects',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProjectListComponent,
      },
      {
        path: 'new',
        component: ProjectFormComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [
            ERole.ADMINISTRATOR, ERole.EDITOR, ERole.MANAGER]
        }
      },
      {
        path: ':id',
        component: ProjectPageComponent,
      },
      {
        path: 'edit/:id',
        component: ProjectFormComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [
            ERole.ADMINISTRATOR, ERole.EDITOR, ERole.MANAGER]
        }
      },
      {
        path: 'version/:id',
        component: ProjectVersionFormComponent,
      },
      {
        path: 'version/edit/:id',
        component: ProjectVersionFormComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [
            ERole.ADMINISTRATOR,
            ERole.EDITOR,
            ERole.MANAGER]
        }
      }
    ]
  },

  {
    path: 'users',
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: [ERole.ADMINISTRATOR] },
    children: [
      { path: '', component: UserListComponent },
      { path: 'new', component: UserFormComponent },
      { path: ':id', component: UserFormComponent },
      { path: 'edit/:id', component: UserFormComponent }
    ]
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
