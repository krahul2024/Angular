import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; 
import { RegisterComponent } from './components/register/register.component';  
import { HomeComponent } from './components/home/home.component'; 
import { ChatComponent } from './components/chat/chat.component';  

const routes: Routes = [
    { path : 'login', component : LoginComponent }, 
    { path : 'register', component : RegisterComponent }, 
    { path : 'chat', component : ChatComponent }, 
    { path : '**', component : HomeComponent , pathMatch : 'full'}, 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
