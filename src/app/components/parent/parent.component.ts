import { Component, OnInit, OnChanges } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  data:string = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }

  clearButton() {
    this.dataService.getData(null);
    this.data = '';
  }

  updateData() {
    this.dataService.getData(this.data);
  }

}
