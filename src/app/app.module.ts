import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

// Main Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SearchComponent } from './shared/components/search/search.component';
import { ViewToggleComponent } from './shared/components/view-toggle/view-toggle.component';
import { PaginatorComponent } from './shared/components/paginator/paginator.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { ActionsBarComponent } from './shared/components/actions-bar/actions-bar.component';

// Function Components
import { HomeComponent } from './features/components/home/home.component';
import { ProjectListComponent } from './features/components/project/project-list/project-list.component';
import { ProjectPageComponent } from './features/components/project/project-page/project-page.component';
import { ProjectFormComponent } from './features/components/project/project-form/project-form.component';
import { ProjectVersionFormComponent } from './features/components/project/project-version-form/project-version-form.component';
import { AutomatedApplicationListComponent } from './features/components/automated-application/automated-application-list/automated-application-list.component';
import { AutomatedApplicationFormComponent } from './features/components/automated-application/automated-application-form/automated-application-form.component';
import { UipathProcessesListComponent } from './features/components/uipath/uipath-processes-list/uipath-processes-list.component';
import { EmployeeListComponent } from './features/components/employee-list/employee-list.component';
import { JiraIssuesListComponent } from './features/components/jira/jira-issues-list/jira-issues-list.component';
import { UserListComponent } from './features/components/user/user-list/user-list.component';
import { UserFormComponent } from './features/components/user/user-form/user-form.component';
import { DepartmentListComponent } from './features/components/department/department-list/department-list.component';
import { DepartmentFormComponent } from './features/components/department/department-form/department-form.component';

// Auth Components
import { LoginComponent } from './core/auth/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { HttpClientModule } from '@angular/common/http';

// Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ProjectPageComponent,
    ProjectListComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent,
    AutomatedApplicationFormComponent,
    AutomatedApplicationListComponent,
    ViewToggleComponent,
    PaginatorComponent,
    ProjectFormComponent,
    BannerComponent,
    ActionsBarComponent,
    UipathProcessesListComponent,
    EmployeeListComponent,
    ProjectVersionFormComponent,
    JiraIssuesListComponent,
    UserListComponent,
    UserFormComponent,
    DepartmentListComponent,
    DepartmentFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
