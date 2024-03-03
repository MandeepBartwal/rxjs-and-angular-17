import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css',
})
export class OfFromComponent implements OnInit {
  constructor(private _utitlityService: UtilityService){}
  ngOnInit(): void {
    // OF
    const obs1 = of('mandeep', 'sahil', 'rahul');
    obs1.subscribe((res)=> {
      this._utitlityService.print(res, 'elContainer')
    })

    // const obs2 = of({a'mandeep', 'sahil', 'rahul'});
    // obs2.subscribe((res)=> {
    //   this._utitlityService.print(res, 'elContainer')
    // })
  }
}
