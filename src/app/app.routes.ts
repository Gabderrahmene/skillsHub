import { Routes } from '@angular/router';
import { Modulepage } from './components/modulepage/modulepage';
import { Homescreen } from './components/homescreen/homescreen';
import { Login } from './components/login/login';

export const routes: Routes = [
    { path: "module", component: Modulepage },
    { path: "homescreen", component: Homescreen },
    { path: "", component: Homescreen },
    { path: "login", component: Login }
];
