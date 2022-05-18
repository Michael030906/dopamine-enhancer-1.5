import { Component, OnInit, Input } from '@angular/core';
import { ForumsService } from 'src/app/forums/forums.service';
import { forumsInput } from 'src/app/forums/joke.model';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() jokeIdx: number;
  @Input() joke:string;

  constructor(
    private forumsService: ForumsService,

  ) { }

  ngOnInit(): void {
    console.log("joke ", this.joke);
    console.log(this.jokeIdx)
  }
  onRemoveJoke(idx:number){
    this.forumsService.deletePostFromForum(this.jokeIdx);
  }

}
