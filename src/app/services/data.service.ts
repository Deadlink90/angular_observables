import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  //observable
  nombre$ = new EventEmitter<string>();

  constructor() { }

}
