import { Injectable } from '@angular/core';
import { MomJokesComponent } from '../mom-jokes/mom-jokes.component';

@Injectable({
  providedIn: 'root'
})
export class FavoritesArrayService {
  mainArry = [];

 saveInput(input){
   this.mainArry.push(input)
 }
  constructor() { }
}
