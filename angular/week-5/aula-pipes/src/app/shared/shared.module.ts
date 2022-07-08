import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColorDirective } from './directives/color.directive';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ColorDirective,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PhonePipe
  ]
})
export class SharedModule { }
