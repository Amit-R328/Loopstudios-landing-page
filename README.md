# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![image](https://github.com/user-attachments/assets/618d515f-ede9-4b34-b653-1e69207761ac)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://amit-r328.github.io/Loopstudios-landing-page/

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Angular](https://angular.dev/) - JS library

### What I learned

In the creations.component.ts, I used Angular's HostListener to detect window resize events and dynamically switch between desktop and mobile images. This ensures that users get the optimal image based on their device.


```typescript
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
```

### Useful resources

- [Angular Documentation](https://angular.io/docs) - This was invaluable for understanding component architecture and best practices.

- [Sass: Control Directives and Functions](https://sass-lang.com/documentation/at-rules/control) - Helped me craft efficient mixins for responsive design.

