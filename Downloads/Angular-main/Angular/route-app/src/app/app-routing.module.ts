import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FirstAComponent } from './first/first-a/first-a.component';
import { SecondAComponent } from './second/second-a/second-a.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { MarkdownComponent } from 'ngx-markdown';
import { MdFormComponent } from './md-form/md-form.component';
import { TeamsChatComponent } from './teams-chat/teams-chat.component';


const routes: Routes = [
  {
    path: 'first', component: FirstComponent,
    title: 'First Page',
    children: [
      { path: 'first-a', title: 'First A page', component: FirstAComponent },
    ]
  },
  { path : 'teams-share', title : 'Share to Teams', component : TeamsChatComponent}
  ,
  {
    path: 'second', component: SecondComponent, title: 'Second Page',
    children: [
      { path: 'second-a', title: 'Second A page', component: SecondAComponent },
    ]
  },
  { path: 'md-form', title: 'Markdown Form ', component: MdFormComponent },
  { path: 'dynamic-table', title: 'Dynamic Table', component: DynamicTableComponent },
  { path: 'redirect-to-first', redirectTo: '/first', pathMatch: 'full' },
  { path: 'crisis-list', title: 'Crisis List', component: CrisisListComponent },
  { path: 'heroes-list', title: 'Heroes List', component: HeroesListComponent },
  { path: 'teams', title: 'All Teams', component: TeamsComponent },
  { path: '', title: 'Home Page', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Lear more about custom title strategy or dynamic title strategy 
/*
  Using `TitleStrategy` 

  Understand this 

  @Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
};


Using relative paths : 

let's say in our case two components first, second are at the same level, we can specify the 
relative path as follows 

<li> <a routerLink = "../second">  </a> </li>  --> from first component

this is in case of forward levels like let's say we have folder structure first --> first-a, 
in this case relative link can be as follows 

<a routerLink="./first-a"> Link to first A page...</a>

Accessing query parameters 

 */