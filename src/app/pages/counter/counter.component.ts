import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule,NgStyle],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  value:number=0;
  Increment()
  {
   this.value++
  }
  Decrement(){
    this.value--;
  }
  Reset(){
    this.value=0;
  }
getCounterStatus():string{
 if(this.value>0)
 {
  return 'possitive';
 }else if(this.value<0){
  return 'negative';
 }else{
  return 'zero';
 }

  
}
}
