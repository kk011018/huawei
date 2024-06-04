import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 导入动画模块
import { DevUIModule } from 'ng-devui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './component/banner/banner.component';
import { ListComponent } from './component/list/list.component';
import { BottomComponent } from './component/bottom/bottom.component';
import { TopComponent } from './component/top/top.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageListComponent } from './page-list/page-list.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { ModalModule } from 'ng-devui/modal';
import { RadioModule } from 'ng-devui/radio';
import { Dialog2Component } from './component/dialog2/dialog2.component';
import { PaginationModule } from 'ng-devui/pagination';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { InputNumberModule } from 'ng-devui';
import { TimeAxisModule } from 'ng-devui/time-axis';
import { AddressComponent } from './component/address/address.component';
import { FormModule } from 'ng-devui/form';
import { Dialog3Component } from './component/dialog3/dialog3.component';
import { TooltipModule } from 'ng-devui/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    ListComponent,
    BottomComponent,
    TopComponent,
    PageListComponent,
    DetailComponent,
    DialogComponent,
    Dialog2Component,
    ShoppingCartComponent,
    AddressComponent,
    Dialog3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DevUIModule,
    FormsModule,
    ModalModule,
    RadioModule,
    PaginationModule,
    InputNumberModule,
    TimeAxisModule,
    FormModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
