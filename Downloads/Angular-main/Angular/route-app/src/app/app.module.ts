import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FirstAComponent } from './first/first-a/first-a.component';
import { SecondAComponent } from './second/second-a/second-a.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { TeamsComponent } from './teams/teams.component';
import { ListComponent } from './shared/list/list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { TeamsButtonComponent } from './shared/teams-button/teams-button.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { MdFormComponent } from './md-form/md-form.component';
import { MarkdownModule } from 'ngx-markdown';
import { TeamsChatComponent } from './teams-chat/teams-chat.component';
import { EmbedFormComponent } from './teams-chat/embed-form/embed-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FirstAComponent,
    SecondAComponent,
    CrisisListComponent,
    HeroesListComponent,
    TeamsComponent,
    ListComponent,
    HomeComponent,
    TeamsButtonComponent,
    DynamicTableComponent,
    MdFormComponent,
    TeamsChatComponent,
    EmbedFormComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
