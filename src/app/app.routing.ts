import { Routes,RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RepairComponent } from './repair/repair.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BillComponent } from './bill/bill.component';
import { AddbillComponent } from './addbill/addbill.component';
import { billdetail } from './classes/billdetails';
import { BilldetailComponent } from './billdetail/billdetail.component';


const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'adminhome',component:HomepageComponent},
  {path:'product',component:ProductComponent},
  {path:'category',component:CategoryComponent},
  {path:'updatecat/:cat_id',component:UpdateCategoryComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'updateproduct/:pro_id',component:UpdateproductComponent},
  {path:'order',component:OrderComponent},
  {path:'repair',component:RepairComponent},
  {path:'forget',component:ForgetpasswordComponent},
  {path:'bill',component:BillComponent},
  {path:'addbill',component:AddbillComponent},
  {path:'billdetails/:bill_id',component:BilldetailComponent}

];






export const routing= RouterModule.forRoot(arr);
