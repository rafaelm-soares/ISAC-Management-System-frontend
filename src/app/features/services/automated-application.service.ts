import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAutomatedApplication } from '../models/IAutomatedApplication';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AutomatedApplicationService {

  private apiAppUrl = `${environment.apiBaseUrl}${environment.apiAutomatedApplications}`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<IAutomatedApplication[]> {
    return this.http.get<IAutomatedApplication[]>(this.apiAppUrl);
  }

  getById(id: number): Observable<IAutomatedApplication> {
    return this.http.get<IAutomatedApplication>(`${this.apiAppUrl}/${id}`);
  }

  create(application: IAutomatedApplication): Observable<IAutomatedApplication> {
    return this.http.post<IAutomatedApplication>(this.apiAppUrl, application);
  }

  update(id: number, application: IAutomatedApplication): Observable<IAutomatedApplication> {
    return this.http.put<IAutomatedApplication>(`${this.apiAppUrl}/${id}`, application);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiAppUrl}/${id}`);
  }
}
