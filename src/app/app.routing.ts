import { Routes,RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';


const arr:Routes=[
  {path:'product',component:ProductComponent},
  {path:'',component:CategoryComponent},
  {path:'updatecat/:cat_id',component:UpdateCategoryComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'updateproduct/:pro_id',component:UpdateproductComponent}

];






export const routing= RouterModule.forRoot(arr);
