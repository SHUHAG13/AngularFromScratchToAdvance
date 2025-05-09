import { Routes } from '@angular/router';
import { ProfileCardComponent } from './pages/profile-card/profile-card.component';
import { CounterComponent } from './pages/counter/counter.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { StopWatchComponent } from './pages/stop-watch/stop-watch.component';

export const routes: Routes = [
    {path:"profile-card",component:ProfileCardComponent},
    {path:"counter",component:CounterComponent},
    {path:"todo-list",component:TodoListComponent},
    {path:'home',component:HomeComponent},
    {path:'stop-watch',component:StopWatchComponent}
];
