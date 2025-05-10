import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Defining constants for localStorage keys
  private readonly TOKEN_KEY = 'token';
  private readonly USERNAME_KEY = 'userName';
  private readonly USER_ROLE_KEY = 'userRole';

  // Defining API URLs
  private apiSignIn = `${environment.apiBaseUrl}${environment.apiSignIn}`;
  private apiSignUp = `${environment.apiBaseUrl}${environment.apiSignUp}`;
  private apiLogOut = `${environment.apiBaseUrl}${environment.apiLogOut}`;

  // BehaviorSubjects to manage login state, username, and user role
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  private userName = new BehaviorSubject<string | null>(this.getStoredUserName());
  private userRole = new BehaviorSubject<string | null>(this.getStoredUserRole());

  constructor(private http: HttpClient) {}

  // Checks if a token is stored in localStorage
  private hasToken(): boolean {
    return !!this.getToken();
  }

  // Retrieves the stored token from localStorage
  private getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Retrieves the stored username from localStorage
  private getStoredUserName(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }

  // Retrieves the stored user role from localStorage
  private getStoredUserRole(): string | null {
    return localStorage.getItem(this.USER_ROLE_KEY);
  }

  // Stores token, username, and role in localStorage and updates BehaviorSubjects
  private storeAuthData(token: string, name: string, role: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USERNAME_KEY, name);
    localStorage.setItem(this.USER_ROLE_KEY, role);
    this.loggedIn.next(true);
    this.userName.next(name);
    this.userRole.next(role);
  }

  // Clears authentication data from localStorage and updates BehaviorSubjects
  private clearAuthData(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
    localStorage.removeItem(this.USER_ROLE_KEY);
    this.loggedIn.next(false);
    this.userName.next(null);
    this.userRole.next(null);
  }

  // Method to log the user in
  signIn(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiSignIn, { email, password }, { withCredentials: true }).pipe(
      tap(response => {
        if (response && response.token) {
          this.storeAuthData(response.token, response.name, response.role);
        }
      })
    );
  }

  // Method to register a new user
  signUp(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiSignUp, { email, password });
  }

  // Method to log the user out
  logout(): Observable<void> {
    return this.http.post<void>(this.apiLogOut, {}, { withCredentials: true }).pipe(
      tap(() => this.clearAuthData())
    );
  }

  // Checks if the user is logged in
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // Retrieves the logged-in user's name
  getUserName(): Observable<string | null> {
    return this.userName.asObservable();
  }

  // Retrieves the logged-in user's role
  getUserRole(): Observable<string | null> {
    return this.userRole.asObservable();
  }
}