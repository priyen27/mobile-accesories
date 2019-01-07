export class userbill{
  constructor(
    public user_name:string,
    public password:string,
    public address?:string,
    public mobile_no?:string,
    public gender?:string,
    public city?:string,
    public type?:string,
    public user_id?:number,
    public bill_id?:number,
    public bill_amount?:number,
    public date?:Date,
    public delivery_date?:Date,
    public fk_user_id?:number,
    public fk_pro_id?:number,
    public qty?:number
  ){}
}
