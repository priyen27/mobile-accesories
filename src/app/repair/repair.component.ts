import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { repairs } from '../classes/repair';
import { RepairService } from '../service/repair.service';
//import { repair } from '../service/repair.service';
@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  i;
  repair_arr:repairs[]=[];
  repair_del_arr:repairs[]=[];
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  displayedColumns: string[] = ["Action","model_no","problem_spec","status","approve","action"];
  repairSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.repairSource.filter = filterValue.trim().toLowerCase();
  }
  onDelete(item){
  this._repair.deleteRepairing(item).subscribe(
      (data:any)=>{
        this.repair_arr.splice(this.repair_arr.indexOf(item),1);
        this.repairSource=new MatTableDataSource(this.repair_arr);
      }
    );
    alert('Deleted successfully');
  }
  onUpdateapprove(item){
    if(item.approve=='approve')
    {
      item.approve='disapproved';
    }
    else
    {
      item.approve='approve';
    }
  }
  onUpdatestatus(item){

    if(item.status=='pending')
    {
      item.status='done';
    }
    else
    {
      item.status='pending';
    }
  }
  onMultipledel(){
    this._repair.deleteAllRepairing(this.repair_del_arr).subscribe((data: any) => {
      console.log(this.repair_del_arr);
       for (this.i = 0; this.i < this.repair_del_arr.length; this.i++) {
         if (this.repair_arr.find(x => x == this.repair_del_arr[this.i])) {
           this.repair_arr.splice(this.repair_arr.indexOf(this.repair_del_arr[this.i]),1);
         }
       }
       this.repairSource.data = this.repair_arr;
       console.log(this.repair_arr);
     });
  }
  checkchangeProduct(item){

    if (this.repair_del_arr.find(x => x == item)) {
      this.repair_del_arr.splice(this.repair_del_arr.indexOf(item), 1);
    } else {
      this.repair_del_arr.push(item);

    }
    console.log(this.repair_del_arr);
  }
  constructor(private _repair:RepairService) { }

  ngOnInit() {

    this.repairSource.paginator = this.paginator;
    this.repairSource.sort = this.sort;
    this._repair.getAllRepairing().subscribe((data: repairs[]) => {
      this.repair_arr = data;
      console.log(data);
      this.repairSource.data = this.repair_arr;
    });
  }

}
