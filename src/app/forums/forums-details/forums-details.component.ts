import { Component, NgModule, OnInit } from '@angular/core';
import { forumsInput } from '../joke.model';
import { Params,ActivatedRoute, Router } from '@angular/router';
import { ForumsService } from '../forums.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forums-details',
  templateUrl: './forums-details.component.html',
  styleUrls: ['./forums-details.component.css']
})
export class ForumsDetailsComponent implements OnInit {
  idx: number;
  joke: forumsInput;

  jokeDetails:forumsInput = {
    content: 'Enter Joke here',
  };
  isEditMode = false

  constructor(
    private forumsService: ForumsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      this.idx = +params['id'];
      this.joke = this.forumsService.getForumPost(this.idx);

      this.isEditMode = params['id'] != null;

      if (this.isEditMode == true) {
        this.jokeDetails = this.forumsService.getForumPost(this.idx);
      }

    })
  }

  onEditJoke() {
    this.router.navigate(['../', this.idx,'edit'], {relativeTo: this.route})
  }
  onDeleteJoke(){
    this.forumsService.deletePostFromForum(this.idx);
    this.router.navigate(['/forums'])
  }

  onJokeFormSubmit(formObj: NgForm){
    const content = formObj.value

    this.jokeDetails = new forumsInput(content)

    if (this.isEditMode == true) {
      // Edit existing book (using the bookDetails)
      this.forumsService.updateJoke(this.idx, this.joke);
    } else {
      // Save a new book (using the bookDetails)
      this.forumsService.saveInputToForum(this.joke);
    }

    // Reset the form
    this.onResetForm();
  }

  onResetForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

