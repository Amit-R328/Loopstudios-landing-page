import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss'],
})
export class CreationsComponent implements OnInit {
  isMobile: boolean = false;
  creations = [
    {
      imgSrcDesktop:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736240/loopstudios/desktop/image-deep-earth_apjwp7.jpg',
      imgSrcMobile: 
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736241/loopstudios/mobile/image-deep-earth_qebeck.jpg',
      altText: 'Deep Earth',
      caption: 'DEEP<br/>EARTH',
    },
    {
      imgSrcDesktop:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736241/loopstudios/desktop/image-night-arcade_fnte2x.jpg',
      imgSrcMobile:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736243/loopstudios/mobile/image-night-arcade_lj3fa5.jpg',
      altText: 'Night Arcade',
      caption: 'NIGHT<br/>ARCADE',
    },
    {
      imgSrcDesktop:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736242/loopstudios/desktop/image-soccer-team_kkhybu.jpg',
      imgSrcMobile:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736244/loopstudios/mobile/image-soccer-team_lhipg8.jpg',
      altText: 'Soccer Team VR',
      caption: 'SOCCER<br/>TEAM VR',
    },
    {
      imgSrcDesktop:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736240/loopstudios/desktop/image-grid_wbsrky.jpg',
      imgSrcMobile:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736242/loopstudios/mobile/image-grid_hxv7za.jpg',
      altText: 'The Grid',
      caption: 'THE<br/>GRID',
    },
    {
      imgSrcDesktop:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736240/loopstudios/desktop/image-from-above_vzj0rl.jpg',
      imgSrcMobile:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736241/loopstudios/mobile/image-from-above_zdjdpd.jpg',
      altText: 'From Up Above VR',
      caption: 'FROM UP<br/>ABOVE VR',
    },
    {
      imgSrcDesktop:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736242/loopstudios/desktop/image-pocket-borealis_miibmt.jpg',
      imgSrcMobile:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736244/loopstudios/mobile/image-pocket-borealis_ej5er4.jpg',
      altText: 'Pocket Borealis',
      caption: 'POCKET<br/>BOREALIS',
    },
    {
      imgSrcDesktop:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736240/loopstudios/desktop/image-curiosity_i8vyhl.jpg',
      imgSrcMobile:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736240/loopstudios/mobile/image-curiosity_f24gig.jpg',
      altText: 'The Curiosity',
      caption: 'THE<br/>CURIOSITY',
    },
    {
      imgSrcDesktop:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736241/loopstudios/desktop/image-fisheye_xwc8jz.jpg',
      imgSrcMobile:
        'https://res.cloudinary.com/dcbbqlssh/image/upload/v1719736241/loopstudios/mobile/image-fisheye_zwixwp.jpg',
      altText: 'Make It Fisheye',
      caption: 'MAKE IT<br/>FISHEYE',
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
  }

  getImgSrc(creations: any): string {
    return this.isMobile
      ? creations.imgSrcMobile
      : creations.imgSrcDesktop;
  }
}
