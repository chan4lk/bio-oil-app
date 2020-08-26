import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class VideoService {

  private videoSource = new Subject<string>();

  public videoSource$ = this.videoSource.asObservable();

  public setVideoSource(url: string){
    this.videoSource.next(url);
  }

  constructor() {
  }


}
