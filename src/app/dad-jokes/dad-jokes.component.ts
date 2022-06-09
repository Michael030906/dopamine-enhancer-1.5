import { Component, OnInit } from '@angular/core';
import { DadApiService } from './dad-api.service';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.css']
})
export class DadJokesComponent implements OnInit {
jokeOutput:string;
  constructor(private apiService:DadApiService) { }

  ngOnInit(): void {
    this.apiRandomCall()
  }

  apiRandomCall(){
    this.apiService.apiData().subscribe(
      txt => {
        this.jokeOutput = txt.joke
      }
    )
  }

}
