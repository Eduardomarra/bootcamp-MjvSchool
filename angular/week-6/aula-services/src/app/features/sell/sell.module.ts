import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './pages/sell/sell.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './pages/details/details.component';



@NgModule({
  declarations: [
    SellComponent,
    ProductsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class SellModule { }
