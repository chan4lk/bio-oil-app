import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';
import { TranslateModule } from '@ngx-translate/core';
import { VideoTitleComponent } from './video-title/video-title.component';
import { CarouselComponent } from './carousel/carousel.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ConsentNotificationComponent } from './consent-notification/consent-notification.component';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SlickCarouselModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
  ],
  declarations: [HomeComponent, SectionComponent, VideoTitleComponent, CarouselComponent, VideoPlayerComponent, ConsentNotificationComponent],
})
export class DashboardModule {}
