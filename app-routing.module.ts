import { createComponentDefinitionMap } from '@angular/compiler/src/render3/partial/component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ProductComponent} from "./product/product.component"
const routes: Routes = [
  {
    path: "",
    redirectTo: "/product",
    pathMatch:"full"
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path:"product/:id",
    component: ProductComponent,
  },
  {
    path: "**",
    redirectTo:"",
  },
];

@NgModule({
  declarations:[
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductComponent,
  ],
  imports: [BrowserModule,AppRoutingModule,StoreModule.forRoot({},{}),RouterModule.forRoot(routes)],
  providers:[],
  bootstrap:[AppComponent],
})
export class AppRoutingModule { }
