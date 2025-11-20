import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { OrganisasiComponent } from '../organisasi/organisasi.component';
import { PegawaiComponent } from '../pegawai/pegawai.component';

@Component({
  selector: 'app-home',
  imports: [Header, Sidebar, PegawaiComponent, OrganisasiComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  activeMenu: string = 'employee';

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
  }
}
