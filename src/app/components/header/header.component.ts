import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }
  closeMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.closeMenu();
  }
}
