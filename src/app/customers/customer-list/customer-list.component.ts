import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.displayData();
  }

  displayData(){

    console.log('--here---');
    this.dataService.getdata().subscribe((res:any)=>{
      console.log(res);
    })
  }

}
