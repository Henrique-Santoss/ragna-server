import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para a página inicial
  { path: 'home', component: HomeComponent }, // Página inicial
  { path: 'register', component: RegisterComponent}, // Página de Registro
  { path: 'account', component: AccountPageComponent} // Página da Conta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
