export class order{
  constructor(
    public order_id:number,
    public fk_user_id?:number,
    public order_amount?:number,
    public order_date?:Date,

  ){}
}
