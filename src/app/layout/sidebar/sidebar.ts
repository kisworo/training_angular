import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Output() changeActiveMenu = new EventEmitter<string>();

  activeMenu: string = 'employee';

  setActiveMenu(menu: 'employee' | 'organization') {
    this.activeMenu = menu;
    this.changeActiveMenu.emit(menu);
  }
}
