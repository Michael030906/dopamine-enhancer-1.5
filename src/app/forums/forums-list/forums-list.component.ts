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

  constructor(
    private forumsService: ForumsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.forumsService = this.forumsService.getForumPost();
  }

}
