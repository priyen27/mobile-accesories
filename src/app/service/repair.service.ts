import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { repairs } from '../classes/repair';

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  private repair:string="http://localhost:3000/repair/";
  // getCategoryById(cat_id: number) {
  //   return this._http.get(this.categorybyid + cat_id);
  // }
  deleteRepairing(item:repairs)
  {
    let header1=new HttpHeaders().set('Content-type','application/json');
    return this._http.delete(this.repair  +item.repair_id,{headers:header1});
  }
  deleteAllRepairing(item:repairs[])
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.repair,body,{headers:head1});
  }
  getAllRepairing() {
    return this._http.get(this.repair);
  }
  constructor(private _http:HttpClient) { }
}
