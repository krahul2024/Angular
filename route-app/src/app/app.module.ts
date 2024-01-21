import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FirstAComponent } from './first/first-a/first-a.component';
import { SecondAComponent } from './second/second-a/second-a.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FirstAComponent,
    SecondAComponent,
    CrisisListComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
