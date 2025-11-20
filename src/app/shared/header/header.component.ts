import { Component } from '@angular/core';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';


@Component({
  selector: 'app-header',
  imports: [BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }
}
