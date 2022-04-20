import { Component, OnInit } from '@angular/core';
import { forumsInput } from './joke.model';
import { ForumsService } from './forums.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  selectedInput: forumsInput;
  constructor(private forumsService: ForumsService) {}

  ngOnInit(): void {
    this.forumsService.jokeSelected.subscribe((currJoke)=>{
      this.selectedInput = currJoke;
    })
  }

}
