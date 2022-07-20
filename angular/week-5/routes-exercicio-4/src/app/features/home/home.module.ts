import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskComponent } from './components/task/task.component';
import { LoginModule } from '../login/login.module';
import { UsersComponent } from './components/users/users.component';



@NgModule({
  declarations: [
    HomeComponent,
    TaskComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule
  ]
})
export class HomeModule { }
