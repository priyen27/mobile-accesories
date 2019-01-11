import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { repairs } from '../classes/repair';
import { repairorder } from '../classes/repair_order';

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  private repair:string="http://localhost:3000/repair/";
  private repairorderby:string="http://localhost:3000/repairorderby/";
  private repairorder:string="http://localhost:3000/repairorder/";
  private deleterepair:string="http://localhost:3000/deleteallrepair/";
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
  getAllRepairingByOrder() {
    return this._http.get(this.repairorderby);
  }
  InsertRepairOrder(item)
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.repairorder,body,{headers:head1});
  }
  UpdateRepairAmt(item)
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.repair,body,{headers:head1});
  }
  getRepairById(repair_id: number) {
    return this._http.get(this.repair + repair_id);
  }
  deleteRepairingOrder(item:repairorder)
  {
    let header1=new HttpHeaders().set('Content-type','application/json');
    return this._http.delete(this.repairorder+item.repair_order_id,{headers:header1});
  }

  deleteAllRepairingOrder(item:repairorder[])
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.deleterepair,body,{headers:head1});
  }
  constructor(private _http:HttpClient) { }
}
