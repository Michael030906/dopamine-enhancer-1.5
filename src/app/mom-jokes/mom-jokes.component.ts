import { sha1 } from '@angular/compiler/src/i18n/digest';
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
    {id:0, name:'Fat'},
    {id:1, name:'Stupid'},
    {id:2, name:'Ugly'},
    {id:3, name:'Nasty'},
    {id:4, name:'Hairy'},
    {id:5, name:'Bald'},
    {id:6, name:'Old'},
    {id:7, name:'Poor'},
    {id:8, name:'Short'},
    {id:9, name:'Skinny'},
    {id:10, name:'Tall'},
    {id:11, name:'Like'}
  ]

  random = true;

  fat = false;

  stupid = false;

  s1 = this.actions[this.selectedOption].name



  constructor(private jokeA: JokeArrayService) { }

  ngOnInit(): void {
   this.apiRandomCall()
   console.log(this.s1)

  }
  // index(){
  //   let help = this.s1
  //   Math.floor(Math.random() * this.jokeA.array.help.length)

  // }

  // genApiCall(){
  //   let help = this.s1
  //   this.jokeOutput = this.jokeA.array.help[this.index]
  // }
  apiRandomCall(){
    var indexR = Math.floor(Math.random() * this.jokeA.arrayUS.length)
    this.jokeOutput = this.jokeA.arrayUS[indexR]
  }



  fatRandomCall():any{
    var index = Math.floor(Math.random() * this.jokeA.array.Fat.length)
    this.jokeOutput = this.jokeA.array.Fat[index]
  }
  stupidRandomCall():any{
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
