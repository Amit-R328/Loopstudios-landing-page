import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss']
})
export class LeaderComponent implements OnInit {
  isMobile: boolean = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.replaceBrWithSpace();
  }

  ngOnInit(): void {
    this.replaceBrWithSpace();
  }

  replaceBrWithSpace() {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    if (mediaQuery.matches) {
      const brElements = document.querySelectorAll('p br');
      brElements.forEach(br => {
        if (br.parentNode) {
          const space = document.createTextNode(' ');
          br.parentNode.replaceChild(space, br);
        }
      });
    }
  }
}
