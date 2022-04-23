import { Component, OnInit } from '@angular/core';
import { forumsInput } from '../joke.model';
import { ForumsService } from '../forums.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-forums-list',
  templateUrl: './forums-list.component.html',
  styleUrls: ['./forums-list.component.css']
})
export class ForumsListComponent implements OnInit {
  forumsContent: forumsInput[] = [];
  constructor(
    private forumsService: ForumsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.forumsContent = this.forumsService.getForumPosts();

    this.forumsService.forumJokeChanged.subscribe((updatedContent)=>{
      this.forumsContent = updatedContent;
    })
  }
  onRemoveContent(idx:number){
    this.forumsService.deletePostFromForum(idx);
  }

  onAddNewContent(){
    this.router.navigate(['new'],{ relativeTo: this.route})
  }
}
