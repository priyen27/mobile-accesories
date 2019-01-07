import { Component, OnInit } from '@angular/core';
import { BillService } from '../service/bill.service';
import { bill } from '../classes/bill';

@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrls: ['./addbill.component.css']
})
export class AddbillComponent implements OnInit {
  bill_id:number;
  bill_amount:number;
  date:Date;
  delivery_date:Date;
  qty:number;
  soharr:number[]=[];
  bill_arr:bill[]=[];
  i:number;
  constructor(private _bill:BillService) { }
  addform(){}
  onaddBill(){
    // this._bill.InsertBills(new bill(this.bill_id,this.bill_amount,this.date,this.qty).subscribe(
    //   (data:any)=>{
    //     this.bill_arr.push(new bill(this.cat_name));

    //     alert("record added successfully");

    //   }
  }
  oncancel(){

  }
  ngOnInit() {
    for(let i=1;i<=50;i++)
    {
      this.soharr.push(i);
    }
  }

}
