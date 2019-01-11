import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { user } from '../classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_id:number;
  user_name:string="";
  password:string="";
  address:string="";
  mobile_no:string="";
  gender_arr:string[]=["MALE","FEMALE"];
  gender:string="MALE";
  city_arr:string[]=["Ahmedabad","Surat","Vadodara","Rajkot","Morbi","Mahesana","Patan"]
  city:string="";
  type_arr:string[]=["User","Admin"];
  type:string="";
  user_arr:user[]=[];
  hide:boolean=true;
  constructor(private _user:UserService,private _route:Router) { }

  ngOnInit() {
  }
  addform(){}
  oncancel(){
    this._route.navigate(['manageuser']);
  }
  onaddUser()
  {
    this._user.addUser(new user(this.user_name,this.password,this.address,this.mobile_no,this.gender,this.city,this.user_id)).subscribe(
      (data:any)=>{
        this.user_arr.push(new user(this.user_name,this.password,this.address,this.mobile_no,this.gender,this.city,this.user_id));
        console.log(data);
        alert('record addee succesfully');
        this._route.navigate(['manageuser']);
      }
    );
     }
}
