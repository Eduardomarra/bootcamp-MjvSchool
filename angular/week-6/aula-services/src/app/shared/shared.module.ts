import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PhonePipe } from './pipes/phone.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PhonePipe
  ]
})
export class SharedModule { }
