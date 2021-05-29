import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUsuarioComponent } from './dashboard/dashboard-usuario/dashboard-usuario.component';
import { DashboardResolver } from './dashboard/dashboard.resolver';
import { RegistrarUsuarioComponent } from './registro/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {path: 'registro/usuario', component: RegistrarUsuarioComponent},
  {path: 'dashboard/:uid', component: DashboardUsuarioComponent, resolve: {
    dados: DashboardResolver
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
