import { Component,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { order } from '../classes/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  order_arr:order[]=[];
  order_id: number;
  status: string = "pending";
  i:number=0;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  displayedColumns: string[] = ["order_date","order_amount","status"];
  orderSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.orderSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private _order:OrderService) {}
  ngOnInit(){
    this._order.getTopOrder().subscribe((data: order[]) => {
      this.order_arr = data;
      console.log(data);
      this.orderSource.data = this.order_arr;
    });
  }
}
