import { Component, OnInit } from '@angular/core';
import { category } from '../classes/category';
import { user } from '../classes/user';
import { Router, ActivatedRoute } from '@angular/router';
import { RepairService } from '../service/repair.service';
import { CategoryService } from '../service/category.service';
import { UserService } from '../service/user.service';
import { repairs } from '../classes/repair';
import { repairorder } from '../classes/repair_order';
export class UpdateAmt{
  constructor(public id:number,public amt:number)
  {

  }
}
@Component({
  selector: 'app-repairupdate',
  templateUrl: './repairupdate.component.html',
  styleUrls: ['./repairupdate.component.css']
})
export class RepairupdateComponent implements OnInit {
  repair_id:number;
  fk_user_id:number;
  fk_cat_id:number;
  order_date:Date;
  model_no:string;
  problem_spec:string;
  status:string;
  approve:string;
  repair_amt:number;
  cat_arr:category[]=[];
  user_arr:user[]=[];
  fk_repair_id:number;
  constructor(private _route:Router,private _repair:RepairService,private _acroute:ActivatedRoute,private _category:CategoryService,private _user:UserService) { }
  addform(){}
  onUpdateAmt(){
    this._repair.UpdateRepairAmt(new UpdateAmt(this.repair_id,this.repair_amt)).subscribe(
      (data:any)=>{

        console.log(data);
        alert("Updated succesfully");
        this._repair.getAllRepairingByOrder().subscribe(
          (data:any)=>{
            this.fk_repair_id=data[0].fk_repair_id;
            this._repair.InsertRepairOrder(new repairorder(this.repair_amt,this.order_date,this.fk_repair_id)).subscribe(
              (data:any)=>{
                console.log(this.fk_repair_id);
                this._route.navigate(['/repairorder']);
              }
            );
          }
        )
             }
     );
  }
  onCancel(){}



  ngOnInit() {
    this._category.getAllCategory().subscribe(
      (data:any)=>{
          this.cat_arr=data;
      }
    );
    this._user.getAllUser().subscribe(
      (data:any)=>{
          this.user_arr=data;
      }
    );
    this.repair_id=this._acroute.snapshot.params['repair_id'];
    this._repair.getRepairById(this.repair_id).subscribe(
  (data:repairs[])=>{
    console.log(data);
    this.model_no=data[0].model_no;
    this.problem_spec=data[0].problem_spec;
    this.repair_amt=data[0].repair_amt;
    this.fk_cat_id=data[0].fk_cat_id;
    this.fk_user_id=data[0].fk_user_id;
  }
);
  }

}
