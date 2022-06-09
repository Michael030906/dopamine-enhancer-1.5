import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadApiService {

  options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }}

  constructor(private http:HttpClient) { }
  apiData(): Observable<any>{
    return this.http.get<any>("https://icanhazdadjoke.com/",this.options)
    }
}
