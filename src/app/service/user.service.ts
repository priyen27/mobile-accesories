import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { user } from '../classes/user';
import { sendmail } from '../forgetpassword/sendmail';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private login:string="http://localhost:3000/userlogin/";
  private email:string="http://localhost:3000/email/";
  private forgetpass:string="http://localhost:3000/forgetpass/";
  private deletealluser:string="http://localhost:3000/deletealluser/";

  constructor(private _http:HttpClient) { }
  getAllUser(){
    return this._http.get(this.login);
  }
  addUser(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.login,body,{headers:head1});
  }
  UpdateUser(item:user)
  {
       let body=JSON.stringify(item);
       let head1=new HttpHeaders().set('Content-Type','application/json');
     return this._http.put(this.login+item.user_id,body,{headers:head1});

  }
  deleteUser(item:user)
  {
    let header1=new HttpHeaders().set('Content-type','application/json');
    return this._http.delete(this.login+item.user_id,{headers:header1});
  }
  deleteAllUser(item:user[])
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.deletealluser,body,{headers:head1});
  }

  ChangePassword(item:user)
  {
       let body=JSON.stringify(item);
       let head1=new HttpHeaders().set('Content-Type','application/json');
     return this._http.put(this.login,body,{headers:head1});
  }
  getUserById(user_id: number) {
    console.log(user_id);
    return this._http.get(this.login + user_id);
  }
  getLogin(item:user){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.login+item.user_name,body,{headers:head1});
  }
  getPasswordById(user_name:string){
    return this._http.get(this.forgetpass+user_name);
      }

      sendMail(item:sendmail){
        let body=JSON.stringify(item);
        let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.email,body,{headers:head1});
          }


}
