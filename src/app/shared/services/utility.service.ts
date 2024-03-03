import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }


  print(val: string, id: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(id)?.appendChild(el);
  }
}
