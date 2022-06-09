import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) {}

    apiData(): Observable<any>{
      let cn = "https://api.chucknorris.io/jokes/random"
      return this.http.get<any>(cn);
      }
}
