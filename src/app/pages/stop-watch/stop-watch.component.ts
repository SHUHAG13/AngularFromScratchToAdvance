import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  imports: [CommonModule],
  templateUrl: './stop-watch.component.html',
  styleUrl: './stop-watch.component.css'
})
export class StopWatchComponent {
  elapsedTime: number = 0;
  isRunning: boolean = false;
  intervalId: any;

  startStop(){
    if(this.isRunning){
      this.stopTimer();
    }else{
      this.startTimer();
    }
  }
  startTimer(){
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.elapsedTime += 0.1; // Increment elapsed time by 1 second (1000 milliseconds)
    }, 1000);
    console.log("Timer started");
  }

  stopTimer(){
    this.isRunning=false;
    clearInterval(this.intervalId);
    console.log("Timer stopped");
  }

  resetTimer(){
   this.isRunning=false;
    clearInterval(this.intervalId);
    this.elapsedTime=0;
    console.log("Timer reset");

  }

}
