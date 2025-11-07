import { Routes } from '@angular/router';
import { Modulepage } from './components/modulepage/modulepage';
import { Homescreen } from './components/homescreen/homescreen';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Module } from './components/module/module';
import { Affichage } from './components/affichage/affichage';
export const routes: Routes = [
    { path: "", component: Homescreen },
    { path: "homescreen", component: Homescreen },
    { path: "module", component: Modulepage },
    { path: "login", component: Login },
    { path: "register", component: Register },
    { path: "moduleframe", component: Module },
    { path: "affichage", component: Affichage },
];
