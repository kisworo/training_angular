import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { Organisasi } from '../organisasi/organisasi';
import { Pegawai } from '../pegawai/pegawai';

@Component({
  selector: 'app-home',
  imports: [Header, Sidebar, Pegawai, Organisasi],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  activeMenu: string = 'employee';

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
  }
}
