import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WebprojectComponent } from './webproject/webproject.component';
import { MobileprojectComponent } from './mobileproject/mobileproject.component';
import { UiuxprojectComponent } from './uiuxproject/uiuxproject.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'web',component:WebprojectComponent},
  {path:'mobile',component:MobileprojectComponent},
  {path:'uiux',component:UiuxprojectComponent},
];
