import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css',
})
export class IntervalComponent implements OnInit {
  obsMessage = '';
  videoSubscription: Subscription = new Subscription();
  constructor(private _utilityService: UtilityService){}
  ngOnInit(): void {
    const broadCastVideo = interval(1000);

    this.videoSubscription = broadCastVideo.subscribe((res) => {
      console.log(res);
      this.obsMessage = 'Video ' + res;
      this._utilityService.print(this.obsMessage, 'elContainer')
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
