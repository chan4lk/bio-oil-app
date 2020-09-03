import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'db-consent-notification',
  templateUrl: './consent-notification.component.html',
  styleUrls: ['./consent-notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsentNotificationComponent implements OnInit {
  showPoliciy = false;
  showBanner = true;

  constructor() {}

  ngOnInit(): void {}

  accept() {
    this.showBanner = false;
  }
}
