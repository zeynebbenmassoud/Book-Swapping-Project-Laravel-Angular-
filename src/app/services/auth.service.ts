import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User {
  constructor(
    public name: String,
    public email: String,
    public password: String,
    public password_confirmation: String
      ) {}
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

   constructor(private http:HttpClient) { }

   // User registration
   register(user:User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  // Login
  signin(user:User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/profile');
  }

  sendPasswordResetLink(data:any){
    return this.http.post('http://127.0.0.1:8000/api/auth/reset-password-request', data);
  }

  resetPassword(data:any) {
    return this.http.post('http://127.0.0.1:8000/api/auth/response-password-reset', data);
  }
}
