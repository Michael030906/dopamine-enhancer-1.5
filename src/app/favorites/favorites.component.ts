import { Component, OnInit } from '@angular/core';
import { FavoritesArrayService } from '../shared/favorites-array.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  txtOutput;
  constructor(private favList:FavoritesArrayService) { }

  ngOnInit(): void {
    this.favList.callStorage();
    this.arryCall()
  }

  arryCall(){
    this.txtOutput = this.favList.mainArry
    console.log(this.txtOutput)
  }

  deleteFavJoke(idx){
    this.favList.deleteFavJoke(idx)
  }
}
