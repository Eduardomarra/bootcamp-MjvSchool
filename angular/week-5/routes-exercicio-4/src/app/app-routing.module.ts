import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './features/cadastro/pages/cadastro/cadastro.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { ProjectComponent } from './features/projects/pages/project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projetos', component: ProjectComponent},
  { path: 'contato', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
