import { Component, OnInit } from '@angular/core';
import { JokeArrayService } from './joke-array.service';

@Component({
  selector: 'app-mom-jokes',
  templateUrl: './mom-jokes.component.html',
  styleUrls: ['./mom-jokes.component.css']
})
export class MomJokesComponent implements OnInit {
  jokeOutput: string;
  selectedOption: number = 0;
  actions = [
    {id:0, name:'Random'},
    {id:1, name:'Fat'},
    {id:2, name:'Stupid'},
    {id:3, name:'Ugly'},
    {id:4, name:'Nasty'},
    {id:5, name:'Hairy'},
    {id:6, name:'Bald'},
    {id:7, name:'Old'},
    {id:8, name:'Poor'},
    {id:9, name:'Short'},
    {id:10, name:'Skinny'},
    {id:11, name:'Tall'},
    {id:12, name:'Like'}
  ]
  constructor(private jokeA: JokeArrayService) { }

  ngOnInit(): void {
   this.apiRandomCall()
  }

  apiRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.arrayUS.length)
    this.jokeOutput = this.jokeA.arrayUS[index]
  }
  fatRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.fat.length)
    this.jokeOutput = this.jokeA.array.fat[index]
  }
  stupidRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.stupid.length)
    this.jokeOutput = this.jokeA.array.stupid[index]
  }
  uglyRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.ugly.length)
    this.jokeOutput = this.jokeA.array.ugly[index]
  }
  nastyRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.nasty.length)
    this.jokeOutput = this.jokeA.array.nasty[index]
  }
  hairyRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.hairy.length)
    this.jokeOutput = this.jokeA.array.hairy[index]
  }
  baldRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.bald.length)
    this.jokeOutput = this.jokeA.array.bald[index]
  }
  oldRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.old.length)
    this.jokeOutput = this.jokeA.array.old[index]
  }
  poorRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.poor.length)
    this.jokeOutput = this.jokeA.array.poor[index]
  }
  shortRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.short.length)
    this.jokeOutput = this.jokeA.array.short[index]
  }
  skinnyRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.skinny.length)
    this.jokeOutput = this.jokeA.array.skinny[index]
  }
  tallRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.stupid.length)
    this.jokeOutput = this.jokeA.array.fat[index]
  }
  likeRandomCall(){
    var index = Math.floor(Math.random() * this.jokeA.array.like.length)
    this.jokeOutput = this.jokeA.array.like[index]
  }
}
