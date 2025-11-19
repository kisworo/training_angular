import { Routes } from '@angular/router';
import { KomponenDua } from './komponen-dua/komponen-dua';
import { KomponenSatu } from './komponen-satu/komponen-satu';


export const routes: Routes = [
    { path: 'komponen-satu', component: KomponenSatu },
    { path: 'komponen-dua', component: KomponenDua }
];
