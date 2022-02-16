import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewRoadRailCrossingComponent} from "./new-road-rail-crossing/new-road-rail-crossing.component";
import {RiskComponent} from "./risk/risk.component";


const routes: Routes = [
  {path: 'new-road-rail-crossing', component: NewRoadRailCrossingComponent},
  {path: 'risk',component:RiskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
