import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
@Component({
  selector: 'app-mom-jokes',
  templateUrl: './mom-jokes.component.html',
  styleUrls: ['./mom-jokes.component.css']
})
export class MomJokesComponent implements OnInit {
  jokeOutput: string;

  constructor(private apiService:ApiServiceService) { }

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
}
