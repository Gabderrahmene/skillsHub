import { Routes } from '@angular/router';
import { Modulepage } from './modulepage/modulepage';
import { Homescreen } from './homescreen/homescreen';
import { Login } from './login/login';

export const routes: Routes = [
    {path:"module" ,component:Modulepage},
    {path:"homescreen",component:Homescreen},
    {path:"",component:Homescreen},
    {path:"login",component:Login}
];
