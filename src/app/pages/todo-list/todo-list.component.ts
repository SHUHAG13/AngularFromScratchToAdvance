import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,FormsModule,NgIf,NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tasks:string[]=[];
  newTask:string='';
   
  addTask(){
    if(this.newTask.trim() === '') return;
    this.tasks.push(this.newTask);
    this.newTask='';
  }

  removeTask(index:number){
    this.tasks.splice(index,1);
  }

}
