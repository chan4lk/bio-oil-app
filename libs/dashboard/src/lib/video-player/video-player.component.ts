import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VideoService} from "../services/video.service";

@Component({
  selector: 'db-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() poster = '';
  @Input() source = '';
  visible = false;

  @Output() video_closed = new EventEmitter();

  constructor(private service: VideoService) {
  }

  ngOnInit(): void {
    this.service.videoSource$.subscribe(url => {
      if (url !== '') {
        this.visible = true;
      }
      this.source = url;
    })
  }

  close() {
    this.visible = false;
    this.service.setVideoSource('');
  }

}
