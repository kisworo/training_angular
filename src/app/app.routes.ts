// app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component')
            .then(m => m.LoginComponent)
    },
    {
        path: '',
        loadComponent: () => import('./layouts/master-layout/master-layout')
            .then(m => m.MasterLayoutComponent),
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'pegawai',
                pathMatch: 'full'
            },
            {
                path: 'pegawai',
                loadComponent: () => import('./pages/pegawai/pegawai.component')
                    .then(m => m.PegawaiComponent)
            },
            {
                path: 'organisasi',
                loadComponent: () => import('./pages/organisasi/organisasi.component')
                    .then(m => m.OrganisasiComponent)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'pegawai'
    }
];