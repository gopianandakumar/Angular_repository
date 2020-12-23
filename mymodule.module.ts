import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { MyRoutingModule } from './my-routing.module';



@NgModule({
  declarations: [HomeComponent,
     LoginComponent,
      AboutusComponent,
       ContactusComponent],
       imports: [
        CommonModule,
        FormsModule,
      MyRoutingModule
      ],
      exports : [
        HomeComponent,
        AboutusComponent,
      LoginComponent,
      ContactusComponent
      ]
})
export class MymoduleModule { }
