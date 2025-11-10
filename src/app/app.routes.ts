import { Routes } from '@angular/router';
import { AllModulesPage } from './components/all-modules-page/all-modules-page';
import { Homescreen } from './components/homescreen/homescreen';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { StudentLayout } from './components/student-layout/student-layout';
import { TeacherLayout } from './components/teacher-layout/teacher-layout';
import { TeacherModuleGrid } from './components/teacher-module-grid/teacher-module-grid';
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
    {
        path: 'teacher',
        component: TeacherLayout,
        children: [
            { path: '', redirectTo: 'homescreen', pathMatch: 'full' },
            { path: 'homescreen', component: TeacherModuleGrid },
            { path: 'module', component: AllModulesPage }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
];
