import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }      from "./about/about.component";
import { RepositoryComponent } from "./repository/repository.component";
import { ContactComponent }    from "./contact/contact.component";
import { GameComponent }       from "./game/game.component";
import { HistoryComponent }    from "./history/history.component";

const routes: Routes = [
  { path: '',           component: GameComponent},
  { path: 'history',    component: HistoryComponent},  
  { path: 'repository', component: RepositoryComponent},  
  { path: 'about',      component: AboutComponent},
  { path: 'contact',    component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
