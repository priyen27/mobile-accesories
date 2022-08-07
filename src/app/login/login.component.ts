import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { user } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_name:string;
  password:string;
  flag:boolean=false;
  hide:boolean=true;
  type:string;
  constructor(private _user:UserService,private _route:Router) { }
  onSubmit()
  {
    this._user.getLogin(new user(this.user_name, this.password)).subscribe((data: any) => {
      console.log(data);
      if (data.length === 1) {
        this.type=data[0].type;
        if(this.type=="user")
        {
        localStorage.setItem("email_id", this.user_name);
        this._route.navigate([" "]);
        }
        else{
          this._route.navigate(["/adminhome"]);
        }
      } else {
        alert("The Email_Id Or the Password is wrong");
      }
    });

  }

  onCancel(){}
  addform(){}
  ngOnInit() {
  }


}
