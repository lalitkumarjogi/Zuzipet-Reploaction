import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   isShrunk = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Shrink when scrollY > 50px
    this.isShrunk = window.scrollY > 50;
  }

  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openModal() {
    // your modal logic
  }
}
