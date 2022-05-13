import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  apiData(): Observable<{joke: string}>{
    const httpHeaders = new HttpHeaders( {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
      'content-type': 'application/json',
    });
    console.log(httpHeaders)
    let jokeApi= "https://api.yomomma.info/"
    return this.http.get<{joke: string}>(jokeApi, {headers: httpHeaders});
  }

}
