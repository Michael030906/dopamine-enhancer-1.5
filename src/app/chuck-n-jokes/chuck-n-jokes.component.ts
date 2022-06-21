import { Component, OnInit } from '@angular/core';
import { FavoritesArrayService } from '../shared/favorites-array.service';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-chuck-n-jokes',
  templateUrl: './chuck-n-jokes.component.html',
  styleUrls: ['./chuck-n-jokes.component.css']
})
export class ChuckNJokesComponent implements OnInit {
  jokeOutput: string;

  constructor(private apiService:ApiServiceService, private favArry:FavoritesArrayService) { }

  ngOnInit(): void {
    this.apiRandomCall()
  }

  apiRandomCall(){
    this.apiService.apiData().subscribe(
      txt => {
        this.jokeOutput = txt.value
      }
    )
  }


  saveToArry(idx){
    this.favArry.saveInput(idx)
    this.favArry.saveInput(idx)
  }
}
