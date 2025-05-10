import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBusinessLine } from '../models/IBusinessLine';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessLinesService {

  private apiBlUrl = `${environment.apiBaseUrl}${environment.apiBusinessLines}`;

  constructor(private http: HttpClient) { }

  getAllBusinessLines(): Observable<IBusinessLine[]> {
    return this.http.get<IBusinessLine[]>(this.apiBlUrl);
  }

  getBusinessLineById(id: number): Observable<IBusinessLine> {
    return this.http.get<IBusinessLine>(`${this.apiBlUrl}/${id}`);
  }

  createBusinessLine(businessLine: IBusinessLine): Observable<IBusinessLine> {
    return this.http.post<IBusinessLine>(this.apiBlUrl, businessLine);
  }

  deleteBusinessLine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBlUrl}/${id}`);
  }
}
