import { Routes } from '@angular/router';
import { ProfileCardComponent } from './pages/profile-card/profile-card.component';
import { CounterComponent } from './pages/counter/counter.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { StopWatchComponent } from './pages/stop-watch/stop-watch.component';
import { GuessingGameComponent } from './pages/guessing-game/guessing-game.component';
import { TicTacToeComponent } from './pages/tic-tac-toe/tic-tac-toe.component';
import { DynamicFilterComponent } from './pages/dynamic-filter/dynamic-filter.component';
import { FaqAccordionComponent } from './pages/faq-accordion/faq-accordion.component';
import { JokesComponent } from './pages/jokes/jokes.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:"profile-card",component:ProfileCardComponent},
    {path:"counter",component:CounterComponent},
    {path:"todo-list",component:TodoListComponent},
    {path:'home',component:HomeComponent},
    {path:'stop-watch',component:StopWatchComponent},
    {path:'guess-game',component:GuessingGameComponent},
    {path:"tic-tac-toe",component:TicTacToeComponent},
    {path:'dynamic-filter',component:DynamicFilterComponent},
    {path:'faq-accordion',component:FaqAccordionComponent},
    {path:'jokes',component:JokesComponent}
];
