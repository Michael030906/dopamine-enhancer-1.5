import { Component, NgModule, OnInit } from '@angular/core';
import { forumsInput } from '../joke.model';
import { Params,ActivatedRoute, Router } from '@angular/router';
import { ForumsService } from '../forums.service';



@Component({
  selector: 'app-forums-details',
  templateUrl: './forums-details.component.html',
  styleUrls: ['./forums-details.component.css']
})
export class ForumsDetailsComponent implements OnInit {
  idx: number;
  joke: forumsInput;



  constructor(
    private forumsService: ForumsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      this.idx = +params['id'];
      this.joke = this.forumsService.getForumPost(this.idx);



    })
  }
}

