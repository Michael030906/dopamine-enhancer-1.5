import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavoritesArrayService {
  constructor() { }

  mainArry = [];




  storedArryGet = JSON.parse(localStorage.getItem("mainArray"))


  callStorage(){
    this.mainArry = this.storedArryGet
  }

  saveInput(idx) {
    if(this.mainArry.length === 0) {
      localStorage.setItem("mainArray",JSON.stringify(this.mainArry))
      this.mainArry.push(idx);

      return
    }else{
    let clear = true;
    this.mainArry.forEach((i) => {
      if (i === idx) {
        clear = false;
      }
    });
    if (clear) {
      this.mainArry.push(idx);
      return
      } else {
       console.log('You already liked that Joke!')

      }}
    localStorage.setItem("mainArray",JSON.stringify(this.mainArry))
    return
  }

 deleteFavJoke(idx){
   this.mainArry.splice(idx,1)
   localStorage.setItem("mainArray",JSON.stringify(this.mainArry))
   return
 }
}

