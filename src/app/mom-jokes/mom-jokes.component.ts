import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
@Component({
  selector: 'app-mom-jokes',
  templateUrl: './mom-jokes.component.html',
  styleUrls: ['./mom-jokes.component.css']
})
export class MomJokesComponent implements OnInit {
  jokeOutput: string;
  array:string[] = [
    "lAXg6H2ATHSvDNjPWKgrlQ",
    "qSd4zRKcQ5C6W2PxBzv2Sw",
    "IazuMYyYRSmWtseXdpwurg",
    "4Qd4ew8MQ4Sjj7BFVZqYyA",
    "RVkmDsY1RjyXimlBAW-mIg",

  ]
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
   this.apiRandomCall()

  }

  apiRandomCall(){
    //var index = Math.floor(Math.random() * this.array.length)
    this.apiService.apiData().subscribe(
      txt => {
        this.jokeOutput = txt.value
        console.log(txt.value)
      }
    )
  }
}
