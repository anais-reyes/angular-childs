import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';


@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  dataFromParent;
  stringInBrowser:any = 'this will show double the number if the value is a number'

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getDataObs().subscribe(value => {
      this.dataFromParent = value;
      this.evaluateType();
    })
    
  }
  evaluateType() {
    this.stringInBrowser = isNaN(this.dataFromParent) === false ? this.dataFromParent * 2 : 'it is not a number';
  }
}
