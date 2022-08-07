import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { billdetail } from '../classes/billdetails';
import { BillService } from '../service/bill.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billdetail',
  templateUrl: './billdetail.component.html',
  styleUrls: ['./billdetail.component.css']
})
export class BilldetailComponent implements OnInit {
  bill_det_arr:billdetail[]=[];
  fk_bill_id: number;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  displayedColumns: string[] = ["pro_img","pro_name","price","qty"];
  billdetailSource = new MatTableDataSource();
  applyFilter(filterValue: string) {
    this.billdetailSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private _bill:BillService,private _route:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {
  this.fk_bill_id=this._acroute.snapshot.params['fk_bill_id'];
    this._bill.getMoreBillDetails(this.fk_bill_id).subscribe(
      (data:billdetail[])=>{
        this.bill_det_arr=data;
        console.log(data);
        console.log(this.bill_det_arr);
        this.billdetailSource.data = this.bill_det_arr;

        this.billdetailSource.paginator = this.paginator;
          this.billdetailSource.sort = this.sort;
            }
    )
  }

}
