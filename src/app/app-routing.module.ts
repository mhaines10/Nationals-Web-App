import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattersComponent } from './batters/batters.component';
import { BatterCardComponent } from './batter-card/batter-card.component';
import {BatterViewComponent} from './batter-view/batter-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'batters', component: BattersComponent},
  {path: 'home', component: BatterViewComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }