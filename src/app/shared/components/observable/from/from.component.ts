import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [],
  templateUrl: './from.component.html',
  styleUrl: './from.component.css',
})
export class FromComponent implements OnInit, AfterViewInit {
  constructor(public _utilityService: UtilityService) {}
  count: number = 1;

  @ViewChild('addBtn') addBtn!: ElementRef;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let countVal = 'video ' + this.count++;
      this._utilityService.print(countVal, 'elContainer')
      this._utilityService.print(countVal, 'elContainer2')
    });
  }

}
