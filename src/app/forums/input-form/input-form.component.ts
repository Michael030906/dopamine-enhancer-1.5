import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ForumsService } from '../forums.service';
import { forumsInput } from '../joke.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  selectedInput: forumsInput;
  idx: number;
  joke:forumsInput;
  inputControl: FormControl = new FormControl('', Validators.required);
  @ViewChild('formInput') inputName;
  jokeDetails:forumsInput = {
    content: 'Enter Joke here',
  };
  isEditMode = false
  constructor(private forumsService: ForumsService,

    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.forumsService.jokeSelected.subscribe((currJoke)=>{
      this.selectedInput = currJoke;
    })
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

  onJokeFormSubmit(content: string){
    console.log(content)
    this.jokeDetails = new forumsInput(content)

    if (this.isEditMode == true) {
      // Edit existing book (using the bookDetails)
      this.forumsService.updateJoke(this.idx, this.jokeDetails);
    } else {
      // Save a new book (using the bookDetails)
      this.forumsService.saveInputToForum(this.jokeDetails);
    }

    // Reset the form
    // this.onResetForm();
  }

  onResetForm() {
    this.inputName.nativeElement.value = ' ';
  }


}
