import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './pages/project/project.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectsModule { }
