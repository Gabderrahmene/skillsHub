import { Routes } from '@angular/router';
import { AllModulesPage } from './components/all-modules-page/all-modules-page';
import { Homescreen } from './components/homescreen/homescreen';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { StudentLayout } from './components/student-layout/student-layout';
import { Module } from './components/module/module';
import { Affichage } from './components/affichage/affichage';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    { path: "login", component: Login },
    { path: "register", component: Register },
    {
        path: 'student',
        component: StudentLayout,
        children: [
            { path: '', redirectTo: 'homescreen', pathMatch: 'full' },
            { path: 'homescreen', component: Homescreen },
            { path: 'module', component: AllModulesPage },
            { path: 'modulepage', component: Module },
            { path: 'affichage', component: Affichage },
            { path: 'contact', component: Contact },
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
];
