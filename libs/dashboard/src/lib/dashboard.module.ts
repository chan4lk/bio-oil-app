import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';
import { TranslateModule } from '@ngx-translate/core';
import { VideoTitleComponent } from './video-title/video-title.component';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
  ],
  declarations: [HomeComponent, SectionComponent, VideoTitleComponent],
})
export class DashboardModule {}
