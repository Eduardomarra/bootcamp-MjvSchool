import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/pages/contact/contact.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ProjectComponent } from './features/projects/pages/project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projetos', component: ProjectComponent},
  { path: 'contato', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
