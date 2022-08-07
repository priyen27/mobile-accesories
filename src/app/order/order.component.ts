import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { OrderService } from '../order.service';
import { order } from '../classes/order';
import { BillService } from '../service/bill.service';
import { bill } from '../classes/bill';
import { billdetail } from '../classes/billdetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  bill_amount:number;
  date:Date;
  delivery_date:Date;
  fk_user_id:number;
  fk_pro_id;
  qty:number;
  soharr:number[]=[];
  bill_arr:bill[]=[];
  bill_details_arr:billdetail[]=[];
  i:number;
  pricearr:number[]=[];
  qtyarr:number[]=[];
  order_amount:number;
  order_arr:order[]=[];
  order_del_arr:order[]=[];
  order_id: number;
  insertId1:number;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  displayedColumns: string[] = ["Action","order_date","order_amount","action"];
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
  onrepairingorder(){
    this._route.navigate(['/repairorder']);
  }
  onallorder(){
    this._order.getAllOrder().subscribe((data: order[]) => {
      this.order_arr = data;
      console.log(data);
      this.orderSource.data = this.order_arr;
    });
  }
  onDelete(item){
    this._order.deleteOrder(item).subscribe(
      (data:any)=>{
        this.order_arr.splice(this.order_arr.indexOf(item),1);
        this.orderSource=new MatTableDataSource(this.order_arr);
      }
    );
 }
  onUpdatestatus(item:order){
    this.bill_details_arr.splice(0,this.bill_details_arr.length);
    this.bill_amount=this.order_amount;
    this._bill.InsertBills(new bill(item.order_amount,item.fk_user_id,item.order_date)).subscribe(
      (data:any)=>{
        //console.log(data);
        this.insertId1=data.insertId;
        console.log(this.insertId1);
        this._order.getAllOrderDetails(item.order_id).subscribe(
          (data:any)=>{
              console.log(data);
              for(this.i=0;this.i<data.length;this.i++)
              {
                console.log(data);
                this.fk_pro_id=data[this.i].fk_pro_id;
                this.pricearr=data[this.i].price;
                this.qtyarr=data[this.i].qty;
                console.log(this.insertId1,this.fk_pro_id,this.pricearr,this.qtyarr);
                this.bill_details_arr.push(new billdetail(this.insertId1,this.fk_pro_id,this.pricearr,this.qtyarr))
                console.log(this.insertId1,this.fk_pro_id,this.pricearr,this.qtyarr);
              }
              this._bill.InsertBillDetails(this.bill_details_arr).subscribe(
                (data:any)=>{

                }
              );
          }
        );
        alert("added successfully");
        this.onDelete(item);
        this._route.navigate(['/bill']);
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
  constructor(private _order:OrderService,private _bill:BillService,private _route:Router) { }

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
