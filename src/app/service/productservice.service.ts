import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { product } from '../classes/product';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private product:string="http://localhost:3000/product/";
  private deleteallProduct:string="http://localhost:3000/deleteallproduct/";
  private productById:string="http://localhost:3000/productbyid/";
  private updateproduct:string="http://localhost:3000/updateproduct/";
  private prodbycatname:string="http://localhost:3000/productbycatname/";

  constructor(private _http:HttpClient) { }
  addProduct(item:FormData)
  {
  return this._http.post(this.product,item);
  }
  getProductById(pro_id: number) {
    return this._http.get(this.productById + pro_id);
  }

   deleteProduct(item:product)
   {
    let header1=new HttpHeaders().set('Content-type','application/json');
    return this._http.delete(this.product+item.pro_id,{headers:header1});
  }
  deleteAllProduct(item:product[])
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.deleteallProduct,body,{headers:head1});
  }
  getAllProduct() {
    return this._http.get(this.product);
  }
  UpdateProduct(item:FormData)
  {
  return this._http.put(this.updateproduct,item);
  }
  getProductByCatname(cat_name:string){
    return this._http.get(this.prodbycatname+cat_name);
      }
  // UpdateProduct(item:product)
  // {
  //     let body=JSON.stringify(item);
  //     let head1=new HttpHeaders().set('Content-Type','application/json');
  //   return this._http.put(this.product+item.pro_id,body,{headers:head1});
  // }
}
