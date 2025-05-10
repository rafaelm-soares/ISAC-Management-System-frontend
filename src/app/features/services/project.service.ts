import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { IProject } from '../models/IProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiProjUrl = `${environment.apiBaseUrl}${environment.apiProjects}`;

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.apiProjUrl);
  }

  getProjectById(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${this.apiProjUrl}/${id}`);
  }

  createProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.apiProjUrl, project);
  }

  updateProject(id: number, project: IProject): Observable<IProject> {
    return this.http.put<IProject>(`${this.apiProjUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiProjUrl}/${id}`);
  }

  // TO BE CREATED
  getAllProjectsBySearchTerm(searchTerm: string): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.apiProjUrl);
  }

  // TO BE CREATED
  getAllProjectsByBusinessLine(searchTerm: string): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.apiProjUrl);
  }
}




