import {Component, OnInit, ViewEncapsulation} from '@angular/core';

interface SlickEvent {
  event: any;
  slick: any;
}

@Component({
  selector: 'db-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

  constructor() { }

  slides = [
    {title: 'FEATURES.TITLE_1', content: 'FEATURES.CONTENT_1'},
    {title: 'FEATURES.TITLE_2', content: 'FEATURES.CONTENT_2'},
    {title: 'FEATURES.TITLE_3', content: 'FEATURES.CONTENT_3'},
    {title: 'FEATURES.TITLE_4', content: 'FEATURES.CONTENT_4'},
    {title: 'FEATURES.TITLE_5', content: 'FEATURES.CONTENT_5'},
    {title: 'FEATURES.TITLE_6', content: 'FEATURES.CONTENT_6'},
    {title: 'FEATURES.TITLE_7', content: 'FEATURES.CONTENT_7'},
    {title: 'FEATURES.TITLE_8', content: 'FEATURES.CONTENT_8'},
    {title: 'FEATURES.TITLE_9', content: 'FEATURES.CONTENT_9'},
    {title: 'FEATURES.TITLE_10', content: 'FEATURES.CONTENT_10'},
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    dots: true,
    autoplay: true,
    mobileFirst: true,
  };

  ngOnInit(): void {
  }

  addSlide() {
    this.slides.push({title: 'FEATURES.TITLE_1', content: 'FEATURES.CONTENT_1'});
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: SlickEvent) {
    console.log('slick initialized');
  }

  breakpoint(e: SlickEvent) {
    console.log('breakpoint');
  }

  afterChange(e: SlickEvent) {
    console.log('afterChange');
  }

  beforeChange(e: SlickEvent) {
    console.log('beforeChange');
  }

}
