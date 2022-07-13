import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavoritesArrayService } from './favorites-array.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private favArry: FavoritesArrayService ) { }

  storeFavorites(){
    const favorites = this.favArry.mainArry;
    this.http.put('https://dopamine-enhancer-default-rtdb.firebaseio.com/favorties.json', favorites).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
}
