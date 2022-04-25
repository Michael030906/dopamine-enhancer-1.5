import { Component, OnInit, Input } from '@angular/core';
import { forumsInput } from 'src/app/forums/joke.model';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() jokeIdx: number;
  @Input() joke:string;
  constructor() { }

  ngOnInit(): void {
    console.log("joke ", this.joke);
    console.log(this.jokeIdx)
  }

}
