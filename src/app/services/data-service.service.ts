import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public data: string;
  public dataHandler = new Subject();

  constructor() { }

  getData(value) {
    this.dataHandler.next(value);
  }

  getDataObs() {
    return this.dataHandler.asObservable();
  }

}
