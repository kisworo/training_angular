import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        // lazy load the Login component
        loadComponent: () => import('./pages/login/login').then((m) => m.Login)
    },
    {
        path: 'home',
        // lazy load the Home component
        loadComponent: () => import('./home/home').then((m) => m.Home)
    }

];
