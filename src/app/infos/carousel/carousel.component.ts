import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
  title = 'angularowlslider';
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  };
}



