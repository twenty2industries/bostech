import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
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
