import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FavoritesArrayService } from '../shared/favorites-array.service';
import { JokeArrayService } from './joke-array.service';


@Component({
  selector: 'app-mom-jokes',
  templateUrl: './mom-jokes.component.html',
  styleUrls: ['./mom-jokes.component.css']
})
export class MomJokesComponent implements OnInit {
  jokeOutput: string;

  actions = [
    {id:-1, name:'Random'},
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

  jokeTypeControl = new FormControl('');

  jokeType: string = '';

  constructor(private jokeA: JokeArrayService, private favArry:FavoritesArrayService) { }

  ngOnInit(): void {
   this.favArry.callStorage()
   this.genArryCall()
  }

  genArryCall(): void {
    if (this.jokeType === 'Random' || this.jokeType === '') {
      var randomNum = Math.floor(Math.random() * (this.jokeA.arrayUS?.length + 1));
      this.jokeOutput = this.jokeA.arrayUS[randomNum]
    } else {
      var array = this.jokeA.array[this.jokeType]
      var randomNum = Math.floor(Math.random() * (array?.length + 1));
      this.jokeOutput = array === undefined ? '' : array[randomNum]
    }
  }

  jokeTypeClick(action: string): void {
    this.jokeType = action
  }

  dropdownLabel(): string {
    if(this.jokeType === ''){
      return 'Select a joke type';
    }else{
      return 'Joke Type Selected: ' + this.jokeType;
    }
  }

  saveToArry(idx){
    console.log(idx)
    this.favArry.saveInput(idx)
    this.favArry.saveInput(idx)
    console.log(this.favArry.mainArry)
  }
}

