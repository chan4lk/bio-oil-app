import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

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

  visible = false;

  constructor() {}

  ngOnInit(): void {}
}
