import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy, Output, EventEmitter,
} from '@angular/core';
import {VideoService} from "../services/video.service";

@Component({
  selector: 'db-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoTitleComponent implements OnInit {
  @Input() poster = '';
  @Input() source = '';
  @Input() title = '';
  @Input() content = '';

  @Output() video_clicked = new EventEmitter();
  @Output() video_closed = new EventEmitter();

  constructor(private service: VideoService) {}

  ngOnInit(): void {
    this.service.videoSource$.subscribe(url => {
      if(url === ''){
        this.video_closed.emit();
      }
    })
  }

  play(){
    this.video_clicked.emit()
    this.service.setVideoSource(this.source);
  }
}
