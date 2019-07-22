import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';


@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss']
})
export class ChildThreeComponent implements OnInit {
  stringInBrowser:any = 'this will show double the number if the value is a number'
  dataFromParent;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getDataObs().subscribe(value => {
      this.dataFromParent = value
      this.evaluateType()
    })    
  }
  evaluateType() {
    this.stringInBrowser = isNaN(this.dataFromParent) === false ? this.dataFromParent * -1 : 'it is not a number';
  }

}
