import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/classes/user';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  user_id:number;
  user_name:string="";
  password:string="";
  address:string="";
  mobile_no:string="";
  gender_arr:string[]=["male","female"];
  gender:string="male";
  city_arr:string[]=["Ahmedabad","Surat","Vadodara","Rajkot","Morbi","Mahesana","Patan"]
  city:string="";
  type_arr:string[]=["User","Admin"];
  type:string="";
  upuser_arr:user[]=[];
  hide:boolean=true;
  constructor(private _user:UserService,private _route:Router,private _acroute:ActivatedRoute) { }
  addform(){}

  ngOnInit() {
    this.user_id=this._acroute.snapshot.params['user_id'];
    this._user.getUserById(this.user_id).subscribe(
      (data:user[])=>{
        console.log(data);
        this.user_name=data[0].user_name;
        this.password=data[0].password;
        this.address=data[0].address;
        this.mobile_no=data[0].mobile_no;
        this.gender=data[0].gender;
        this.city=data[0].city;
      }
    )
  }
  onUpdateUser(){
  this._user.UpdateUser(new user(this.user_name,this.password,this.address,this.mobile_no,this.gender,this.city,this.user_id)).subscribe(
    (data:any)=>{
            console.log(data);
            alert("record updated succesfully");
             this._route.navigate(['manageuser']);
           }
   );

   }
}
