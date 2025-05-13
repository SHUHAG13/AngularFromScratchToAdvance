import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { JokeService } from './../../services/joke.service';

@Component({
  selector: 'app-jokes',
  imports: [CommonModule],
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
  providers: [JokeService]
})
export class JokesComponent {
jokeSetUp:string='';
jokePunchLine:string='';
isLoading:boolean=false;
errorMessage:string='';
constructor(private JokeService:JokeService){}
fetchJoke(){
  this.isLoading=true;
  this.errorMessage='';
  this.JokeService.getRandomJoke().subscribe({
    next:(joke)=>{
      this.jokeSetUp=joke.setup;
      this.jokePunchLine=joke.delivery;
      this.isLoading=false;
    },error:()=>{
      this.errorMessage='Error fetching joke,Please try again';
      this.jokeSetUp='';
      this.jokePunchLine='';
      this.isLoading=false;

    },
  });
}

}
