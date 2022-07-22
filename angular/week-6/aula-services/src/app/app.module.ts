import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './features/contact/contact.module';
import { HomeModule } from './features/home/home.module';
import { SellModule } from './features/sell/sell.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    SellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
