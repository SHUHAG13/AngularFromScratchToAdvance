import { Routes } from '@angular/router';
import { ProfileCardComponent } from './pages/profile-card/profile-card.component';
import { CounterComponent } from './pages/counter/counter.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

export const routes: Routes = [
    {path:"profile-card",component:ProfileCardComponent},
    {path:"counter",component:CounterComponent},
    {path:"",component:TodoListComponent},
];
