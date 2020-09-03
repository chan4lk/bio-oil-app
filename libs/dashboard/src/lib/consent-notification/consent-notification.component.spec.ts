import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentNotificationComponent } from './consent-notification.component';

describe('ConsentNotificationComponent', () => {
  let component: ConsentNotificationComponent;
  let fixture: ComponentFixture<ConsentNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
