import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from './components/learn/learn.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ShopComponent } from './components/shop/shop.component';


const routes: Routes = ([
  {path: 'product-list', component : ProductListComponent},
  {path: 'product', component: ProductComponent},
  {path: 'learn/:id', component: LearnComponent},
  {path: 'shop/:id', component: ShopComponent},
  {path: '', redirectTo:'product-list', pathMatch: 'full'},

]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
