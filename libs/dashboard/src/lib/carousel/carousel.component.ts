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
    {title: 'FEATURES.TITLE_1', content: 'FEATURES.CONTENT_1', url: 'https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4'},
    {title: 'FEATURES.TITLE_2', content: 'FEATURES.CONTENT_2', url: 'https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4'},
    {title: 'FEATURES.TITLE_3', content: 'FEATURES.CONTENT_3', url: 'https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4'},
    {title: 'FEATURES.TITLE_4', content: 'FEATURES.CONTENT_4', url: 'https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4'},
    {title: 'FEATURES.TITLE_5', content: 'FEATURES.CONTENT_5', url: 'https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4'},
    {title: 'FEATURES.TITLE_6', content: 'FEATURES.CONTENT_6', url: 'https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4'},
    {title: 'FEATURES.TITLE_7', content: 'FEATURES.CONTENT_7', url: 'https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4'},
    {title: 'FEATURES.TITLE_8', content: 'FEATURES.CONTENT_8', url: 'https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4'},
    {title: 'FEATURES.TITLE_9', content: 'FEATURES.CONTENT_9', url: 'https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4'},
    {title: 'FEATURES.TITLE_10', content: 'FEATURES.CONTENT_10', url: 'https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4'},
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

}
