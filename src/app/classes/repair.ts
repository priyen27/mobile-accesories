export class repairs{
  constructor(
    public repair_id:number,
    public fk_user_id?:number,
    public fk_cat_id?:number,
    public model_no?:string,
    public problem_spec?:string,
    public status?:string,
    public approve?:string
  ){}
}
