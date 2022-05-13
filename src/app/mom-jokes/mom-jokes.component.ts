import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
@Component({
  selector: 'app-mom-jokes',
  templateUrl: './mom-jokes.component.html',
  styleUrls: ['./mom-jokes.component.css']
})
export class MomJokesComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.apiData().subscribe( data => {
      console.log(data);
    })

  }

}
