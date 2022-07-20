import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroModule } from './features/cadastro/cadastro.module';
import { ContactModule } from './features/contact/contact.module';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { ProjectsModule } from './features/projects/projects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    ProjectsModule,
    LoginModule,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
