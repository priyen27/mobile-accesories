import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { OrderService } from '../order.service';
import { order } from '../classes/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order_arr:order[]=[];
  order_del_arr:order[]=[];
  order_id: number;
  status: string = "pending";
  i:number=0;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  displayedColumns: string[] = ["Action","order_date","order_amount","status","action"];
  orderSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.orderSource.filter = filterValue.trim().toLowerCase();
  }
  ontoporder(){
    this._order.getTopOrder().subscribe((data: order[]) => {
      this.order_arr = data;
      console.log(data);
      this.orderSource.data = this.order_arr;
    });
  }
  onallorder(){
    this._order.getAllOrder().subscribe((data: order[]) => {
      this.order_arr = data;
      console.log(data);
      this.orderSource.data = this.order_arr;
    });
  }
  onUpdatestatus(item:order){
    // this.order_id = item.o_id;
    // this._order.UpdateOrderStatus(new order(this.order_id, this.status)).subscribe((data: any) => {
    //     this._order.getAllOrder().subscribe((data: order[]) => {
    //       this.order_arr = data;
    //       console.log(this.order_arr);
    //     });
    //   });
  if(item.status=='pending')
  {
    item.status='done';
  }
  else
  {
    item.status='pending';
  }
  }
  onDelete(item){
    this._order.deleteOrder(item).subscribe(
      (data:any)=>{
        this.order_arr.splice(this.order_arr.indexOf(item),1);
        this.orderSource=new MatTableDataSource(this.order_arr);
      }
    );
 }
  onMultipledel(){
    this._order.deleteAllOrder(this.order_del_arr).subscribe((data: any) => {
      console.log(this.order_del_arr);
       for (this.i = 0; this.i < this.order_del_arr.length; this.i++) {
         if (this.order_arr.find(x => x == this.order_del_arr[this.i])) {
           this.order_arr.splice(this.order_arr.indexOf(this.order_del_arr[this.i]),1);
         }
       }
       this.orderSource.data = this.order_arr;
       console.log(this.order_arr);
     });

  }
  checkchangeOrder(item: order) {
    if (this.order_del_arr.find(x => x == item)) {
      this.order_del_arr.splice(this.order_del_arr.indexOf(item), 1);
    } else {
      this.order_del_arr.push(item);

    }
    console.log(this.order_del_arr);
  }
  constructor(private _order:OrderService) { }

  ngOnInit() {

    this.orderSource.paginator = this.paginator;
    this.orderSource.sort = this.sort;
    this._order.getAllOrder().subscribe((data: order[]) => {
      this.order_arr = data;
      console.log(data);
      this.orderSource.data = this.order_arr;
    });
  }

}
