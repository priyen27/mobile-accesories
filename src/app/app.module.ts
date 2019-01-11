import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule,MatDatepickerModule,MatDatepickerToggle,MatDatepickerToggleIcon,MatButtonModule,MatCheckboxModule,MatProgressSpinnerModule,MatCardModule,MatSortModule,MatPaginatorModule,MatInputModule,MatTableModule,MatFormFieldModule,MatIconModule, MatSelect, MatOptionModule, MatSelectModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatMenuModule, MatRadioModule} from '@angular/material';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RepairComponent } from './repair/repair.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BillComponent } from './bill/bill.component';
import { AddbillComponent } from './addbill/addbill.component';
import { BilldetailComponent } from './billdetail/billdetail.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserComponent } from './user/user.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { RepairorderComponent } from './repairorder/repairorder.component';
import { RepairupdateComponent } from './repairupdate/repairupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    UpdateCategoryComponent,
    ProductComponent,
    AddproductComponent,
    MenuComponent,
    UpdateproductComponent,
    HomepageComponent,
    LoginComponent,
    OrderComponent,
    RepairComponent,
    ForgetpasswordComponent,
    BillComponent,
    AddbillComponent,
    BilldetailComponent,
    UserhomeComponent,
    UserComponent,
    UserupdateComponent,
    ManageuserComponent,
    RepairorderComponent,
    RepairupdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
