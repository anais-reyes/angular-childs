import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';


@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {
  dataFromParent;
  stringInBrowser:any = 'this will show double the number if the value is a number'


  constructor(private dataService : DataServiceService) { }

  ngOnInit() {
    this.dataService.getDataObs().subscribe(value => {
      this.dataFromParent = value
      this.evaluateType()
    })
      
  }
  evaluateType() {
    this.stringInBrowser = isNaN(this.dataFromParent) === false ? this.dataFromParent * this.dataFromParent : 'it is not a number';
  }

}
