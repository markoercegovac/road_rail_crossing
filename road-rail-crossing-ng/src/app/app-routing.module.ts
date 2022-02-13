import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewRoadRailCrossingComponent} from "./new-road-rail-crossing/new-road-rail-crossing.component";


const routes: Routes = [
  {path: 'new-level-crossing', component: NewRoadRailCrossingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
