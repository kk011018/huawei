import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageListComponent } from './page-list/page-list.component';
import { DetailComponent } from './detail/detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' // 确保重定向始终完全匹配
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: PageListComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'shoppingCart',
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
