import { Component, Renderer2 } from '@angular/core';
import { NavMobileComponent } from '../nav-mobile/nav-mobile.component';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuActive = false;

  constructor(private renderer: Renderer2) {}

  toggleMenu() {
    this.menuActive = !this.menuActive;
    if (this.menuActive) {
      this.renderer.setStyle(document.documentElement, 'overflow', 'hidden');
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.setStyle(document.documentElement, 'overflow', 'auto');
      this.renderer.setStyle(document.body, 'overflow', 'auto');
    }
  }
}
