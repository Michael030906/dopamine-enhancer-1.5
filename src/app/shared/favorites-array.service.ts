import { Injectable } from '@angular/core';
import { MomJokesComponent } from '../mom-jokes/mom-jokes.component';

@Injectable({
  providedIn: 'root'
})
export class FavoritesArrayService {
  mainArry =new Array();

  storedArrySet = localStorage.setItem("mainArray", JSON.stringify(this.mainArry))

  storedArryGet = JSON.parse(localStorage.getItem("mainArray"))



  saveInput(idx) {
    if (this.mainArry.length === 0) {
      this.storedArrySet
      this.storedArryGet
      this.mainArry.push(idx);
    }
    let clear = true;
    this.mainArry.forEach((i) => {
      if (i === idx) {
        clear = false;
      }
    });
    if (clear) {
      this.storedArrySet
      this.storedArryGet
      this.mainArry.push(idx);
    } else {
       console.log('You already liked that Joke!')
    }
    return;
  }
  constructor() {}

  deletePostFromForum(idx:number){
    if (idx === -1) return;

    this.mainArry.splice(idx, 1);
  }
}
