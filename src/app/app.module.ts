import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { UserListComponent } from './user-container/components/user-list/user-list.component';
import { UserSingleComponent } from './user-container/components/user-single/user-single.component';
import { UserDetailComponent } from './user-container/components/user-detail/user-detail.component';
import { OrderListComponent } from './order-container/components/order-list/order-list.component';
import { OrderSingleComponent } from './order-container/components/order-single/order-single.component';
import { OrderDetailComponent } from './order-container/components/order-single/components/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
