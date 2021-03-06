import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { NewRoadRailCrossingComponent } from './new-road-rail-crossing/new-road-rail-crossing.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { RiskComponent } from './risk/risk.component';
import {MatSortModule} from "@angular/material/sort";
import { EditRoadRailCrossingComponent } from './edit-road-rail-crossing/edit-road-rail-crossing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewRoadRailCrossingComponent,
    FooterComponent,
    RiskComponent,
    EditRoadRailCrossingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
