import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewRoadRailCrossingComponent} from "./new-road-rail-crossing/new-road-rail-crossing.component";
import {RiskComponent} from "./risk/risk.component";
import {EditRoadRailCrossingComponent} from "./edit-road-rail-crossing/edit-road-rail-crossing.component";


const routes: Routes = [
  {path: 'new-road-rail-crossing', component: NewRoadRailCrossingComponent},
  {path: 'risk',component:RiskComponent},
  {path: 'edit-road-rail-crossing/:id', component: EditRoadRailCrossingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
