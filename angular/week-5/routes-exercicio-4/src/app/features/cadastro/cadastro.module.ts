import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CadastroModule { }
