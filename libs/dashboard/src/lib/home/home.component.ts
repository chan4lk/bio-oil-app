import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'db-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  changed(evt: { target: { value: string } }) {
    this.translate.use(evt.target?.value);
  }
}
