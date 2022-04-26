import { EventEmitter, Injectable } from '@angular/core';
import { forumsInput } from './joke.model';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {
  jokeSelected = new EventEmitter();

  forumJokeChanged = new EventEmitter();

  private forumJokes: forumsInput[] = [
    new forumsInput(0,"Yo mama's so fat, when she fell I didn't laugh, but the sidewalk cracked up."),
    new forumsInput(1,"Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!"),
    new forumsInput (2,"There's a squirrel named Twiggy who learned how to water-ski.")
  ];
  //create forum post
  saveInputToForum(input: forumsInput){
    this.forumJokes.push(input);
    this.forumJokeChanged.emit(this.forumJokes.slice());
  }

  //Read All Inputs
  getForumPosts(){
    return this.forumJokes.slice();
  }

  //Read One Input
  getForumPost(idx: number){
    return this.forumJokes.slice()[idx];
  }

  //delete Post
  deletePostFromForum(idx:number){
    if (idx === -1) return;

    this.forumJokes.splice(idx, 1);
    this.forumJokeChanged.emit(this.forumJokes.slice());
  }

}
