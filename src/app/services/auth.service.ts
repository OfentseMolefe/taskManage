import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users';
  
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password });
  }
   
  // store tokens in local storage for session management
  storeToken(token: string): void {
    localStorage.setItem('authToken', token); }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
  
  removeToken(): void {
    localStorage.removeItem('authToken');
  } 

  //check if user is logged in
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  } 

  //check if is Authenticated
  isAuthenticated(): boolean {
  return this.isLoggedIn();
  }
  
}
