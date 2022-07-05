import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface AuthResponseData{
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3tFzISgI9Uot4VpUuN39sKiGg6rIj4I0',
    {
      email:email,
      password:password,
      returnSecureToken:true
    }
    ).pipe(catchError(errorRes => {
      let errorMessage = 'An unknown error occurred!'
      if (!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage)
      }
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email is already in use';
      }
      return throwError(errorMessage)
     }));
  }
  login(email:string, password:string){
     return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB3tFzISgI9Uot4VpUuN39sKiGg6rIj4I0',
    {
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
}
