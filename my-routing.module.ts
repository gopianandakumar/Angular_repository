import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';



const routes : Routes =[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
 {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'**',component:LoginComponent},
]
@NgModule({
 imports :[RouterModule.forRoot(routes)],
 exports :[RouterModule],
})
export class MyRoutingModule { }
