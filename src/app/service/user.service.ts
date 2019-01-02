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

  constructor(private _http:HttpClient) { }
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
