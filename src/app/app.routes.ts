import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch : 'full'},
    {path: 'home', title:"Home", component: HomeComponent},
    {path: 'about', title:"About", component:AboutComponent},
    {path: 'contact', title:"Contact", component:ContactComponent},
    {path: '**', title:"Page Not Found", component:PageNotFoundComponent},
];
